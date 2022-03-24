import User, { IUser } from '../Models/User.model';

async function CreateUser(user: IUser): Promise<IUser> {
    return User.create(user)
        .then((data: IUser) => {
            return data;
        })
        .catch((error: Error) => {
            throw error;
        });
}

export default {
    CreateUser
};