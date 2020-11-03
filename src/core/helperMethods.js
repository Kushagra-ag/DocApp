import axios from 'axios';

const API = process.env.REACT_APP_API

export async function authenticate(data, next) {
    if (typeof window !== 'undefined') {
        await localStorage.setItem('_docto', JSON.stringify(data));
        next();
    }
}

export async function isAuthenticated() {
    if (typeof window !== 'undefined') {
        
        const _docto = await localStorage.getItem('_docto')
        if (_docto) {
            return JSON.parse(_docto);
        }
    }
    return false;
};

export async function deauthenticate() {
    if (typeof window !== 'undefined') {
        await localStorage.removeItem('_docto');
    }
};

// ----------Admin methods----------------

export async function authenticateAdmin(data, next) {
    if (typeof window !== 'undefined') {
        await localStorage.setItem('_docto__', JSON.stringify(data));
        next();
    }
}

export async function isAuthenticatedAdmin() {
    if (typeof window !== 'undefined') {

        const _docto__ = await localStorage.getItem('_docto__')
        if (_docto__) {
            return JSON.parse(_docto__);
        }
    }
    return false;
};

export async function deauthenticateAdmin() {
    if (typeof window !== 'undefined') {
        await localStorage.removeItem('_docto__');
    }
};

//get a particular doctor
export const getDoctor = (doctorId, next) => {
    axios
        .get(`${API}/doctor/${doctorId}`)
        .then(res => {
            console.log(res);
            next(res.data);
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
    axios
        .delete(`${API}/doctor/${doctorId}/${adminId}`, {
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

//remove doctor from favourites list
export const delFav = (doctorId, userId, token, next) => {
    console.log(token)
    axios 
        .delete(`${API}/user/deleteFavourite/${userId}/${doctorId}`, {
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


//create review
export const createReview = (doctorId, userId, token, data, success, failure) => {

    axios 
        .post(`${API}/review/create/${doctorId}/${userId}`, data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then((res) => {
            console.log(res)
            success();
        })
        .catch(err => {
            console.log(err)
            failure();
        })
}

