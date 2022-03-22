import { environment } from '../../../environments/environment';
export const urls = {
    user: {
        create: 'create-permission',
        readUsers: environment.baseUrlNode+ 'user/',
        signIn: environment.baseUrlNode+ 'user/sign-in',
        delete: 'delete-permission',
    },
    status: {
        create: 'create-permission',
        readStatuses: environment.baseUrlNode+ 'status/',
        update: 'update-permission',
        delete: 'delete-permission',
    },
}