import create from "zustand";
import sliderImagesSlice from "./slices/sliderImagesSlice";

const useStore = create((set, get) => ({
  ...sliderImagesSlice(set, get),
}));

export default useStore;
