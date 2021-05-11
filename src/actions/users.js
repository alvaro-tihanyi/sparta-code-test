export const login = ({ username, password }) => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ auth: true, username });
    }, 1000);
});