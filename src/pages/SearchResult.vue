<template>
  <v-container>
    <div v-if="isRender" class="mt-16">
      <card-news :categories-data="searchResult" />
    </div>
    <div v-else class="mt-16">
      <span v-for="n in 5" :key="n">
          <v-skeleton-loader
              class="mt-15"
              width="100%"
              height="128"
              type="image"
          ></v-skeleton-loader>
      </span>
    </div>
  </v-container>

</template>

<script>
import { mapState } from "vuex";
import CardNews from "@/components/Card";
import router from "@/router";

export default {
  name: "SearchResult",
  components: { CardNews },
  computed: {
    ...mapState(["searchResult"]),
  },
  data: () => ({
    counter: 0,
    isRender: false,
  }),
  beforeMount() {
    if (this.$route.name === "Search Result" && this.$route.params.id) {
      this.$store.dispatch("loadNewsSearch", this.$route.params.id);
    }

    this.$store.dispatch("setTabBar", null)

    const refreshIntervalId = setInterval(() => {
      this.counter += 1

      if (this.searchResult.length > 1) {
        this.isRender = true;
      }

      if (this.counter === 100) {
        if (this.searchResult.length < 1) {
          router.push({ path: "/not-found" })
        }
        clearInterval(refreshIntervalId);
      }
    }, 100)
  },
}
</script>

<style scoped>

</style>
