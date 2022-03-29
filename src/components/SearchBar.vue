<template>
  <div class="wrap">
    <div class="search">
      <input type="text" class="searchTerm"  v-model="searchText" placeholder="What are you looking for?">
      <button type="submit" class="searchButton" @click.prevent="handleClick">
        <v-icon
            large
            color="#FF3A44"
        >
          mdi-magnify
        </v-icon>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  data: () => ({
    searchText: null,
  }),
  watch: {
    searchText(val) {
      this.$emit('searchText', val)
    },
  },
  methods: {
    handleClick() {
      this.$emit('btnSearchPress')
    },
  },
}
</script>

<style scoped>
.search {
  width: 100%;
  position: relative;
  display: flex;
}

.searchTerm {
  width: 102%;
  border: 1px solid #F0F1FA;
  border-right: none;
  padding: 5px;
  height: 36px;
  border-radius: 16px 0 0 16px;
  outline: none;
  color: #9DBFAF;
}

.searchTerm:focus{
  color: #FF3A44;
}

.searchButton {
  width: 40px;
  height: 36px;
  border-top: 1px solid #F0F1FA;
  border-right: 1px solid #F0F1FA;
  border-bottom: 1px solid #F0F1FA;
  background: transparent;
  text-align: center;
  color: #fff;
  border-radius: 0 16px 16px 0;
  cursor: pointer;
  font-size: 20px;
}

/*Resize the wrap to see the search bar change!*/
.wrap{
  width: 100%;
  max-width: 264px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-33%, -50%);
}
</style>
