<template>
  <main>
    <my-nav />
    <b-container fluid>
      <b-row class="justify-content-center">
        <section class=" col-12 bg-grey-light">
          <b-container>
            <b-row class="justify-content-center">
              <b-col cols="12" lg="8" md="7">
                <b-row class="justify-content-center">
                  <b-col
                    v-for="(post, i) in posts"
                    :key="i"
                    cols="12"
                    lg="6"
                    md="6"
                  >
                    <post :post="post" />
                  </b-col>
                </b-row>
                <b-col cols="12">
                  <b-pagination-nav
                    :link-gen="paginate"
                    :number-of-pages="perPage"
                    class="m-4"
                    size="lg"
                    align="fill"
                  ></b-pagination-nav>
                </b-col>
              </b-col>
              <b-col cols="12" lg="4" md="5">
                <newsletter />
                <newsletter />
                <newsletter />
              </b-col>
            </b-row>
          </b-container>
        </section>
      </b-row>
    </b-container>
    <my-footer />
  </main>
</template>

<script>
import { mapState } from 'vuex'
import Post from '~/components/Post.vue'
import MyFooter from '~/components/Footer.vue'
import MyNav from '~/components/Nav.vue'
import Newsletter from '~/components/Newsletter.vue'
export default {
  components: {
    Post,
    MyFooter,
    MyNav,
    Newsletter
  },

  computed: {
    ...mapState({
      posts: (state) => {
        return state.posts.posts
      }
    }),
    perPage() {
      return this.posts.total ? this.posts.total : 1
    }
  },
  asyncData({ store, query }) {
    const payload = []
    // payload.perPage = 6
    payload.page = query.page === undefined ? (query.page = 1) : query.page
    store.dispatch('posts/getPosts', payload)
  },
  methods: {
    paginate(page) {
      const payload = []
      // payload.perPage = 3
      payload.page = page
      return page === 1 ? '?' : `?page=${page}`
    }
  }
}
</script>

<style></style>
