import { IUser } from "./interfaces";

export const retrieveUserDetails = ():IUser => {
    return JSON.parse(localStorage.getItem("user-details")!) || {} as IUser;
}
export const retrieveAccessToken = ():IUser => {
    return JSON.parse(localStorage.getItem("user-details")!) || {} as IUser;
}