import Vue from "vue";
import Vuex from "vuex";

import axios from "axios";
import { getURLNews } from "@/helpers";

Vue.use(Vuex);

export default new Vuex.Store({
    // our main state for characters
    state: {
        headlines: [],
        idxNewsDetail: null,
    },

    mutations: {
        SET_HEADLINES(state, character) {
            state.headlines = character;
        },
        SET_NEWS_DETAIL(state, idx) {
            state.idxNewsDetail = idx
        },
    }, // API request from endpoint

    actions: {
        loadHeadline({ commit }) {
            axios
                .get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.VUE_APP_API_KEY}`)
                .then((response) => {
                    console.log(response)
                    commit("SET_HEADLINES", response.data.articles);
                });
        },
        // eslint-disable-next-line no-unused-vars
        getNewsDetail: ({ commit, state }, payload) => {
            if (state.headlines.length) {
                const indx = state.headlines.findIndex((x) => getURLNews(x.title) === payload);
                commit('SET_NEWS_DETAIL', indx)
            }
        },
    }, // This field is required for reach our data on state

    getters: {
        getHeadline: (state) => state.headlines,
        getNewsDetailIdx: (state) => state.idxNewsDetail,
    },
});
