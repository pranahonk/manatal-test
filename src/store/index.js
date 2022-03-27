import Vue from 'vue';
import Vuex from 'vuex';

import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
    // our main state for characters
    state: {
        headline: [],
    },

    mutations: {
        SET_CHARACTERS(state, character) {
            state.characters = character;
        },
    }, // API request from endpoint

    actions: {
        loadCharacters({commit}) {
            axios
                .get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.API_KEY}`)
                .then((response) => {
                    console.log(response)
                    // commit("SET_CHARACTERS", response.data.results);
                });
        }
    }, // This field is required for reach our data on state

    getters: {
        getCharacters: (state) => state.characters
    }
});
