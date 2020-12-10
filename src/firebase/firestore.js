import { firestore } from './';
import store from '../store'
import firebase from 'firebase/app';


export const getUsersVideos = async (email) => {
    const res = await (await firestore.collection("videos").doc(email).get()).data();

    return res?.idList || [];
}

export const likeVideo = async (hash) => {
    const res = await firestore.collection("videos").doc(store.getState().user.email);
    try {
        await res.update({
            idList: firebase.firestore.FieldValue.arrayUnion(hash)
        })
    } catch (error) {
        await res.set({
            idList: [hash]
        })
    }

};
export const deleteVideo = async (hash) => {
    const email = store.getState().user.email;
    const res = await firestore.collection("videos").doc(email);
    try {
        await res.update({
            idList: firebase.firestore.FieldValue.arrayRemove(hash)
        })

    } catch (error) {
        await res.set({
            idList: firebase.firestore.FieldValue.arrayRemove(hash)
        })
    }
    return
};