export const createDataSlice = (set, get) => ({
  data: [],
  fetchPosts: async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");

    set({ data: await res.json() });
  },
});
