export const state = () => ({
  categories: []
})

export const getters = {}
export const mutations = {
  setCategories(state, categories) {
    state.categories = categories
  },
  setCategory(state, category) {
    state.category = category
  }
}
export const actions = {
  async getCategories({ commit }) {
    const res = await this.$axios.get(`categories`)
    const { data } = res
    if (data) {
      commit('setCategories', data)
      return data
    }
  },
  async getCategory({ commit }, category) {
    const res = await this.$axios.get(`categories/${category}`)
    const { data } = res
    if (data) {
      commit('setCategory', data)
      return data
    }
  }
}
