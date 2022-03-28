import Vue from 'vue';
import Vuex from 'vuex';

import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
    // our main state for characters
    state: {
        headlines: [],
    },

    mutations: {
        SET_CHARACTERS(state, character) {
            // eslint-disable-next-line no-param-reassign
            state.headlines = character;
        },
    }, // API request from endpoint

    actions: {
        loadCharacters({ commit }) {
            axios
                .get(`https://newsapi.org/v2/top-headliness?country=us&apiKey=${process.env.VUE_APP_API_KEY}`)
                .then((response) => {
                    console.log(response)
                    commit("SET_CHARACTERS", response.data.results);
                });
        },
    }, // This field is required for reach our data on state

    getters: {
        getCharacters: (state) => state.headlines,
    },
});
