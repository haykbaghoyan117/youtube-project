import { firestore } from './';

export const getVideosList = async () => {
    const dataArray = [];
    const res = await firestore.collection("videos").get();
    res.forEach(elem => {
        dataArray.push({...elem.data(), id: elem.id})
    })
    return dataArray;
}
export const getUsersVideos = async (email) => {

    const dataArray = [];
    const res = await firestore.collection("videosAndUser").where("email", "==", email).get();
    res.forEach(elem => {
        dataArray.push(elem.data())
    })
    return dataArray;
}