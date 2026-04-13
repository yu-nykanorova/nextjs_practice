import {IUser} from "@/src/models/IUser";
import {IPost} from "@/src/models/IPost";
import {IComment} from "@/src/models/IComment";

const BASE_URL = "https://jsonplaceholder.typicode.com";

export const getAllUsers = async (): Promise<IUser[]> => {
    return await fetch(`${BASE_URL}/users`)
        .then(value => value.json());
};

export const getAllPosts = async (): Promise<IPost[]> => {
    return await fetch(`${BASE_URL}/posts`)
        .then(value => value.json());
};

export const getAllComments = async (): Promise<IComment[]> => {
    return await fetch(`${BASE_URL}/comments`)
        .then(value => value.json());
};