const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require ("../models/listing.js");

const MONGO_URL = "mongodb://localhost:27017/wanderlust";

main()
 .then(() =>{
    console.log("Connected to MongoDB");
})
.catch((err) =>{
    console.log(err);
});

async function main() {
    await mongoose.connect(MONGO_URL);
};

const initDB = async () => {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({ ...obj, owner: "682b83b33817335587de6b81"}));
    await Listing.insertMany(initData.data);
    console.log("Database was initialized");
};

initDB();

