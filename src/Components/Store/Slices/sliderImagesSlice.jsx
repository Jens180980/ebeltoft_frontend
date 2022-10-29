export const sliderImagesSlice = (set, get) => ({
  image_data: [],
  fetchPosts: async () => {
    const res = await fetch("${props => props.theme.colors.white}");

    set({ image_data: await res.json() });
  },
});
