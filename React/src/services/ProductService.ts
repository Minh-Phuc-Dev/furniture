import interceptor from "apis/Interceptor";
import {requestApiHelper} from "helpers/Request";
import {Product} from "types/Product";

class ProductService {

    static async create<T = Product>(
        payload: Omit<Product, "id" | "createdAt" | "updatedAt" | "meta" | "rating">
    ) {
        return await requestApiHelper<T, T>(
            interceptor.post(
                "products",
                payload
            )
        )
    }

    static async update<T = Product>(
        payload: Product
    ) {
        return await requestApiHelper<T, T>(
            interceptor.put(
                "products",
                payload
            )
        )
    }

    static async get<T = Product[]>() {
        return await requestApiHelper<T, T>(
            interceptor.get(
                "products"
            )
        )
    }

    static async getBySlug<T = Product>(slug: string) {
        return await requestApiHelper<T, T>(
            interceptor.get(
                "product",
                {
                    params: {
                        slug
                    }
                }
            )
        )
    }
}

export default ProductService