<template>
  <div>
    <div v-if="isRender">
      <v-img
          min-height="400"
          min-width="100%"
          :src="getLink(selectedNews.urlToImage)"
      >
      </v-img>
      <div class="manatal-detail__box">
        <p class="manatal-detail__box-date">
          {{selectedNews.publishedAt | formatDateWordID}}
        </p>
        <p class="manatal-detail__box-title">
          {{selectedNews.title}}
        </p>
        <p class="manatal-detail__box-author">
          Publish by  {{selectedNews.author | setTruncate(40)}}
        </p>
      </div>
      <div class="manatal-detail__layout"></div>
      <v-container class="mt-16">
        <div class="mt-3">
          {{selectedNews.description}}
        </div>
        <br />
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto aspernatur
          beatae consequatur consequuntur eaque eligendi,
          fugit modi quo ut vitae voluptas, voluptate.
          Assumenda consequatur doloremque eius magni nulla omnis repellendus.
        </div>
        <br />
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto aspernatur
          beatae consequatur consequuntur eaque eligendi,
          fugit modi quo ut vitae voluptas, voluptate.
          Assumenda consequatur doloremque eius magni nulla omnis repellendus.
        </div>
        <br />
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto aspernatur
          beatae consequatur consequuntur eaque eligendi,
          fugit modi quo ut vitae voluptas, voluptate.
          Assumenda consequatur doloremque eius magni nulla omnis repellendus.
        </div>
      </v-container>
      <template>
        <div class="text-center">
          <v-card-text style="height: 100px; position: relative">
            <v-fab-transition>
              <v-btn
                  :color="isLoved ? '#FF3A44' : 'grey' "
                  dark
                  fixed
                  bottom
                  right
                  fab
                  @click="isLoved = !isLoved"
              >
                <v-icon >mdi-heart</v-icon>
              </v-btn>
            </v-fab-transition>
          </v-card-text>
        </div>
      </template>
    </div>
  </div>
</template>

<style lang="scss">
@import "../styles/scss/Detail.scss";
</style>

<script>
import { mapState } from 'vuex'

export default {
  name: "DetailNews",
  data: () => ({
    selectedNews: null,
    isRender: false,
    isLoved: false,
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
  methods: {
    getLink(e) {
      if (e !== null) {
        return e;
      }
      return null;
    },
  },
  filters: {
    formatDateWordID(time) {
      const date = new Date(time);
      return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
    },
    setTruncate: (str, num) => {
      if (str.length <= num) {
        return str
      }

      return `${str.slice(0, num)}...`
    },
  },
}
</script>

<style scoped>

</style>
