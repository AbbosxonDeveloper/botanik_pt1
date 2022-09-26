import { Router } from "express";
import checkToken from "../../middlewares/check-token.js";
import controller from './controller.js'

const router = Router()

router.get('/products', controller.GET)
router.get('/products/:category_id', controller.GET)
router.post('/products', checkToken, controller.POST)
router.put('/products', checkToken, controller.PUT)
router.delete('/products/:product_id', checkToken, controller.DELETE)

export default router