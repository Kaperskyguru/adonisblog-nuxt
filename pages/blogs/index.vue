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
                  <b-col cols="12" lg="6" md="6">
                    <post />
                  </b-col>
                  <b-col cols="12" lg="6" md="6">
                    <post />
                  </b-col>

                  <b-col cols="12" lg="6" md="6">
                    <post />
                  </b-col>
                  <b-col cols="12" lg="6" md="6">
                    <post />
                  </b-col>

                  <b-col cols="12" lg="6" md="6">
                    <post />
                  </b-col>
                  <b-col cols="12" lg="6" md="6">
                    <post />
                  </b-col>
                </b-row>
                <b-col cols="12">
                  <b-pagination-nav
                    base-url="#"
                    number-of-pages="10"
                    pills
                    prev-text="Previous"
                    next-text="Next"
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
  }
}
</script>

<style></style>
