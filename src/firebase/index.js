import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";
import fireBaseConfig from '../configs/firebase.config';

firebase.initializeApp(fireBaseConfig);

export const db = firebase.database();
export const  auth = firebase.auth();
export const firestore = firebase.firestore();