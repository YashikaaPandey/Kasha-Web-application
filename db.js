const mongoose = require("mongoose");

const url =
  "mongodb+srv://yashika:yashika11@cluster0.08i8qgr.mongodb.net/for-her-by-her?retryWrites=true&w=majority";

module.exports.connect = () => {
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("MongoDB connected successfully");
    })
    .catch((error) => console.log("Error: ", error));
};
