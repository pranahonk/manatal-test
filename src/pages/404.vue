<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <v-container>
          <v-card height="400" color="transparent" flat>
            <div class="display-3 mt-16 font-weight-bold text-center
            text-primary">Page not found.
            </div>
            <div class="grey--text lighten-5">
              The page you are trying to get to never existed in this reality,
              or has migrated to a parallel universe.
            </div>
            <div class="text-center mt-4">
              <v-icon
                  large
                  color="#FF3A44"
              >
                mdi-hammer-wrench
              </v-icon>
            </div>
            <div class="paragraph-text mt-2">
              <br />
              <div class="text-center">
                <v-btn
                    color="#FF3A44"
                    class="white--text"
                    elevation="2"
                    @click="()=>directToHome()"
                >will direct you to homepage {{timerCount}}</v-btn>
              </div>
            </div>
          </v-card>
        </v-container>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<style>
@import "../styles/scss/helper.scss";
</style>

<script>
import router from "@/router";

export default {
  name: "notFound",
  data: () => ({
    timerCount: 5,
  }),
  watch: {
    timerCount: {
      handler(value) {
        if (value > 0) {
          setTimeout(() => {
            // eslint-disable-next-line no-plusplus
            this.timerCount--;
          }, 1000);
        } else if (value === 0) {
          this.directToHome()
        }
      },
      immediate: true,
    },
  },
  methods: {
    directToHome() {
      router.push('/')
    },
  },
}
</script>
