<template>
  <v-app>
    <v-app-bar
      app
      color="white"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Manatal Logo"
          class="shrink mr-2"
          contain
          src="https://www.manatal.com/wp-content/uploads/2022/03/manatal-logo-text2.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <v-container>
        <h3 class="manatal__headline mb-4">Headline News</h3>
        <slider-headline :headline-data="headlines" />
      </v-container>
    </v-main>
  </v-app>
</template>

<style lang="scss">
  @import "./styles/scss/App";
</style>

<script>
import axios from 'axios';
// eslint-disable-next-line import/extensions,import/no-unresolved
import SliderHeadline from "@/components/Slider";

export default {
  name: 'App',
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
};
</script>
