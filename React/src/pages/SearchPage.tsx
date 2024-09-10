import Button from "common/Button";
import Breadcrumb from "components/Breadcrumb";
import Item from "components/Item";
import useCallAPIState, {CALL_API_STATUS} from "hooks/UseCallAPIState";
import {isEmpty, isNull} from "lodash";
import {useCallback, useEffect} from "react";
import {useSearchParams} from "react-router-dom";
import ProductService from "services/ProductService";
import {Product} from "types/Product";

const SearchPage = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const search = searchParams.get("search")


    const [products, setProducts] = useCallAPIState<Product[]>(
        {
            status: CALL_API_STATUS.IDLE,
            data: []
        }
    )

    const fetchData = useCallback(
        async () => {
            setProducts(CALL_API_STATUS.LOADING)
            const {payload, success} = await ProductService.get()
            if (success) {
                setProducts(CALL_API_STATUS.SUCCESS, payload)
            }
        }, [setProducts]
    )

    useEffect(
        () => {
            fetchData()
        },
        [fetchData]
    )

    const items = products.data.filter(
        product => isNull(search) ? true : product.name.toLowerCase().includes(search?.toLowerCase() || "")
    )

    return (
        <div
            className="max-w-1200 mx-auto"
        >
            <Breadcrumb
                items={
                    [
                        {
                            label: "Shop",
                            to: "/search"
                        }
                    ]
                }
            />
            {
                isEmpty(items) ? (
                    <div className="p-5 flex flex-col justify-center space-y-5">
                        <h1 className='text-center opacity-80'>No product found!</h1>
                        <Button onClick={() => setSearchParams({})} className="block w-fit mx-auto" intent="primary" variantType="intent">Clear search</Button>
                    </div>
                ) : (
                    <div className="grid grid-cols-4 gap-5">
                        {
                            items.map(
                                product => (
                                    <div key={product.id}>
                                        <Item item={product}/>
                                    </div>
                                )
                            )
                        }
                    </div>
                )
            }
        </div>
    );
};

export default SearchPage;