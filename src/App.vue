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
      </div>
      <v-spacer></v-spacer>

      <search-bar @searchText="valueSearch" @btnSearchPress="handleBtnSearch" />
    </v-app-bar>
    <router-view></router-view>
    <tab-bar />
  </v-app>
</template>

<style lang="scss">
  @import "./styles/scss/App";
</style>

<script>
import { mapState } from "vuex";
import TabBar from "@/components/TabBar";
import SearchBar from "@/components/SearchBar";
import router from "@/router";

export default {
  name: 'App',
  components: {
    SearchBar,
    TabBar,
  },
  data: () => ({
    searchText: null,
  }),
  computed: {
    ...mapState(["headlines", "catTitle"]),
  },
  created() {
    this.$store.dispatch("loadHeadline");
  },
  watch: {
    catTitle(newVal) {
      this.$store.dispatch("loadNewsCategory", newVal);
    },
  },
  methods: {
    valueSearch(val) {
      this.searchText = val;
    },
    handleBtnSearch() {
      if (this.searchText.length) {
        router.push({ path: `/search/result/${this.searchText}` })
        this.$store.dispatch("loadNewsSearch", this.searchText);
      }
    },
  },
};
</script>
