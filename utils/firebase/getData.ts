import { DocumentData, collection, getDocs, orderBy, query } from 'firebase/firestore';
import { db } from './firebase';

export const getAllDocuments = async () => {
  const data: DocumentData[] = [];
  const queryAll = query(collection(db, 'projects'), orderBy('order'));
  const querySnapshot = await getDocs(queryAll);

  querySnapshot.forEach((doc) => {
    data.push(doc.data());
  });

  return data;
};
