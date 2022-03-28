<template>
  <div>
    <div class="mt-16 mt-16 mt-16 mt-16 mt-16">{{isRender}}</div>
    <div v-if="isRender">
      <div>{{selectedNews.urlToImage}}</div>
      <img :src="selectedNews.urlToImage" alt="Manatal">
      <v-img
          min-height="400"
          min-width="100%"
          :src="getLink(selectedNews.urlToImage)"
      >
      </v-img>
      <div>
        {{selectedNews.content}}
      </div>
      <v-container>
        <div class="mt-16">hello world</div>
      </v-container>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: "DetailNews",
  data: () => ({
    selectedNews: null,
    isRender: false,
  }),
  computed: {
    ...mapState(["headlines", "idxNewsDetail"]),
  },
  async created() {
    if (this.headlines.length < 1) {
      await this.$store.dispatch("loadHeadline");
    }
  },
  beforeMount() {
    const refreshIntervalId = setInterval(() => {
      this.$store.dispatch("getNewsDetail", this.$attrs.id);
      if (this.idxNewsDetail !== null) {
        console.log(this.headlines[this.idxNewsDetail]);
        this.selectedNews = this.headlines[this.idxNewsDetail];
        this.isRender = true;
        clearInterval(refreshIntervalId);
      }
    }, 100)
  },
  updated() {
    console.log(this.selectedNews)
    console.log("updated")
  },
  methods: {
    getLink(e) {
      if (e !== null) {
        return e;
      }
      return null;
    },
  },
}
</script>

<style scoped>

</style>
