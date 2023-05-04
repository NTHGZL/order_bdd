
import { DateTime } from "luxon"
import { v4 as uuidv4 } from 'uuid';

export default (User) => {

    const users = [
        // User with uuid
        new User({id: 'e3b8b6e0-1b9a-11ec-9621-0242ac130002', lastname: 'Doe', firstname: 'John', birthDate: '1990-01-01', address: '1 rue de la Paix', phone: '0123456789', email: 'johndoe@outlook.fr',}),
        new User({id: 'e3b8b6e0-1b9a-11ec-9621-0242ac130003', lastname: 'Doe', firstname: 'Jane', birthDate:'1990-01-01', address: '1 rue de la Paix', phone: '0123456789', email: 'janedoe@outlook.fr',})
    ];

    const listUsers = () => {
        return users;
    }

    const createUser = (user) => {
        const newUser = new User({id: uuidv4(), ...user})
        users.push(newUser);
        return newUser;
    }

    const updateUser = (id, user) => {
        const index = users.findIndex((u) => u.id === id);
        if (index === -1) {
            return null;
        }
        users[index] = new User({id, ...user});
        return users[index];
    }

    const deleteUser = (id) => {
        const index = users.findIndex((u) => u.id === id);
        if (index === -1) {
            return null;
        }
        const user = users[index];
        users.splice(index, 1);
        return user;
    }

    return {
        listUsers,
        createUser,
        updateUser,
        deleteUser
    }
}