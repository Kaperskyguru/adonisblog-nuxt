export const state = () => ({
  posts: [],
  post: [],
  latestPosts: [],
  popularPosts: [],
  sliderPost: [],
  blogPosts: [],
  tutorialPosts: []
})

export const getters = {}
export const mutations = {
  setPosts(state, posts) {
    state.posts = posts
  },
  setPost(state, post) {
    state.post = post
  },
  setLatestPosts(state, posts) {
    state.latestPosts = posts
  },
  setPopularPosts(state, posts) {
    state.popularPosts = posts
  },

  setBlogPosts(state, posts) {
    state.blogPosts = posts
  },
  setTutorialPosts(state, posts) {
    state.tutorialPosts = posts
  },
  setSliderPost(state, post) {
    state.sliderPost = post
  }
}
export const actions = {
  // async nuxtServerInit({ dispatch }) {
  //   await dispatch('posts/getPosts')
  //   await dispatch('posts/getLatestPosts')
  //   await dispatch('posts/getPopularPosts')
  //   await dispatch('posts/getSliderPost')
  // },

  async getPosts({ commit }, payload) {
    payload.perPage = 6
    try {
      const res = await this.$axios.get(
        `posts?_embed&per_page=${payload.perPage}&page=${payload.page}`
      )
      const { data, headers } = res
      if (data) {
        data.total = headers['x-wp-TotalPages']
        commit('setPosts', data)
      }
    } catch (error) {}
  },
  async getPost({ commit }, post) {
    const res = await this.$axios.get(`posts/${post}?_embed`)
    const { data } = res
    if (data) {
      return data
    }
  },

  async getLatestPosts({ commit }, page = 1, perPage = 3) {
    const res = await this.$axios.get(
      `posts/?_embed&order=desc&per_page=${perPage}&page=${page}`
    )
    const { data } = res
    if (data) {
      commit('setLatestPosts', data)
    }
  },
  async getPopularPosts({ commit }, page = 1, perPage = 6) {
    const res = await this.$axios.get(
      `posts/?_embed&per_page=${perPage}&page=${page}&orderBy=relevance`
    )
    const { data } = res
    if (data) {
      commit('setPopularPosts', data)
    }
  },

  async getBlogPosts({ commit }, payload) {
    // payload.category = 3
    const res = await this.$axios.get(
      `posts/?_embed&per_page=${payload.perPage}&page=${payload.page}&categories=${payload.category}`
    )
    const { data } = res
    if (data) {
      commit('setBlogPosts', data)
    }
  },

  async getTutorialPosts({ commit }, payload) {
    // payload.category = 3
    const res = await this.$axios.get(
      `posts/?_embed&per_page=${payload.perPage}&page=${payload.page}&categories=${payload.category}`
    )
    const { data } = res
    if (data) {
      commit('setTutorialPosts', data)
    }
  },

  async getSliderPost({ commit }, page = 1, perPage = 1) {
    const res = await this.$axios.get(
      `posts/?_embed&order=desc&per_page=${perPage}&page=${page}`
    )
    const { data } = res
    if (data) {
      commit('setSliderPost', data)
    }
  }
}
