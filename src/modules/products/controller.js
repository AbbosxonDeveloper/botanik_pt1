import model from "./model.js"

const GET = async(req, res) => {
    try {
        const categories = await model.GET(req.params)
        return res.send(categories)
    } catch (error) {
        console.log(error);
    }
}

const POST = async(req, res) => {
    try {
        let product = await model.POST(req.body)
        console.log(product);
        return res.status(201).json({
            status: 201,
            message: "ok",
            data: product
        })
    } catch (error) {
        console.log('product', error);
    }
}

const PUT = async(req, res) => {
    try {
        let product = await model.PUT(req.body)
        return res.status(201).json({
            status: 201,
            message: "updated",
            data: product,
        })
    } catch (error) {
        console.error(error);
    }
}

const DELETE = async(req, res) => {
    try {
        let product = await model.DELETE(req.params)
        console.log(req.params.product_id);
        return res.status(202).json({
            status: 202,
            message: "deleted",
            data: product
        })
    } catch (error) {
        console.error(error);
    }
}

export default {
    GET,
    POST,
    PUT,
    DELETE
}