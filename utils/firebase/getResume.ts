import { getDownloadURL } from 'firebase/storage';
import { resumeRef } from './firebase';

export const getResume = () => {
  return getDownloadURL(resumeRef)
    .then((url) => {
      return url;
    })
    .catch((error) => {
      return error;
    });
};
