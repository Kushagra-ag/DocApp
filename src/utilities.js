export function authenticated(data, next) {
    if (typeof window !== 'undefined') {
        localStorage.setItem('jwt', JSON.stringify(data));
        next();
    }
}

export const isAuthenticated = () => {
    if (typeof window !== 'undefined') {
        if (localStorage.getItem('jwt')) {
            return JSON.parse(localStorage.getItem('jwt'));
        }
    }
    return false;
};

export const deauthenticate = () => {
    if(typeof window !== 'undefined') {
        localStorage.removeItem('jwt');
    }
}
