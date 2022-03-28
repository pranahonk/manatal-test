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
            elevation="4"
            rounded="8"
            class="mr-3"
        >
          <v-img
              lazy-src="https://via.placeholder.com/728x728.png?text=Manatal+Placeholder"
              height="300px"
              width="80vw"
              :src="handleImage(n.urlToImage)"
              error="https://via.placeholder.com/728x728.png?text=Manatal+Placeholder"
          ></v-img>
        </v-card>
      </v-slide-item>
    </v-slide-group>
  </v-sheet>
</template>

<script>
export default {
  name: 'SliderHeadline',
  props: {
    headlineData: Array,
  },
  data: () => ({
    model: null,
  }),
  beforeMount() {
    console.log(this.headlineData)
  },
  methods: {
    handleImage(e) {
      if (e) {
        return e
      }
        return "https://via.placeholder.com/728x728.png?text=Manatal+Placeholder"
    },
  },
};
</script>

<style scoped>

</style>
