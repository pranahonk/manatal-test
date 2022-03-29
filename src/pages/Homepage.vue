<template>
  <v-main>
    <v-container>
      <h3 class="manatal__headline mb-4">Headline News</h3>
      <slider-headline :headline-data="headlines" />
      <div class="mt-13"/>
      <optional-category :categories="categories" />
      <br />
      <card-news :categories-data="categoriesData" />
    </v-container>
  </v-main>
</template>

<script>
import { mapState } from 'vuex'
import SliderHeadline from "@/components/Slider.vue";
import optionalCategory from "@/components/Option.vue";
import CardNews from "@/components/Card.vue";

export default {
  name: "HomepageNews",
  data: () => ({
    categories: ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'],
  }),
  components: {
    SliderHeadline,
    optionalCategory,
    CardNews,
  },
  computed: {
    ...mapState(["headlines", "categoriesData"]),
  },
  beforeMount() {
    this.$store.dispatch("setTabBar", 'home')
  },
}
</script>

<style scoped>

</style>
