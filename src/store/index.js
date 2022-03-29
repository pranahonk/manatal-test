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
        categoriesData: [],
        catTitle: null,
    },

    mutations: {
        SET_HEADLINES(state, character) {
            state.headlines = character;
        },
        SET_NEWS_DETAIL(state, idx) {
            state.idxNewsDetail = idx
        },
        SET_NEWS_CATEGORIES(state, cat) {
            state.categoriesData = cat
        },
        SET_CATEGORIES_TITLE(state, title) {
            state.catTitle = title
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
        getNewsDetail: ({ commit, state }, payload) => {
            if (state.headlines.length) {
                const indh = state.headlines.findIndex((x) => getURLNews(x.title) === payload);
                console.log(state.categoriesData)
                commit('SET_NEWS_DETAIL', indh)
            }
        },
        setCatTitle: ({ commit }, payload) => {
            commit('SET_CATEGORIES_TITLE', payload)
        },
        loadNewsCategory: ({ commit, state }, payload) => {
            if (state.catTitle) {
                axios
                    .get(`https://newsapi.org/v2/top-headlines?category=${payload}&country=us&apiKey=${process.env.VUE_APP_API_KEY}`)
                    .then((res) => {
                        console.log(res.data.articles);
                        commit('SET_NEWS_CATEGORIES', res.data.articles)
                    })
                    .catch((err) => {
                        console.error(err);
                    })
            }
        },
    }, // This field is required for reach our data on state

    getters: {
        getHeadline: (state) => state.headlines,
        getNewsDetailIdx: (state) => state.idxNewsDetail,
        getCategories: (state) => state.categoriesData,
        getCatTitle: (state) => state.catTitle,
    },
});
