const {AuthenticateController} = require("@controllers/AutheticateController");
const {wrapperAsyncHandler} = require("@helpers/ErrorWrapper");
const {authenticate} = require("@middleware/Authenticate");
const router = require("express").Router()

router.post(
    "/login",
    AuthenticateController.login
)

router.post(
    "/register",
    wrapperAsyncHandler(AuthenticateController.register)
)

router.get(
    "/credential",
    authenticate,
    wrapperAsyncHandler(AuthenticateController.credential)
)

router.get(
    "/logout",
    authenticate,
    wrapperAsyncHandler(AuthenticateController.logout)
)

module.exports = router