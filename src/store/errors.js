export const namespaced = true;

export const state = () => ({
  message: "",
  error: [],
});

export const mutations = {
  error: (state, data) => {
    state.message = data.message || "";
    state.error = data.errors || [];
  },
};
