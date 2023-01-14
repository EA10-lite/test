// firebase
import { serverTimestamp, addDoc, } from 'firebase/firestore';
import { colRef } from './firebase';

const submit = async (body) => {
    await addDoc(colRef, {
        ...body,
        date: serverTimestamp(),
    })
}

export default {
    submit
}