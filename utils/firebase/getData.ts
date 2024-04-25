import { DocumentData, collection, getDocs, orderBy, query } from 'firebase/firestore';
import { db } from './firebase';

export const getAllDocuments = async () => {
  try {
    const data: DocumentData[] = [];
    const queryAll = query(collection(db, 'projects'), orderBy('order'));
    const querySnapshot = await getDocs(queryAll);

    if (querySnapshot.docs.length === 0) {
      throw new Error('Data not found!');
    }

    querySnapshot.forEach((doc) => {
      data.push(doc.data());
    });

    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
