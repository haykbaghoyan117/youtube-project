import { firestore } from './';

export const getVideosList = async () => {
    const dataArray = [];
    const res = await firestore.collection("videos").get();
    res.forEach(elem => {
        dataArray.push({ ...elem.data(), id: elem.id })
    })
    return dataArray;
}
export const getUsersVideos = async (email) => {

    const dataArray = [];
    const res = await firestore.collection("videos").where("email", "==", email).get();
    
    res.forEach(elem => {
        elem.data().idList.forEach(item => {
            dataArray.push(item)
        })
    })
    return dataArray || [];
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