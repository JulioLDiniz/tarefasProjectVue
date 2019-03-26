import {initializeApp} from 'firebase'

const app = initializeApp({
    apiKey: "AIzaSyDqUYz_3NEIc_Z2LkFkhm4_T8V56sL5YmU",
    authDomain: "primeiroprojeto-7f399.firebaseapp.com",
    databaseURL: "https://primeiroprojeto-7f399.firebaseio.com",
    projectId: "primeiroprojeto-7f399",
    storageBucket: "primeiroprojeto-7f399.appspot.com",
    messagingSenderId: "921867865888"
});

export const db = app.database();
export const lembretes = db.ref('lembretes');
