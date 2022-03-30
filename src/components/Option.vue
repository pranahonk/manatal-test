<template>
  <v-sheet
      class="mx-auto"
      max-width="700"
  >
    <v-slide-group
        v-model="model"
        mandatory
    >
      <v-slide-item
          v-for="n in categories"
          :key="n"
          v-slot="{ active, toggle }"
      >
        <v-btn
            class="mx-1"
            :input-value="active"
            active-class="active white--text"
            depressed
            rounded
            @click="toggle"
        >
          {{ n }}
        </v-btn>
      </v-slide-item>
    </v-slide-group>
  </v-sheet>
</template>

<script>
export default {
  name: "optionCategory",
  data: () => ({
    model: null,
  }),
  props: {
    categories: Array,
  },
  watch: {
    model(newVal) {
      this.$store.dispatch('setCatTitle', this.categories[newVal])
    },
  },
}
</script>

<style lang="scss" scoped>
.manatal{
  &-option{
    position: static;
    width: auto;
    left: calc(50% - 95px/2 - 70.5px);
    background: #FFFFFF;
    border: 1px solid #F0F1FA;
    border-radius: 16px;
  }
}

.active{
  background: linear-gradient(119.65deg, #FF3A44 0%, #FF8086 128.41%);
  border: 1px solid #FFB3B6;
}

</style>
