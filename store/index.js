export const state = () => ({})
export const actions = {
  async nuxtServerInit({ dispatch }) {
    await dispatch('posts/getPosts')
    await dispatch('posts/getLatestPosts')
    await dispatch('posts/getPopularPosts')
    await dispatch('posts/getSliderPost')
  }
}
