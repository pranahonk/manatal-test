<template>
  <v-sheet
      class="mx-auto"
      max-width="700"
  >
    <v-slide-group
        multiple
    >
      <v-slide-item
          v-for="(n, key) in headlineData"
          :key="key"
      >
        <v-card
            elevation="2"
            shaped
            class="mr-3 p-relative manatal-slider__card"
            @click="getSelectedNews(n.title)"
        >
          <v-img
              lazy-src="https://via.placeholder.com/728x728.png?text=Manatal+Placeholder"
              height="300px"
              width="80vw"
              gradient="179.66deg, rgba(98, 98, 98, 0.35) 50%, #000000 99.7%"
              :src="handleImage(n.urlToImage)"
              error="https://via.placeholder.com/728x728.png?text=Manatal+Placeholder"
              class="manatal-slider__card-image"
          ></v-img>
            <p class="subtitle-2 manatal-slider__card-author">
              by {{setAuthor(n.author) | setTruncate(25)}}
            </p>
          <p class="manatal-slider__card-title">{{n.title}}</p>
          <p class="body-2 d-inline-block subtitle-1 manatal-slider__card-desc">
            {{n.description | setTruncate(38)}}
          </p>
        </v-card>
      </v-slide-item>
    </v-slide-group>
  </v-sheet>
</template>

<style lang="scss">
  @import "../styles/scss/Slider";
</style>

<script>
import router from "@/router";
import { getURLNews } from "@/helpers";

export default {
  name: 'SliderHeadline',
  props: {
    headlineData: Array,
  },
  data: () => ({
    model: null,
  }),
  methods: {
    handleImage(e) {
      if (e) {
        return e
      }
        return "https://via.placeholder.com/728x728.png?text=Manatal+Placeholder"
    },
    setAuthor(author) {
      return author ?? "Author"
    },
    getSelectedNews(title) {
      router.push({ path: `/news/detail/${getURLNews(title)}` })
    },
  },
  filters: {
    setTruncate: (str, num) => {
      if (str.length <= num) {
        return str
      }

      return `${str.slice(0, num)}...`
    },
  },
};
</script>

<style scoped>

</style>
