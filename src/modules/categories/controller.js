import model from "./model.js"

const GET = async(req, res) => {
    try {
        console.log(req.params);
        const categories = await model.GET(req.params)
        return res.send(categories)
    } catch (error) {
        console.log(error);
    }
}

const POST = async(req, res) => {
    try {
        let category = await model.POST(req.body)
        console.log(category);
        return res.status(201).json({
            status: 201,
            message: "ok",
            data: category
        })
    } catch (error) {
        console.log(error);
    }
}

const PUT = async(req, res) => {
    try {
        let category = await model.PUT(req.body)
        return res.status(201).json({
            status: 201,
            message: "updated",
            data: category
        })
    } catch (error) {
        console.error(error);
    }
}

const DELETE = async(req, res) => {
    try {
        let category = await model.DELETE(req.params)
        console.log(req.params.category_id);
        return res.status(202).json({
            status: 202,
            message: "deleted"
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