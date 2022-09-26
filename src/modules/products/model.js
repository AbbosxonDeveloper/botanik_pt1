import { fetch, fetchAll } from "../../lib/postgres.js"
import { GETPRODUCTS, GETIMAGES, POSTPRODUCTS, DELETEPRODUCTS, UPDATEPRODUCTS } from "./query.js"

const GET = async({ product_id }) => {
    try {

        return await fetchAll(GETPRODUCTS, [product_id])

    } catch (error) {
        console.log(error);
    }
}

const POST = async({ product_name, description, count, price, category_id }) => {
    try {
        return await fetch(POSTPRODUCTS, [product_name, description, count, price, category_id])
    } catch (error) {
        console.log(error);
    }
}

const PUT = async({ price, product_id }) => {
    try {
        return await fetch(UPDATEPRODUCTS, [price, product_id])
    } catch (error) {
        console.log(error);
    }
}

const DELETE = async({ product_id }) => {
    try {
        return await fetch(DELETEPRODUCTS, [product_id])
    } catch (error) {
        console.log(error);
    }
}


export default {
    GET,
    POST,
    PUT,
    DELETE
}