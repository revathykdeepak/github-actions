const mongoose = require("../localMongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    userId: {
      type: String,
      required: true
    },
    firstName: String,
    lastName: String,
});

const User = mongoose.model('Users', userSchema);

module.exports = User


