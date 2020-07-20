import { UPDATE_COLLECTIONS } from "./shop.types";
export const updateCollections = (collections) => {
  return {
    type: UPDATE_COLLECTIONS,
    payload: collections,
  };
};
