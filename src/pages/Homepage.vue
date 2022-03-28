<template>
  <v-main>
    <v-container>
      <h3 class="manatal__headline mb-4">Headline News</h3>
      <slider-headline :headline-data="headlines" />
    </v-container>
  </v-main>
</template>

<script>
import axios from "axios";
// eslint-disable-next-line import/extensions,import/no-unresolved
import SliderHeadline from "@/components/Slider.vue";

export default {
  name: "HomepageNews",
  created() {
    axios
        .get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.VUE_APP_API_KEY}`)
        .then((response) => {
          console.log(response.data.articles)
          this.headlines = response.data.articles
        })
  },
  components: {
    SliderHeadline,
  },

  data: () => ({
    headlines: null,
  }),
}
</script>

<style scoped>

</style>
