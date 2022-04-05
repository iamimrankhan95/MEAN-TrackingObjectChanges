import { AzureFunction, Context, HttpRequest } from "@azure/functions";
// import * as db from "../lib/azure-cosmosdb-mongodb";
import DbManager from "../lib/managers/db.manager";
import UserService from "../lib/services/user.service";

const httpTrigger: AzureFunction = async function (
    context: Context,
    req: HttpRequest
): Promise<void> {
    try {
        context.log('HTTP trigger function processed a request.');

        let response = null;
        const dbManager: DbManager = DbManager.getManagerInstance();
        const userService: UserService = UserService.getServiceInstance();

        await dbManager.connectToDb(process.env["CosmosDbConnectionString"]);

        switch (req.method) {
            case "GET":

                if (req?.query.id || (req?.body && req?.body?.id)) {
                    response = {
                        documentResponse: await userService.readUserById(),
                    };
                } else {
                    // allows empty query to return all items
                    const dbQuery =
                        req?.query?.dbQuery || (req?.body && req?.body?.dbQuery);
                    response = {
                        documentResponse: await userService.readUser(),
                    };
                }
                break;
            case "POST":
                context.log(req?.body);
                if (req?.body?.document) {
                    const insertOneResponse = await userService.updateUserStatus(req?.body?.document.name, req?.body?.document.status);
                    response = {
                        documentResponse: insertOneResponse,
                    };
                } else {
                    throw Error("No document found");
                }

                break;
            // case "PUT": 
            //     context.log(req?.body);
            //     if (req?.body?.document) {
            //         const insertOneResponse = await db.updateUserByName(req?.body?.document);
            //         response = {
            //             documentResponse: insertOneResponse,
            //         };
            //     } else {
            //         throw Error("No document found");
            //     }

            //     break;
            // case "DELETE":
            //     if (req?.query?.id || (req?.body && req?.body?.id)) {
            //         response = {
            //             documentResponse: await db.deleteItemById(req?.body?.id),
            //         };
            //     } else {
            //         throw Error("No id found");
            //     }

            //     break;
            default:
                throw Error(`${req.method} not allowed`)
        }

        context.res = {
            body: response,
        };
    } catch (err) {
        context.log(`*** Error throw: ${JSON.stringify(err)}`);

        context.res = {
            status: 500,
            body: err,
        };
    }
};

export default httpTrigger;