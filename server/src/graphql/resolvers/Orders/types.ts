export interface IOrderProductInput {
    product_id: string;
    quantity: number;
    unit?: string;
    price: number;
}
interface IOrderInput {
    customer_id: string;
    contact_number: string;
    payment_option_id: string;
    delivery_address: string;
    amount: number;
    products: Array<IOrderProductInput>;
    payment_id?:  string;
}

export interface IOrderInputArgs {
    id?: string;
    input: IOrderInput;
}