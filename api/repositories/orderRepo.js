import { v4 as uuidv4 } from 'uuid';

export default (Order, User, Recipe) => {

    const orders = [
        new Order({
            id: 'a4b8b6e0-1b9a-11ec-9621-0242ac130002',
            orderDate: '2023-04-25',
            recipeId: 'a35ce12d-d52b-4a07-90ad-68e985b779e7',
            quantity: '1',
            userId: 'e3b8b6e0-1b9a-11ec-9621-0242ac130002'
        }),
        new Order({
            id: 'a4b8b6e0-1b9a-11ec-9621-0242ac130003',
            orderDate: '2023-04-27',
            recipeId: 'a35ce12d-d52b-4a07-90ad-68e985b779e7',
            quantity: '1',
            userId: 'e3b8b6e0-1b9a-11ec-9621-0242ac130002'
        }),
    ]

    const users = [
        new User({id: 'e3b8b6e0-1b9a-11ec-9621-0242ac130002', lastname: 'Doe', firstname: 'John', birthDate: '1990-01-01', address: '1 rue de la Paix', phone: '0123456789', email: 'johndoe@outlook.fr',}),
        new User({id: 'e3b8b6e0-1b9a-11ec-9621-0242ac130003', lastname: 'Doe', firstname: 'Jane', birthDate:'1990-01-01', address: '1 rue de la Paix', phone: '0123456789', email: 'janedoe@outlook.fr',})
    ];

    const recipes = [
        new Recipe(
          'a35ce12d-d52b-4a07-90ad-68e985b779e7',
          'Chausson aux pommes',
          'pommes, pate feuilletée, sucre',
          'faire compote, former chausson, cuire'
        ),
        new Recipe(
          'dc466424-4297-481a-a8de-aa0898852da1',
          'Quiche thon tomate',
          'thon, tomate, pate feuilletée, oeuf, creme',
          'couper thon, tomates, mélanger creme et oeufs, mettre dans moule, cuire'
        )
      ];


    const listOrders = () => {
        return orders;
    }

    const createOrder = (order) => {
        if(!recipes.find((recipe) => recipe.id === order.recipeId)) {
            return null;
        }
        if(!users.find((user) => user.id === order.userId)) {
            return null;
        }
    

        const newOrder = new Order({id: uuidv4(), ...order})
        orders.push(newOrder);
        return newOrder;
    }

    return {
        listOrders,
        createOrder
    }
}