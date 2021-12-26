<template>
	<div class="panel panel-primary" style="margin-top: 10px">
		<div class="panel-heading">Редактирование региона</div>
		<div class="panel-body">
			<form @submit="handleSubmit">
				<div class="form-group">
					<label for="inputTitle">Название региона</label>
					<input type="text" class="form-control" id="inputTitle" v-model="name">
				</div>
<!--				<div class="form-group">-->
<!--					<label for="inputLink">Название региона</label>-->
<!--					<input type="url" class="form-control" id="inputLink" v-model="link">-->
<!--				</div>-->
<!--				<div class="form-group">-->
<!--					<label for="inputSource">Название региона</label>-->
<!--					<select class="form-control" id="inputSource" v-model="source">-->
<!--						<option v-for="(source, key) in sources" :value="key">{{ source }}</option>-->
<!--					</select>-->
<!--				</div>-->
<!--				<div class="form-group">-->
<!--					<label for="inputDate">Дата и время</label>-->
<!--					<input type="date" class="form-control" id="inputDate" v-model="visibleDate">-->
<!--					<input type="time" class="form-control" id="inputTime" v-model="visibleTime">-->
<!--				</div>-->
				<button type="submit" class="btn btn-primary pull-right">Сохранить</button>
			</form>
		</div>
	</div>
</template>

<script>
	import { sources } from "../config";
	import { formatInputDate, formatInputTime } from "../utils";
	import {mapActions} from "vuex";

	export default {
		data() {
			const now = new Date(Date.now());
			return {
				id: parseInt(this.$route.params.id),
				name: "",
				// link: "",
				source: 1,
				// visibleDate: formatInputDate(now),
				// visibleTime: formatInputTime(now)
			};
		},
		created() {
			if (this.id !== 0 && this.regionItem) {
				// const date = new Date(this.rssItem.date);
				this.name = this.regionItem.name;
				// this.link = this.rssItem.link;
				// this.source = this.rssItem.source;
				// this.visibleDate = formatInputDate(date);
				// this.visibleTime = formatInputTime(date);
			}
		},
		methods: {
			async handleSubmit(e) {
				e.preventDefault();
				const item = {
					name: this.name,
					// link: this.link,
					// source: this.source,
					// date: this.date
				};
				if (this.id !== 0) {
					item.id = this.id;
					await this.editItem(item);
				} else {
					await this.addItem(item);
				}
				await this.$router.push({name: "app"});
			},
			...mapActions([
				'addItem',
				'editItem'
			])
		},
		computed: {
			date() { return `${this.visibleDate}T${this.visibleTime}:00+03:00`; },
			sources() { return sources; },
			regionItem() {
				return this.id !== 0 ?
					this.$store.state.regionItems.find(item => item.id === this.id):
					null;
			}
		}
	}
</script>
