export const retrieveUserDetails = () => {
    return JSON.parse(localStorage.getItem("user-details")!) || {};
}