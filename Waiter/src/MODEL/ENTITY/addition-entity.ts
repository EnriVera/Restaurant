import AdditionProduct from "./addition-product-entity";

interface Addition {
    id: string,
    data: Date,
    status: string,
    total: number,
    table: any,
    addition_product: Array<AdditionProduct>,
}

export default Addition;
