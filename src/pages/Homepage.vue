<template>
  <v-main>
    <v-container>
      <h3 class="manatal__headline mb-4">Headline News</h3>
      <slider-headline :headline-data="headlines" />
    </v-container>
  </v-main>
</template>

<script>
import { mapState } from 'vuex'
// eslint-disable-next-line import/extensions,import/no-unresolved
import SliderHeadline from "@/components/Slider.vue";

export default {
  name: "HomepageNews",
  components: {
    SliderHeadline,
  },
  computed: {
    ...mapState(["headlines"]),
  },
  data: () => ({

  }),
}
</script>

<style scoped>

</style>
