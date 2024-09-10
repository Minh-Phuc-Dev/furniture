import {createColumnHelper} from "@tanstack/react-table";
import Modal from "common/Modal";
import {
    TableHeaderGroups,
    TablePageSize,
    TablePagination,
    TableRows,
    TableSearch,
    TableSetting,
    useSimpleTable
} from "common/TanStackTable";
import CreateProduct from "components/Products/elements/CreateProduct";
import ProductModal from "components/Products/elements/ProductModal";
import useCallAPIState, {CALL_API_STATUS} from "hooks/UseCallAPIState";
import {useCallback, useEffect} from "react";
import ProductService from "services/ProductService";
import {Product} from "types/Product";

const {accessor} = createColumnHelper<Product>();

const columns = [
    accessor(
        "id",
        {
            header: "Id",
            size: 20,
            cell: ({row, table, getValue}) => (
                <Modal.Root>
                    <Modal.Trigger mode="open">
                        # {getValue()}
                    </Modal.Trigger>
                    <ProductModal table={table} row={row.original} index={row.index}/>
                </Modal.Root>
            )
        }
    ),
    accessor(
        "name",
        {
            header: "Name"
        }
    ),
    accessor(
        "categoryId",
        {
            size: 60,
            header: "Category"
        }
    ),
    accessor(
        "status",
        {
            size: 60,
            header: "Status"
        }
    ),
    accessor(
        "price",
        {
            size: 60,
            header: "Discount"
        }
    ),
    accessor(
        "oldPrice",
        {
            size: 60,
            header: "Price"
        }
    ),
    accessor(
        "quantity",
        {
            size: 60,
            header: "Quantity"
        }
    ),
    accessor(
        "description",
        {
            header: "Description"
        }
    )
];


const ManageProduct = () => {
    const [products, setProducts] = useCallAPIState<Product[]>(
        {
            status: CALL_API_STATUS.IDLE,
            data: []
        }
    )


    const table = useSimpleTable<Product>(
        products.data,
        columns
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


    return (
        <div className="space-y-2">
            <div className="flex justify-between">
                <TableSearch table={table}/>
                <div className="flex space-x-2">
                    <Modal.Root>
                        <CreateProduct table={table}/>
                    </Modal.Root>
                    <TableSetting table={table}/>
                </div>
            </div>

            <table className="border rounded min-w-full">
                <thead>
                <TableHeaderGroups table={table}/>
                </thead>
                <tbody>
                <TableRows table={table}/>

                </tbody>
            </table>
            <div className="flex justify-between">
                <TablePageSize table={table}/>
                <TablePagination table={table}/>
            </div>

        </div>
    );
};

export default ManageProduct;