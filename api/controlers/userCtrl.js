import User from "../models/User.js";

export default (userRepo) => {

        const getUsers = (_, res) => {
            const users = userRepo.listUsers();
            res.status(200).send({data: users});
        }

        const createUser = (req, res) => {

            if(!User.phoneIsValid(req.body.phone)){
                res.status(400).send({
                    error: 'Phone not valid'
                })
            }

            const user = userRepo.createUser(req.body);
            res.status(201).send({data: user});
        }

        const updateUser = (req, res) => {
            const id = req.params.id;
            const user = userRepo.updateUser(id, req.body);
            if (user === null) {
                return res.status(404).send({error: 'User not found'});
            }

            res.status(200).send({data: user});
        }

        const deleteUser = (req, res) => {
            const id = req.params.id;
            const user = userRepo.deleteUser(id);
            if (user === null) {
                return res.status(404).send({error: 'User not found'});
            }

            res.status(200).send({metadata: user});
        }

        return {
            getUsers,
            createUser,
            updateUser,
            deleteUser
        }

}