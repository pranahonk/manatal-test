<template>
  <nav>
    <input type="radio" id="item-1" checked value="home" name="menu" v-model="picked" />
    <label for="item-1">
      <span>
        <v-icon
            medium
            color="#656565"
        >
        mdi-home-variant-outline
      </v-icon>
      </span>
    </label>
    <input type="radio" id="item-2" value="favorite" name="menu" v-model="picked" />
    <label for="item-2">
      <span>
        <v-icon
            medium
            color="#656565"
        >
          mdi-cards-heart-outline
        </v-icon>
      </span>
    </label>
    <input type="radio" id="item-3" value="history" name="menu" v-model="picked" />
    <label for="item-3">
      <span>
         <v-icon
             medium
             color="#656565"
         >
          mdi-history
        </v-icon>
      </span>
    </label>
    <div class="cursor">

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18.625 18.625" height="19.867" width="19.867"><path d="M0 0v18.625C.459 6.493 7.17.804 18.625 0z" fill-rule="evenodd"/></svg>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18.625 18.625" height="19.867" width="19.867"><path d="M0 0v18.625C.459 6.493 7.17.804 18.625 0z" fill-rule="evenodd"/></svg>
    </div>
  </nav>
</template>

<script>
import { mapState } from "vuex";
import router from "@/router";
import { getURLNews } from "@/helpers";

export default {
  name: "TabBar",
  data: () => ({
    picked: "home",
  }),
  computed: {
    ...mapState(["setTabBar", "headlines"]),
  },
  watch: {
    picked(val) {
      if (val === "home" && this.$route.name !== "Home") {
        router.push({ path: "/" })
      } else if (val === "history" && this.$route.name !== "History") {
        router.push({ path: "/news/history" })
        // eslint-disable-next-line no-mixed-operators
      } else if (val === "favorite" && (this.$route.name !== "Detail" && this.$route.name !== "Detail Category")) {
          router.push({ path: `/news/detail/${getURLNews(this.headlines[0].title)}` })
      }
    },
    setTabBar(val) {
      this.picked = val
    },
  },
  beforeMount() {
    if (this.$route.name === "Detail") {
      this.picked = "favorite"
    }
  },
}
</script>

<style scoped lang="scss">
@import "../styles/scss/TabBar";
</style>
