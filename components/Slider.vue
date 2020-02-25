<template>
  <div class="banner-card">
    <nuxt-link
      :to="{ path: post.slug, query: { id: post.id } }"
      class="banner-card__link"
    >
      <div class="banner-card__img-container">
        <b-img :src="image" fluid alt=""></b-img>
      </div>
      <div class="banner-card__content bg-violent-violet">
        <h6 class="banner-card__content--heading col-12 color-radical-red">
          <span v-for="(category, i) in categories" :key="i" class="pr-2"
            >{{ category.name }} |</span
          >
        </h6>
        <h3 class="banner-card__content--title col-12 color-violent-violet">
          {{ post.title.rendered }}
        </h3>
      </div>
    </nuxt-link>
  </div>
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
        this.image = '/images/2019.jpg'
      }
    } catch (error) {}
  }
}
</script>

<style></style>
