import app from "./server.js";
import mongodb from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const MongoClient = mongodb.MongoClient;

const port = process.env.PORT || 8000;

MongoClient.connect(
    process.env.PORTFOLIO_URI,
    {
        poolSize: 50,
        wtimeout: 2500,
        useNewUrlParse: true,

    }
)
.catch(e => {
    console.log(e.stack);
    process.exit();
})
.then(async () => {
    app.listen(port, () => {
        console.log(`listening on port ${port}`)
    })
    
})
