import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './views/App';
import Loader from "./views/Loader";
import RegionList from "./views/RegionList";
import RegionEdit from "./views/RegionEdit";
import BuyerList from "./views/buyer/BuyerList";
import BuyerEdit from "./views/buyer/BuyerEdit";

Vue.use(VueRouter);
export default new VueRouter({
	mode: 'history',
	routes: [
		{ path: "/", name: "loader", component: Loader },
		{ path: "/app", component: App, children: [
				// { path: "/", name: "app", component: RegionList },
				// { path: "/:id", name: "edit", component: RegionEdit }
				{ path: "/", name: "app", component: BuyerList },
				{ path: "/:id", name: "edit", component: BuyerEdit }
		]}
	]
});
