const express = require("express")

const controller = require("../controllers/bookstore-users")

const router = express.Router()

/**
 * Ruta: bookstore-users
 */
router.get(
    `/`,
    controller.getAllUsers
)

module.exports = router