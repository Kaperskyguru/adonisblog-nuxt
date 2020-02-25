export const state = () => ({
  media: []
})

export const getters = {}
export const mutations = {
  setMedia(state, media) {
    state.media = media
  }
}
export const actions = {
  async getMedia({ commit }, media) {
    const res = await this.$axios.get(`media/${media}`)
    const { data } = res
    if (data) {
      commit('setMedia', data)
      return data
    }
  }
}
