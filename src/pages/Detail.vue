<template>
  <div>
    <div v-if="isRender">
      <v-img
          min-height="400"
          min-width="100%"
          :src="getLink(selectedNews)">
      </v-img>
      <div class="manatal-detail__box">
        <p class="manatal-detail__box-date">
          {{selectedNews.publishedAt | formatDateWordID}}
        </p>
        <p class="manatal-detail__box-title">
          {{selectedNews.title}}
        </p>
        <p class="manatal-detail__box-author">
          Publish by  {{ setAuthor(selectedNews.author) | setTruncate(40)}}
        </p>
      </div>
      <div class="manatal-detail__layout"></div>
      <v-container >
        <div class="manatal-detail__layout-text my-16">
          <div class="mt-3">
            {{selectedNews.description}}
          </div>
          <br />
          <span v-for="n in 10" :key="n">
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non ex ultrices, vulputate nisi eu, suscipit magna. Nam sed sollicitudin eros, at pulvinar massa. Ut blandit euismod magna, vitae ornare enim molestie eget. Aliquam sit amet mi eget quam molestie tristique commodo sed ante. Proin vulputate congue lectus, eget ultrices ligula malesuada quis. Nulla enim quam, lobortis non tortor eu, elementum euismod ex. Mauris at lacus euismod, mattis nunc sit amet, finibus ante. Donec eu arcu ut justo vestibulum vestibulum. Donec cursus orci metus, ut faucibus tortor facilisis eu. Suspendisse velit velit, laoreet eget justo sed, interdum congue libero. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.

              Integer orci orci, cursus eu ex eu, mollis iaculis ipsum. Donec eu sem mi. Suspendisse placerat, nulla vitae posuere pharetra, odio purus maximus tellus, id luctus risus nisl aliquet ipsum. Morbi ut convallis sem, quis sollicitudin mi. Fusce sodales varius metus, tincidunt pretium quam mollis ut. In velit turpis, finibus a porttitor quis, lobortis dictum enim. Maecenas gravida justo et urna ornare, at feugiat mi fermentum. Phasellus et dictum libero. Phasellus aliquet lorem in nisi eleifend sollicitudin. Etiam eget turpis mauris. Curabitur molestie orci turpis, id tincidunt tellus finibus sit amet.

              Nunc fermentum orci orci, sit amet elementum lacus gravida vitae. Morbi fermentum ex et eros faucibus, pharetra ultricies erat accumsan. Sed diam metus, aliquet ut dictum nec, sodales eu magna. Praesent eget posuere leo, eu pharetra odio. Phasellus id euismod leo. Morbi hendrerit luctus turpis sit amet hendrerit. Suspendisse laoreet leo eget orci sagittis finibus. Mauris eu ante sit amet quam ullamcorper mollis quis quis ex. Vivamus orci risus, dignissim ac posuere nec, ornare vel libero.

              Fusce eu porttitor mauris. Pellentesque pretium risus eget nisl volutpat faucibus. Phasellus ultrices, enim sed lobortis luctus, sem turpis tempor ex, nec suscipit nisi massa quis sapien. Sed cursus magna eget aliquet blandit. Sed malesuada egestas elementum. Vivamus eget ante posuere lorem pellentesque gravida sit amet eget purus. Fusce ullamcorper erat a purus elementum, sit amet sodales lacus elementum. Aenean arcu sapien, malesuada ac egestas non, mollis imperdiet erat. Aenean vehicula purus eleifend nisl vestibulum mattis.

              Donec ut risus accumsan mauris auctor consequat interdum vitae ante. Mauris vehicula ut diam condimentum iaculis. Mauris fringilla maximus purus ac pharetra. Nulla et nisi vel ex cursus pellentesque. Maecenas nec arcu vel ligula consectetur elementum. Integer semper lacus nulla, et feugiat lacus porttitor consectetur. Nullam sapien leo, iaculis sed mollis et, suscipit vitae sapien. Ut ac euismod leo. Pellentesque varius turpis eu neque pellentesque finibus. Quisque quis gravida libero. Nullam vehicula at erat et condimentum. Vestibulum enim arcu, varius eu eleifend quis, volutpat sit amet augue. Phasellus dictum mauris orci, a convallis purus luctus non. Ut ut sem ac diam volutpat mollis.
        </div>
           <br />
        </span>
        </div>

      </v-container>
    </div>
    <div v-else>
      <v-skeleton-loader
          class="mt-15"
          width="100%"
          height="400"
          type="image,
          list-item-three-line,
          list-item-three-line"
      ></v-skeleton-loader>
      <v-skeleton-loader
          width="100%"
          height="400"
          type="
          list-item-three-line,
          list-item-three-line,
          list-item-three-line"
      ></v-skeleton-loader>
    </div>
  </div>
</template>

<style lang="scss">
@import "../styles/scss/Detail.scss";
</style>

<script>
import { mapState } from 'vuex'
import router from "@/router";
import { getURLNews } from "@/helpers";

export default {
  name: "DetailNews",
  data: () => ({
    selectedNews: null,
    isRender: false,
    isLoved: false,
    idxHeadline: null,
    idxCategory: null,
    idxSearch: null,
    counter: 0,
    refreshIntervalId: null,
  }),
  computed: {
    ...mapState(["headlines", "categoriesData", "searchResult"]),
  },
  async created() {
    if (this.headlines?.length < 1) {
      await this.$store.dispatch("loadHeadline");
    }

    if (this.$attrs.category) {
      await this.$store.dispatch("setCatTitle", this.$attrs.category);
      await this.$store.dispatch("loadNewsCategory", this.$attrs.category);
    }
  },
  beforeMount() {
    this.refreshIntervalId = setInterval(() => {
      this.counter += 1

      if (this.$route.name === 'Detail Category') {
        if (this.$route.params.category === "search") {
          this.idxSearch = this.searchResult.findIndex((x) => getURLNews(x.title) === this.$attrs.id);
          if (this.idxSearch !== -1) {
            this.selectedNews = this.searchResult[this.idxSearch]
            this.isRender = true;
            clearInterval(this.refreshIntervalId);
          }
        } else {
          this.idxCategory = this.categoriesData.findIndex((x) => getURLNews(x.title) === this.$attrs.id);
          if (this.idxCategory !== -1) {
            this.selectedNews = this.categoriesData[this.idxCategory]
            this.isRender = true;
            clearInterval(this.refreshIntervalId);
          }
        }
      } else if (this.$route.name === 'Detail') {
        this.idxHeadline = this.headlines.findIndex((x) => getURLNews(x.title) === this.$attrs.id);
          if (this.idxHeadline !== -1) {
            this.selectedNews = this.headlines[this.idxHeadline];
            this.isRender = true;
            clearInterval(this.refreshIntervalId);
          }
      }
    }, 100)

    this.$store.dispatch("setTabBar", 'favorite')
    this.$store.dispatch("setHistory", { id: this.$route.params.id, path: this.$route.path })
  },
  watch: {
    counter(val) {
      if (val === 100) {
        clearInterval(this.refreshIntervalId);
        router.push({ path: "/not-found" })
      }
    },
  },
  methods: {
    getLink(e) {
      return e?.urlToImage || "https://via.placeholder.com/728x728.png?text=Manatal+Placeholder"
    },
    setAuthor(author) {
      return author ?? "Author"
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

<style scoped>

</style>
