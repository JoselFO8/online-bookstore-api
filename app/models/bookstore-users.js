const mongoose = require("mongoose")
const mongoosePaginate = require("mongoose-paginate-v2")

const BookStoreUserScheme = new mongoose.Schema(
    {
        name: {
            type: String
        },
        email: {
            type: String,
            unique: true
        },
        password: {
            type: String
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
)

BookStoreUserScheme.plugin(mongoosePaginate)

module.exports = mongoose.model("bookstore-user", BookStoreUserScheme)
