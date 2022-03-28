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

    <router-view></router-view>
  </v-app>
</template>

<style lang="scss">
  @import "./styles/scss/App";
</style>

<script>
import { mapState } from "vuex";

export default {
  name: 'App',
  computed: {
    ...mapState(["headlines"]),
  },
  created() {
    this.$store.dispatch("loadHeadline");
  },
};
</script>
