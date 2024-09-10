const {JsonResult} = require("@helpers/JsonResult");
const {HTTP_CODE} = require("@helpers/HttpStatus");
const {Product} = require("@models/Product/ProductModel");
const {isNull} = require("lodash");

class ProductService {

    /**
     * Create category
     * @param {ProductDTO} dto
     * @returns {Promise<JsonResult>}
     */
    static async create(dto){
        return JsonResult.builder(
            HTTP_CODE.CREATED,
            HTTP_CODE.CREATED,
            await Product.create(dto),
            "Product created successfully."
        )
    }

    /**
     * Create category
     * @param {ProductDTO} dto
     * @returns {Promise<JsonResult>}
     */
    static async update(dto){
        const product = await Product.findByPk(dto.id)

        if (isNull(product)) {
            return JsonResult.builder(
                HTTP_CODE.BAD_REQUEST,
                HTTP_CODE.NOT_FOUND,
                null,
                "Product not found."
            )
        }

        product.set(dto)
        await product.save()

        return JsonResult.builder(
            HTTP_CODE.OK,
            HTTP_CODE.OK,
            product.toJSON(),
            "Product update successfully."
        )
    }

    /**
     * Get all categories
     * @returns {Promise<JsonResult>}
     */
    static async findAll(){
        return JsonResult.builder(
            HTTP_CODE.OK,
            HTTP_CODE.OK,
            await Product.findAll(),
            "Product fetched successfully."
        )
    }

    /**
     * Get product by id
     * @param {number} id
     * @returns {Promise<JsonResult>}
     */
    static async findById(id){
        return JsonResult.builder(
            HTTP_CODE.OK,
            HTTP_CODE.OK,
            await Product.findOne(
                {
                    where: {
                        id
                    }
                }
            ),
            "Product fetched successfully."
        )
    }
}

module.exports = {
    ProductService
}