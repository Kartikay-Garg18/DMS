import connect from "./db/index.js";
import dotenv from "dotenv";
import app from "./app.js";

dotenv.config({
    path: './env'
})
const port = process.env.PORT || 8000;
connect()
.then(() => {
    app.listen(port, () =>{
        console.log(`Server is running on port ${port}`);
    })
})
.catch((err) => {
    console.error(err);
})