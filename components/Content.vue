<template>
  <div class="banner-card-2">
    <div class="banner-card-2__img-container">
      <b-img :src="image" alt="" fluid></b-img>
    </div>
    <div class="banner-card-2__content bg-white">
      <h3
        class="banner-card-2__content--title text-center col-12 color-violent-violet"
      >
        {{ post.title.rendered || '' }}
      </h3>
    </div>
    <p v-html="post.content.rendered" class="col-12">
      <!-- <span ></span> -->
    </p>
  </div>
</template>

<script>
export default {
  props: ['post'],
  data() {
    return {
      image: ''
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
