import create from "zustand";
import createDataSlice from "./slices/createDataSlice";

const useStore = create((set, get) => ({
  ...createDataSlice(set, get),
}));

export default useStore;
