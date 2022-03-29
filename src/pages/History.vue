<template>
  <v-container>
    <v-card
        class="mx-auto mt-15"
        width="100%"
        tile
    >
      <v-list dense>
        <v-subheader>History</v-subheader>
        <v-list-item-group
            v-model="selectedItem"
            color="primary"
        >
          <v-list-item
              v-for="(item, i) in history"
              :key="i"
              @click="()=>getSelectedNews(item.path)"
          >
            <v-list-item-content>
              <v-list-item-title v-text="item.id"></v-list-item-title>
            </v-list-item-content>
            <v-list-item-icon>
              <v-icon>
                mdi-chevron-right
              </v-icon>
            </v-list-item-icon>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
import router from "@/router";

export default {
  name: "HistoryNews",
  computed: {
    ...mapState(["history"]),
  },
  data: () => ({
    selectedItem: 1,
    items: [
      { text: 'Real-Time', icon: 'mdi-clock' },
      { text: 'Audience', icon: 'mdi-account' },
      { text: 'Conversions', icon: 'mdi-flag' },
    ],
  }),
  mounted() {
    this.$store.dispatch("setTabBar", 'history')
  },
  methods: {
    getSelectedNews(e) {
      router.push(e)
    },
  },
}
</script>

<style scoped>

</style>
