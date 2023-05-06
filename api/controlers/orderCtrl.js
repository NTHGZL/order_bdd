
import { DateTime } from "luxon";

export default (orderRepo) => {

    const getOrders = (_, res) => {
        const orders = orderRepo.listOrders();
        res.status(200).send({data: orders});
    }

    const createOrder = (req, res) => {

       // Check if the order date is in english format
         const date = DateTime.fromFormat(req.body.orderDate, 'yyyy-MM-dd');
            if (!date.isValid) {
                return res.status(400).send({error: 'Invalid date format'});
            }

        if(req.body.quantity < 1) {
            return res.status(400).send({
                error: 'Quantity not valid'
            })
        }

        const order = orderRepo.createOrder(req.body);

        if (!order) {
            return res.status(400).send({error: 'Recipe or user not found'});
        }
        res.status(201).send({data: order});
    }

    return {
        getOrders,
        createOrder
    }

}