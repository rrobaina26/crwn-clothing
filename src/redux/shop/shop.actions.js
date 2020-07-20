import ShopActionTypes from "./shop.types";
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";

export const fetchCollectionsStart = () => {
  return {
    type: ShopActionTypes.FETCH_COLLECTION_STARTS,
  };
};

export const fetchCollectionsStartAsync = () => {
  return (dispatch) => {
    const colRef = firestore.collection("collections");
    dispatch(fetchCollectionsStart());

    colRef
      .get()
      .then((snapshot) => {
        const collections = convertCollectionsSnapshotToMap(snapshot);
        dispatch(fetchCollectionsSuccess(collections));
      })
      .catch((error) => {
        dispatch(fetchCollectionsFailure(error.message));
      });
  };
};

export const fetchCollectionsSuccess = (collections) => {
  return {
    type: ShopActionTypes.FETCH_COLLECTION_SUCCESS,
    payload: collections,
  };
};

export const fetchCollectionsFailure = (message) => {
  return {
    type: ShopActionTypes.FETCH_COLLECTION_SUCCESS,
    payload: message,
  };
};
