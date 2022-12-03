const { default: mongoose } = require("mongoose")
userModel = require("../models/bookstore-users")
const { handleHttpError } = require("../utils/handleError")

const options = {
    page: 1,
    limit: 10
}

/**
 * Obtener data de todos los usuarios
 */
exports.getAllUsers = async (req, res) => {
    try {
        console.log('desde getAllUsers bookstore-users');
        const user = req.user
        const data = await userModel.paginate({}, options, (error, docs) => {
            res.send({
                users: docs.docs,
                user
            })
        })
    } catch (error) {
        handleHttpError(res, "ERROR_GET_BOOKSTORE_USERS")
    }
}