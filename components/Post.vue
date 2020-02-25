<template>
  <b-card no-body>
    <nuxt-link
      :to="{ path: post.slug, query: { id: post.id } }"
      class="card__link"
    >
      <div class="card__img-container">
        <b-img :src="image" alt="" fluid />
      </div>
      <b-card-body class="card__content bg-violent-violet">
        <h6 class="card__content--heading col-12 color-radical-red">
          <span v-for="(category, i) in categories" :key="i" class="pr-2"
            >{{ category.name }} |</span
          >
        </h6>
        <b-card-text class="card__content--title col-12 color-violent-violet">
          {{ post.title.rendered }}
        </b-card-text>
      </b-card-body>
    </nuxt-link>
  </b-card>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      default: Object
    }
  },
  data() {
    return {
      image: ''
    }
  },
  computed: {
    categories() {
      return this.post._embedded['wp:term'][0]
    }
  },
  async created() {
    try {
      if (this.post.featured_media) {
        const res = await this.$store.dispatch(
          'media/getMedia',
          this.post.featured_media
        )
        this.image = res.source_url
      } else {
        this.image = '/images/blog-img-2.png'
      }
    } catch (error) {}
  },
  mounted() {}
}
</script>

<style></style>
