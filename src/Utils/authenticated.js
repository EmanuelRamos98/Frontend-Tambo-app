export const getAuthenticated = () => {
    const authtoken = sessionStorage.getItem("auth-token");

    return {
        Authorization: `Bearer ${authtoken}`,
        "content-Type": "application/json",
    };
};
