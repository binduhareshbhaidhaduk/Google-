/* eslint-disable no-unused-vars */
import axios from "axios";
import generateUniqueId from "generate-unique-id";
import { storage } from "../../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

export const Create = (contact) => ({
    type: 'ADD',
    payload: contact
});

export const SRecord = (contact) => ({
    type: 'SINGLEREC',
    payload: contact
});

export const updatedrec = (contacts) => ({
    type: 'UPDATED',
    payload: contacts
});

export const deletRec = (contacts) => ({
    type: 'DELETE',
    payload: contacts
});

export const addconAsy = (contacts) => ({
    type: 'ADDCONASYNC',
    payload: contacts
});

export const isLoading = () => ({
    type: 'LOADING'
});

export const addcontactAsync = (contact) => {
    return (dispatch) => {
        dispatch(isLoading());
        setTimeout(() => {
            contact.id = generateUniqueId({ length: 4, useLetters: false });
            axios.post('http://localhost:3001/contect', contact).then(() => {
                dispatch(getcontactAsync());
            }).catch((err) => {
                console.log(err, 'err');
            });
        }, 0);
    };
};

export const getcontactAsync = () => {
    return (dispatch) => {
        dispatch(isLoading());
        setTimeout(() => {
            axios.get('http://localhost:3001/contect').then((res) => {
                dispatch(addconAsy(res.data));
            }).catch((err) => {
                console.log(err, 'err');
            });
        }, 0);
    };
};

export const DeletecontactAsync = (id) => {
    return (dispatch, getState) => {
        axios.delete(`http://localhost:3001/contect/${id}`).then(() => {
            const updatedContacts = getState().contactReducer.contacts.filter(contact => contact.id !== id);
            dispatch(deletRec(updatedContacts));
        }).catch((err) => {
            console.log(err);
        });
    };
};

export const singlecontactAsync = (id) => {
    return (dispatch) => {
        axios.get(`http://localhost:3001/contect/${id}`).then((res) => {
            dispatch(SRecord(res.data));
        }).catch((err) => {
            console.log(err);
        });
    };
};

export const editcontactAsync = (contact) => {
    return (dispatch, getState) => {
        axios.put(`http://localhost:3001/contect/${contact.id}`, contact).then(() => {
            const updatedContacts = getState().contactReducer.contacts.map(c =>
                c.id === contact.id ? contact : c
            );
            dispatch(updatedrec(updatedContacts));
        }).catch((err) => {
            console.log(err);
        });
    };
};

export const uploadImg = (file) => {
    return (dispatch) => {
        const storageRef = ref(storage,` img/${file.name}`);

        return uploadBytes(storageRef, file)
            .then((snapshot) => {
                return getDownloadURL   (snapshot.ref);
            })
            .then((url) => {
                console.log('Uploaded file and got URL!', url);
                return url;
            })
            .catch(err => {
                console.error("Error uploading file: ", err);
                throw err;
            });
    };
};