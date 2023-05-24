// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRgGzrv0B9fCJ7yvOC7eu3jzQ-9HG7s9o",
  authDomain: "activateuamimages.firebaseapp.com",
  projectId: "activateuamimages",
  storageBucket: "activateuamimages.appspot.com",
  messagingSenderId: "931513919572",
  appId: "1:931513919572:web:1d1fba2b4270cca16725c1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const storage = getStorage(app, 'gs://activateuamimages.appspot.com');

/* upload image function */
export const uploadImage = async (file) => {
  const imageRef = ref(storage, `${file.name}`);
  const uploadImage = await uploadBytes(imageRef, file);
  const publicImageUrl = await getDownloadURL(imageRef)
  return publicImageUrl;
}