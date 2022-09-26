import { fetch, fetchAll } from "../../lib/postgres.js"
import { GETCATEGORIES, GETIMAGES, POSTCATEGORIES, DELETECATEGORY, UPDATECATEGORY } from "./query.js"

const GET = async({ category_id = 0 }) => {
    try {
        const categoris = await fetchAll(GETCATEGORIES, [category_id])
        const images = await fetchAll(GETIMAGES)
        console.log(categoris);
        return categoris.map(category => {
            category.products = category.products[0] == null ? [] : category.products
            category.products.map(product => {
                product.images = images.filter(image => image.product_id == product.product_id && image.product_id)

                return product
            })
            return category
        })

    } catch (error) {
        console.log(error);
    }
}

const POST = async({ category_name }) => {
    try {
        return await fetch(POSTCATEGORIES, [category_name])
    } catch (error) {
        console.log(error);
    }
}

const PUT = async({ category_name, category_id }) => {
    try {
        return await fetch(UPDATECATEGORY, [category_name, category_id])
    } catch (error) {
        console.log(error);
    }
}

const DELETE = async({ category_id }) => {
    try {
        return await fetch(DELETECATEGORY, [category_id])
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