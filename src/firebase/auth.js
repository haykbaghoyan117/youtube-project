import { auth } from './'

export const signInWithEmailAndPassword = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
}
export const signUpWithEmailAndPassword = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password);
}
export const signOut = () => auth.signOut();
export const deleteUser = () => {
<<<<<<< HEAD
    auth.currentUser.delete()
    .then(console.log('deleted'))
    .catch(err => console.log(alert(err)))
=======
    auth.currentUser.delete();
>>>>>>> 4d9b078e3bb961f9bea50307ce9c65181dccce51
}