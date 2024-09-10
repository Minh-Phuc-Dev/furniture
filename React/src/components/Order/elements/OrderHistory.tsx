import Badge from "common/Badge";
import useCallAPIState, {CALL_API_STATUS} from "hooks/UseCallAPIState";
import  {useCallback, useEffect} from 'react';
import orderService from "services/OrderService";
import OrderService from "services/OrderService";
import {type Order} from "types/Order";
import {Product} from "types/Product";


const OrderHistory = () => {
    //TODO: Dispatch order
    const [order, setOrder] = useCallAPIState<Order<Product>[]>(
        {
            status: CALL_API_STATUS.IDLE,
            data: []
        }
    )
    const loadOrder = useCallback(async () => {
        setOrder(CALL_API_STATUS.LOADING)
        const {success, payload} = await OrderService.get<Order<Product>[]>()
        if (!success) {
            setOrder(CALL_API_STATUS.ERROR, payload)
            return
        }
        setOrder(CALL_API_STATUS.SUCCESS, payload)
    }, [setOrder])


    useEffect(() => {
        loadOrder()
    }, [loadOrder])

    return (
        <div className="flex gap-5">
            <div className="grow space-y-5">
                <div className="bg-gray-200 py-2 p-4 hidden md:flex">
                    <p className="text-gray-600 w-10">ID</p>
                    <p className="text-gray-600 w-40">Status</p>
                    <p className="text-gray-600 w-40">Total</p>
                    <p className="text-gray-600 grow">Address</p>
                    <p className="text-gray-600 w-40">Updated at</p>
                    <p className="text-gray-600 w-20">Action</p>
                </div>
                <ul className="space-y-2">
                    {
                        order.data.map(
                            (item) => (
                                <li
                                    key={item.id}
                                    className="border py-2 p-4 hidden md:flex"
                                >

                                    <p className="text-gray-600 w-10">{item.id}</p>
                                    <p className="text-gray-600 w-40">
                                        {
                                            item.status === "PENDING" ? (
                                                <Badge type="outline" intent="primary">Pending</Badge>
                                            ) : item.status === "CANCELED" ? (
                                                <Badge type="outline" intent="error">Canceled</Badge>
                                            ) : null
                                        }
                                    </p>
                                    <p className="text-gray-600 w-40 font-medium">${item.totalAmount}</p>
                                    <p className="text-gray-600 grow">{item.attributes.streetAddress}</p>
                                    <p className="text-gray-600 w-40">{new Date(item.createdAt).toLocaleTimeString()}</p>
                                    <div className="text-gray-600 w-20">

                                        {
                                            item.status === "PENDING" ? (
                                                <Badge
                                                    type="intent"
                                                    intent="error"
                                                    onClick={
                                                        async () => {
                                                            await orderService.updateStatus(
                                                                {
                                                                    id: item.id,
                                                                    status: "CANCELED"
                                                                }
                                                            )
                                                            await loadOrder()

                                                        }
                                                    }
                                                >
                                                    Cancel
                                                </Badge>
                                            ) : null
                                        }

                                    </div>
                                </li>
                            )
                        )
                    }

                </ul>

            </div>
        </div>
    )

};

export default OrderHistory;