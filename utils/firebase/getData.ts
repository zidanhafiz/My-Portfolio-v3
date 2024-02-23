import {
  DocumentData,
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  startAt,
} from 'firebase/firestore';
import { db } from './firebase';

export const getAllDocuments = async () => {
  const data: DocumentData[] = [];
  const querySnapshot = await getDocs(collection(db, 'projects'));

  querySnapshot.forEach((doc) => {
    data.push(doc.data());
  });

  const totalItems = data.length;
  const itemsPerPage = 4;
  const totalPage = Math.ceil(totalItems / itemsPerPage);

  return { data, totalItems, itemsPerPage, totalPage };
};

export const getAllDocumentsByPage = async (page: number) => {
  const data: DocumentData[] = [];

  // Get all documents
  const queryAll = query(collection(db, 'projects'), orderBy('order'));
  const documentSnapshots = await getDocs(queryAll);

  // Get the first of visible document
  const firstIndex = page * 4 - 4;
  const firstDoc = documentSnapshots.docs[firstIndex];

  // Querying the documents which starts with the first of visible document
  const queryPage = query(
    collection(db, 'projects'),
    orderBy('order'),
    limit(4),
    startAt(firstDoc)
  );
  const querySnapshot = await getDocs(queryPage);

  querySnapshot.forEach((doc) => {
    data.push(doc.data());
  });

  return data;
};
