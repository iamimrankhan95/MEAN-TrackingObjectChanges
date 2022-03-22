import { environment } from '../../../environments/environment';
const BASE_URL = "http://localhost:8080"
export const Urls = {
    FETCH_USER_DETAILS_BY_USER_ID : BASE_URL + "/user/",
    FETCH_ALL_USERS: BASE_URL+"/user/all",
    CHANGE_ACTIVE_STATUS: BASE_URL + "/status",
    FETCH_ALL_STATUS: BASE_URL + "/status/getStatus"
}