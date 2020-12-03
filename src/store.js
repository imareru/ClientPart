import Vue from 'vue';
import Vuex from 'vuex';
import RssApi from './api';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		rssItems: [],
		alertText: ""
	},
	getters: {

	},
	mutations: {
		'SET_RSS_ITEMS'(state, rssItems) {
			state.rssItems = rssItems;
		},
		'SET_ALERT_TEXT'(state, alertText) {
			state.alertText = alertText;
		}
	},
	actions: {
		async getRssItems(context) {
			try {
				const response = await RssApi.rssItem.getAll();
				context.commit('SET_RSS_ITEMS', response.data );
			} catch (error) {
				context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
			}
		}
	}
});
