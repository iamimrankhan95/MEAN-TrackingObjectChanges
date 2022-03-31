import mongoose from "mongoose";

export class DbManager {
    connString: string = "";

    constructor(connString:string) {
        this.connString = connString;
    }

    connectToDb(): DbManager {
        this.connectToMongoDB(this.connString);
        return this;
    }

    connectToMongoDB(connString: string) {
        const connect = () => {
            mongoose
                .connect(connString)
                .then(() => {
                    return console.info(`Successfully connected to ${connString}`)
                })
                .catch(err => {
                    console.error(`Error connecting to database :`, err)
                    return process.exit(1)
                })
        }

        connect();

        mongoose.connection.on("disconnected", connect)
    }

    disconnect(){
        
    }
}

export default DbManager;