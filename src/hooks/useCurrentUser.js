import { useAuthState } from "react-firebase-hooks/auth";
import { doc, setDoc } from "firebase/firestore";
import { useDocument } from "react-firebase-hooks/firestore";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { auth, db } from "../firebase";

const signIn = () => {
  const provider = new GoogleAuthProvider();
  signInWithRedirect(auth, provider);
};

export function useCurrentUser() {
  const [userAuthData, userAuthLoading] = useAuthState(auth);
  const maybeUserUid = userAuthData?.uid ?? "FAKEUSERID";

  const [userDocument, loadingUserDocument, errorLoadingUserDocument] =
    useDocument(doc(db, "users", maybeUserUid), {
      snapshotListenOptions: { includeMetadataChanges: true },
    });

  async function updateUser(newUserData, merge = true) {
    if (!maybeUserUid) {
      throw new Error("cant update before maybeUserUid is here");
    }

    await setDoc(doc(db, "users", maybeUserUid), newUserData, { merge: true });
  }

  if (userAuthLoading) {
    return {
      state: "AUTH_LOADING",
    };
  }

  if (!userAuthData || !userAuthData.uid) {
    return {
      state: "NEED_LOGIN",
      signIn,
    };
  }

  if (loadingUserDocument && !userDocument) {
    return {
      state: "LOADING_USER_DATA",
      userAuthData,
      updateUser,
    };
  }

  if (!userDocument.exists()) {
    return {
      state: "USER_NEED_PROFILE",
      userAuthData,
      updateUser,
    };
  }

  // Sanity check
  const mustHaveFields = [
    "email",
    "age",
    "gender",
    "maritalStatus",
    "fullName",
    "smoking",
  ];
  if (mustHaveFields.some((f) => !userDocument.data[f])) {
    throw new Error("field is bad!!!!");
  }

  return {
    state: "ready",
    userAuthData,
    updateUser,
    userDocumentData: userDocument.data,
  };
}
