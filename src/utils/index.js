import { doc, setDoc } from "firebase/firestore";
import { db } from "../Components/firebase";

export const updateDataFirestore = async ({
  collectionName,
  documentKey,
  data,
}) => {
  await setDoc(doc(db, collectionName, documentKey), data);
};
