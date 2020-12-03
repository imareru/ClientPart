<template>
	<div class="panel panel-primary" style="margin-top: 10px">
		<div class="panel-heading">Список новостей</div>
		<table class="table table-striped">
			<thead><tr><th>№</th><th>Новость</th><th>Источник</th><th>Дата</th></tr></thead>
			<tbody>
			<tr v-for="(item, index) in rssItems" :key="index">
				<td>{{index + 1}}</td>
				<td><a :href="item.link" target="_blank">{{ item.title }}</a></td>
				<td>{{ getSourceName(item.source) }}</td>
				<td>{{ formatDate(new Date(item.date)) }}</td>
			</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
	import { sources } from "../config";
	import { formatDate } from "../utils";
	import { mapState } from 'vuex';

	export default {
		methods: {
			formatDate,
			getSourceName(sourceId) {
				return sources[sourceId];
			}
		},
		computed: {
			...mapState({
				rssItems: state => state.rssItems
			})
		}
	}
</script>
