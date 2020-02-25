<template>
  <main>
    <my-nav></my-nav>
    <b-container fluid>
      <b-row class="justify-content-center">
        <b-container>
          <b-row class="justify-content-center">
            <b-col
              v-for="(post, i) in sliderPost"
              :key="i"
              cols="12"
              lg="8"
              md="7"
            >
              <slider :post="post" />
            </b-col>
            <b-col cols="12" lg="4" md="5">
              <newsletter />
              <newsletter />
            </b-col>
          </b-row>

          <b-row class="justify-content-center">
            <b-col
              v-for="(post, i) in latestPosts"
              :key="i"
              cols="12"
              lg="4"
              md="6"
            >
              <post :post="post" />
            </b-col>
          </b-row>
        </b-container>

        <section class="section col-12 bg-grey-light">
          <b-container>
            <b-row class="justify-content-center">
              <heading>Latest Adonis Articles</heading>

              <b-col
                v-for="(post, i) in blogPosts"
                :key="'p' + i"
                cols="12"
                lg="4"
                md="6"
              >
                <post :post="post" />
              </b-col>

              <heading class="mt-5">Latest Vue/Nuxt Articles</heading>

              <b-col
                v-for="(post, i) in tutorialPosts"
                :key="i"
                cols="12"
                lg="4"
                md="6"
              >
                <post :post="post" />
              </b-col>

              <heading class="mt-5">Latest Backend Articles</heading>

              <b-col
                v-for="(post, i) in tutorialPosts"
                :key="i"
                cols="12"
                lg="4"
                md="6"
              >
                <post :post="post" />
              </b-col>

              <heading class="mt-5">Resources</heading>
              <b-col md="6" lg="4" cols="12" class="align-self-right">
                <newsletter />
              </b-col>

              <b-col md="6" lg="4" cols="12" class="align-self-right">
                <newsletter />
              </b-col>

              <b-col md="6" lg="4" cols="12" class="align-self-right">
                <newsletter />
              </b-col>
            </b-row>
          </b-container>
        </section>
      </b-row>
    </b-container>

    <my-footer></my-footer>
  </main>
</template>

<script>
import { mapState } from 'vuex'
import MyNav from '~/components/Nav.vue'
import Slider from '~/components/Slider.vue'
import Newsletter from '~/components/Newsletter.vue'
import Post from '~/components/Post.vue'
import Heading from '~/components/Heading.vue'
import MyFooter from '~/components/Footer.vue'
export default {
  components: {
    MyNav,
    Slider,
    Newsletter,
    Post,
    Heading,
    MyFooter
  },
  computed: {
    ...mapState({
      latestPosts: (state) => {
        return state.posts.latestPosts
      },
      // popularPosts: (state) => {
      //   return state.posts.popularPosts
      // },
      blogPosts: (state) => {
        return state.posts.blogPosts
      },
      tutorialPosts: (state) => {
        return state.posts.tutorialPosts
      },
      sliderPost: (state) => {
        return state.posts.sliderPost
      }
    })
  },
  async asyncData({ store }) {
    const payload = []
    payload.category = 3
    payload.page = 1
    payload.perPage = 6
    await store.dispatch('posts/getBlogPosts', payload)
    payload.category = 2
    await store.dispatch('posts/getTutorialPosts', payload)
    await store.dispatch('posts/getLatestPosts')
    await store.dispatch('posts/getSliderPost')
  }
}
</script>

<style></style>
