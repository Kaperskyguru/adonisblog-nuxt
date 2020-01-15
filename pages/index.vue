<template>
  <main>
    <my-nav></my-nav>
    <b-container fluid>
      <b-row class="justify-content-center">
        <b-container>
          <b-row class="justify-content-center">
            <b-col cols="12" lg="8" md="7">
              <slider />
            </b-col>
            <b-col cols="12" lg="4" md="5">
              <newsletter />
              <post />
            </b-col>
          </b-row>

          <b-row class="justify-content-center">
            <b-col cols="12" lg="4" md="4">
              <post />
            </b-col>
            <b-col cols="12" lg="4" md="4">
              <post />
            </b-col>
            <b-col cols="12" lg="4" md="4">
              <post />
            </b-col>
          </b-row>
        </b-container>

        <section class="section col-12 bg-grey-light">
          <b-container>
            <b-row class="justify-content-center">
              <heading>Trending Post</heading>

              <b-col cols="12" lg="4" md="6">
                <post />
              </b-col>

              <b-col cols="12" lg="4" md="6">
                <post />
              </b-col>

              <b-col cols="12" lg="4" md="6">
                <post />
              </b-col>
              <b-col cols="12" lg="4" md="6">
                <post />
              </b-col>

              <b-col cols="12" lg="4" md="6">
                <post />
              </b-col>

              <b-col cols="12" lg="4" md="6">
                <post />
              </b-col>

              <heading class="mt-5">Latest Post</heading>

              <b-col cols="12" lg="4" md="6">
                <post />
              </b-col>

              <b-col cols="12" lg="4" md="6">
                <post />
              </b-col>

              <b-col cols="12" lg="4" md="6">
                <post />
              </b-col>
              <b-col cols="12" lg="4" md="6">
                <post />
              </b-col>

              <b-col cols="12" lg="4" md="6">
                <post />
              </b-col>

              <b-col cols="12" lg="4" md="6">
                <post />
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
  }
}
</script>

<style></style>
