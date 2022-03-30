<template>
  <div class="manatal-card">
    <v-card
        elevation="2"
        shaped
        height="128"
        width="100%"
        class="mb-5"
        v-for="(data, idx) in categoriesData" :key="idx"
        @click="()=>getSelectedNews(data.title)"
    >
      <v-img
          lazy-src="https://via.placeholder.com/728x728.png?text=Manatal+Placeholder"
          height="128"
          width="100%"
          :src="data.urlToImage"
          gradient="180deg, rgba(98, 98, 98, 0.35) 50%, #000000 100%"
      ></v-img>
      <p class="manatal-card__title">
        {{data.title | setTruncate(150)}}
      </p>
      <v-row
          no-gutters
          style="height: 150px;"
          class="manatal-card__row"
      >
        <v-col>
          <p>
            {{setAuthor(data.author) | setTruncate(20)}}
          </p>
        </v-col>
        <v-col >
          <p class="text-right">
            {{data.publishedAt | formatDateWordID }}
          </p>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
import { mapState } from "vuex";
import router from "@/router";
import { getURLNews } from "@/helpers";

export default {
  name: "CardNews",
  props: {
    categoriesData: Array,
  },
  computed: {
    ...mapState(["catTitle"]),
  },
  watch: {
    catTitle(newVal, oldVal) {
      console.log(newVal, oldVal)
    },
  },
  methods: {
    setAuthor(author) {
      return author ?? "Author"
    },
    getSelectedNews(title) {
      if (this.$route.name === "Search Result" && this.$route?.params?.id.length > 0) {
          router.push({ path: `/news/search/${getURLNews(title)}/` })
      } else {
        router.push({ path: `/news/${this.catTitle}/${getURLNews(title)}/` })
      }
    },
  },
  filters: {
    formatDateWordID(time) {
      const date = new Date(time);
      return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
    },
    setTruncate: (str, num) => {
      if (str?.length <= num) {
        return str
      }

      return `${str?.slice(0, num)}...`
    },
  },
}
</script>

<style scoped lang="scss">
@import "../styles/scss/Card.scss";
</style>
