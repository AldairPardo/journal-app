import { collection, getDocs } from "firebase/firestore/lite";
import { FirebaseDB } from "../firebase/config";

export const loadNotes = async (uid = '') => {
    if(!uid) throw new Error('uid is required');

    const collectionRef = collection(FirebaseDB,`${uid}/journal/notes`);
    const docs = await getDocs(collectionRef);

    return docs.docs.map(doc => {
        return {
            id: doc.id,
            ...doc.data()
        }
    });
}
