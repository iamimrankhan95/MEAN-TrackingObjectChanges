import { environment } from '../../../environments/environment';
export const urls = {
    user: {
        create: 'create-permission',
        readUsers: environment.baseUrlNode+ 'user/',
        update: 'update-permission',
        delete: 'delete-permission',
    },
    status: {
        create: 'create-permission',
        readStatuses: environment.baseUrlNode+ 'status/',
        update: 'update-permission',
        delete: 'delete-permission',
    },
}