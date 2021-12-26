<template>
	<div class="panel panel-primary" style="margin-top: 10px">
		<div class="panel-heading">Редактирование данных пользователя</div>
		<div class="panel-body">
			<form @submit="handleSubmit">

				<div class="form-group">
					<label for="inputName">Имя</label>
					<input type="text" class="form-control" id="inputName" v-model="first_name">
				</div>

				<div class="form-group">
					<label for="inputSurname">Фамилия</label>
					<input type="text" class="form-control" id="inputSurname" v-model="surname">
				</div>

				<div class="form-group">
					<label for="inputMail">Почта</label>
					<input type="text" class="form-control" id="inputMail" v-model="mail">
				</div>

				<div class="form-group">
					<label for="inputRegion">Регион</label>
					<select class="form-control" id="inputRegion" v-model="source">
						<option v-for="(source, key) in regionItem" :value="key">{{ source }}</option>
					</select>
				</div>
				<button type="submit" class="btn btn-primary pull-right">Сохранить</button>
			</form>
		</div>
	</div>
</template>

<script>
	// import { sources } from "../../config";
	import {mapActions, mapState} from "vuex";

	function getId(source) {
		this.region_id = source.id;
		return source;
	}

	export default {
		data() {
			const now = new Date(Date.now());
			return {
				id: parseInt(this.$route.params.id),
				first_name: "",
				surname: "",
				mail: "",
				region_id: 1,
				source: 1,
				region_all: [],
			};
		},
		created() {
			if (this.id !== 0 && this.rssItem) {
				// const date = new Date(this.rssItem.date);
				this.first_name = this.rssItem.first_name;
				this.surname = this.rssItem.surname;
				this.mail = this.rssItem.mail;
				this.region_id = this.rssItem.regionResource.id;
				this.regionResource = this.rssItem.regionResource.name;
				this.source = this.region_id;
				// this.region_all = this.
			}
		},
		methods: {
			async handleSubmit(e) {
				e.preventDefault();
				const item = {
					first_name: this.first_name,
					surname: this.surname,
					mail: this.mail,
					region_id: Number(this.source.id),
					// alert(message) {
					// 	this.source.id
					// }
					// source: this.regionResource,
					// source: this.source,
					// date: this.date
				};
				console.log(this.source)
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
			// sources() {
			// 	sources = this.regionItem()
			// 	return sources; },
			// source() {
			// 	s
			// },
			rssItem() {
				return this.id !== 0 ?
					this.$store.state.rssItems.find(item => item.id === this.id):
					null;
			},
			regionItem() {
					return this.$store.state.regionItems;
			},
			getIdRegion() {
				return 	this.$store.state.regionItems.find()
			},
			getId() {
				return
			}
		}
	}

</script>

<style scoped>

</style>
