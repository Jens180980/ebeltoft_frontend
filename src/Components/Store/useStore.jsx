import create from "zustand";
import createPostSlice from "./slices/createPostSlice";

const useStore = create((set, get) => ({
  ...createPostSlice(set, get),
}));

export default useStore;
