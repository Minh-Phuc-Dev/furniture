const User = require("@models/User/UserModel");
const {JsonResult} = require("@helpers/JsonResult");
const {HTTP_CODE, HTTP_REASON} = require("@helpers/HttpStatus");


class AuthenticationService {
    /**
     * Register a new user
     * @async
     * @static
     * @param {RegisterDTO} dto
     * @returns {Promise<JsonResult>}
     */
    static async register(dto) {
        const user = await User.create(
            {
                role: "USER",
                email: dto.email,
                password: dto.password,
                displayName: dto.displayName
            }
        )
        return JsonResult.builder(
            HTTP_CODE.CREATED,
            HTTP_CODE.CREATED,
            user,
            "User created successfully."
        )
    }

    static async login(dto) {
        return await User.findOne(
            {
                where: {email: dto.email, password: dto.password},
                attributes: {
                    exclude: "password"
                }
            }
        ).then(
            user => user?.toJSON()
        )
    }

    static async credential(id) {
        return JsonResult.builder(
            HTTP_CODE.OK,
            HTTP_CODE.OK,
            await User.findOne({
                    where: {
                        id
                    },
                    attributes: {
                        exclude: "password"
                    }
                }
            ).then(
                user => user ? user.toJSON() : null
            ),
            HTTP_REASON.OK
        )
    }
}

module.exports = {
    AuthenticationService
}