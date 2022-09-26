import jwt from '../../lib/jwt.js';
import model from './model.js'



const LOGIN = async(req, res) => {
    try {
        const admin = await model.LOGIN(req.body);
        console.log(admin);
        if (admin) {

            return res.status(200).json({
                status: 200,
                message: "ok",
                token: jwt.sign({ adminId: admin.admin_id })
            })
        }
        return res.status(401).json({
            status: 200,
            message: "authorization error",
            token: null
        })
    } catch (error) {
        console.log(error);
    }
}



export default {
    LOGIN,
}