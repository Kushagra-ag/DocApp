import axios from 'axios';

const API = process.env.REACT_APP_API

export function authenticate(data, next) {
    if (typeof window !== 'undefined') {
        localStorage.setItem('_docto', JSON.stringify(data));
        next();
    }
}

export const isAuthenticated = () => {
    if (typeof window !== 'undefined') {
        if (localStorage.getItem('_docto')) {
            return JSON.parse(localStorage.getItem('_docto'));
        }
    }
    return false;
};

export const deauthenticate = () => {
    if (typeof window !== 'undefined') {
        localStorage.removeItem('_docto');
    }
};

// ----------Admin methods----------------

export function authenticateAdmin(data, next) {
    if (typeof window !== 'undefined') {
        localStorage.setItem('_docto__', JSON.stringify(data));
        next();
    }
}

export const isAuthenticatedAdmin = () => {
    if (typeof window !== 'undefined') {
        if (localStorage.getItem('_docto__')) {
            return JSON.parse(localStorage.getItem('_docto__'));
        }
    }
    return false;
};

export const deauthenticateAdmin = () => {
    if (typeof window !== 'undefined') {
        localStorage.removeItem('_docto__');
    }
};

//get a particular doctor
export const getDoctor = (doctorId, next) => {
    axios
        .get(`${API}/doctor/${doctorId}`)
        .then(res => {
            console.log(res);
            return next(res.data);
        })
        .catch(err => {
            next(err.response.data);
        });
};

//get all doctors
export const getDoctors = next => {
    axios
        .get(`${API}/doctors`, {})
        .then(res => {
            console.log(res);
            next(res.data);
        })
        .catch(err => {
            console.log('err- ', err.response);
            next(err.response);
        });
};

//delete doctor
export const deleteDoctor = (doctorId, adminId, token, next) => {
    console.log(token)
    axios.
        delete(`${API}/doctor/${doctorId}/${adminId}`, {
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        .then(res => {
            next(res);
        })
        .catch(err => {
            console.log(err.response)
        })
}

//create doctor
export const createDoctor = (adminId, token, data, next) => {
    axios
        .post(`${API}/doctor/create/${adminId}`, data, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${token}`,
            }
        })
        .then(res => {
            next(res);
        })
        .catch(err => {
            console.log(err);
            next(err.response);
        });        
};

// Get all users
export const getUsers = next => {
    axios
        .get(`${API}/users`, {})
        .then(res => {
            console.log(res);
            next(res.data);
        })
        .catch(err => {
            console.log('err- ', err.response);
            next(err.response);
        });
};

//add doctor to favourites list
export const addToFav = (userId, token, data, next) => {
    axios
        .put(`${API}/user/createFavourites/${userId}`, data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(res => {
            console.log(res);
            next()
        })
        .catch(err => {
            console.log(err)
        })
}

//read doctor favourites list of user
export const readFav = (userId, token, next) => {
    
    console.log(token)
    axios 
        .get(`${API}/user/readFavourites/${userId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(res => {
            console.log(res);
            next(res)
        })
        .catch(err => {
            console.log(err)
        })
}

//get a particular user

//create user


// delete user

