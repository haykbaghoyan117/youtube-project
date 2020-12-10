import { firestore } from './';
import store from '../store'
import firebase from 'firebase/app';



export const getVideosList = async () => {
    const dataArray = [];
    const res = await firestore.collection("videos").get();
    res.forEach(elem => {
        dataArray.push({ ...elem.data(), id: elem.id })
    })
    return dataArray;
}
export const getUsersVideos = async (email) => {
    const res = await (await firestore.collection("videos").doc(email).get()).data();

    return res?.idList || [];
}
export const getProfileVideos = async (email) => {
    const videoIds = [];
    const res = [];
    const list = await getUsersVideos(email);
    list.forEach(elem => {
        videoIds.push(elem)
    })
    // // console.log(videoIds)
    const refs = await firestore.collection("videos").get()

    refs.forEach(function (doc) {
        if (videoIds.includes(doc.id)) {
            res.push(doc.data())
        }
    });

    return res;

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