
import { Schema, model, connect } from "mongoose";

class DbManager {
    mongoDbconnString: string = "";
    mongoDb = null;
    static dbManager:DbManager;

    constructor() {
        // this.mongoDbconnString = connString;
    }

    static getManagerInstance() {
        if (!this.dbManager) {
            this.dbManager = new DbManager();
        }

        return this.dbManager;
    }

    async connectToDb(connString:string) {

        if (!this.mongoDb) {
            this.mongoDb = await this.connectToMongoDB(connString);
        }
    }

    async connectToMongoDB(connString: string) {
        return await connect(connString);
    }

    disconnect(){
        
    }

}

export default DbManager;

const CategorySchema = new Schema(
    { categoryName: String },
    { timestamps: true }
);

const CategoryModel = model("Category", CategorySchema, "Bookstore");