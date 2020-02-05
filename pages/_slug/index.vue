<template>
  <main>
    <my-nav></my-nav>
    <b-container fluid>
      <b-row class="justify-content-center">
        <b-container>
          <b-row class="justify-content-center">
            <b-col cols="12" lg="8" md="7">
              <my-content />
            </b-col>

            <b-col cols="12" lg="4" md="5">
              <newsletter />

              <post />
            </b-col>
          </b-row>
        </b-container>
      </b-row>
    </b-container>
  </main>
</template>

<script>
import MyNav from '~/components/Nav.vue'
import MyContent from '~/components/Content.vue'
import Newsletter from '~/components/Newsletter.vue'
import Post from '~/components/Post.vue'
export default {
  components: {
    MyNav,
    MyContent,
    Newsletter,
    Post
  }
}
</script>

<style></style>
