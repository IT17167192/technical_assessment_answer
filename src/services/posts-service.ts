import {API} from "../constants/Constants";
import {API_ROUTES} from "../constants/Routes";

export const getAllPosts = () => {
    return fetch(`${API}${API_ROUTES.posts_url}`, {
        method: 'GET'
    })
        .then(response => response.json())
        .catch(err => console.log(err))
};
