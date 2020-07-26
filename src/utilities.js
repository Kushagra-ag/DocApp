export function setLocalStorage(data, next) {
    if (typeof window !== 'undefined') {
        localStorage.setItem('jwt', JSON.stringify(data));
        next();
    }
}

export const getLocalStorage = () => {
    if (typeof window !== 'undefined') {
        if (localStorage.getItem('jwt')) {
            return JSON.parse(localStorage.getItem('jwt'));
        }
    }
    return false;
};
