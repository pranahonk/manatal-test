<template>
  <div class="mt-16">hello world</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: "DetailNews",
  computed: {
    ...mapState(["headlines", "idxNewsDetail"]),
  },
  async created() {
    if (this.headlines.length < 1) {
      await this.$store.dispatch("loadHeadline");
    }

    const refreshIntervalId = setInterval(() => {
      this.$store.dispatch("getNewsDetail", this.$attrs.id);
      if (this.idxNewsDetail !== null) {
        clearInterval(refreshIntervalId);
      }
    }, 100)
  },
}
</script>

<style scoped>

</style>
