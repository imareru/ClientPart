<template>
	<div class="panel panel-primary" style="margin-top: 10px">
		<div class="panel-heading">Список регионов</div>
		<div class="panel-body">
			<router-link role="button" class="btn btn-lg btn-block btn-default" :to="{name: 'edit', params: {id: 0}}">
				Создать аккаунт
			</router-link>
		</div>
		<table class="table table-striped">
			<thead>
			<tr>
				<th>№</th>
				<th style="width: 65%">Регион</th>
<!--				<th style="width: 10%">Пароль</th>-->
				<th style="width: 20px"></th>
				<th style="width: 20px"></th>
			</tr>
			</thead>
			<tbody>
			<tr v-for="(item, index) in rssItems" :key="index">
<!--				aller("")-->
				<td>{{index + 1}}</td>
				<td><a :href="item.link" target="_blank">{{ item.name }}</a></td>
<!--				<td>{{ sources[item.name] }}</td>-->
<!--				<td>{{ sources[item.source] }}</td>-->
<!--				<td>{{ formatDate(new Date(item.date)) }}</td>-->
				<td><router-link role="button" class="btn btn-sm btn-link" :to="{name: 'edit', params: {id: item.id}}">
					<span class="glyphicon glyphicon-pencil"></span>
				</router-link></td>
				<td><button type="button" class="btn btn-sm btn-link" @click="handleRemoveClick($event, item.id)">
					<span class="glyphicon glyphicon-remove"></span>
				</button></td>
			</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
	import { region } from "../config";
	import { formatDate } from "../utils";
	import {mapActions, mapState} from 'vuex';

	export default {
		methods: {
			formatDate,
			async handleRemoveClick(e, id) {
				await this.removeItem(id);
			},
			...mapActions([
				'removeItem'
			])
		},
		computed: {
			sources: () => sources,
			// getReion: () => sources,
			...mapState({
				rssItems: state => state.rssItems
			})
		}
	}
</script>
