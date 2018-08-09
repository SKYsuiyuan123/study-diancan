<template>
	<form>
		<h3 class="text-muted my-5">添加新的Pizza</h3>
		<div class="form-group row">
			<label class="col-sm-2">品种</label>
			<div class="col-sm-10">
				<input type="text" class="form-control" v-model="newPizza.name">
			</div>
		</div>
		<div class="form-group row">
			<label class="col-sm-2">描述</label>
			<div class="col-sm-10">
				<textarea v-model="newPizza.description" rows="5" class="form-control"></textarea>
			</div>
		</div>
		<p><strong>选项1:</strong></p>
		<div class="form-group row">
			<label class="col-sm-2">尺寸</label>
			<div class="col-sm-10">
				<input type="text" class="form-control" v-model="newPizza.size1">
			</div>
		</div>
		<div class="form-group row">
			<label class="col-sm-2">价格</label>
			<div class="col-sm-10">
				<input type="text" class="form-control" v-model="newPizza.price1">
			</div>
		</div>

		<p><strong>选项2:</strong></p>
		<div class="form-group row">
			<label class="col-sm-2">尺寸</label>
			<div class="col-sm-10">
				<input type="text" class="form-control" v-model="newPizza.size2">
			</div>
		</div>
		<div class="form-group row">
			<label class="col-sm-2">价格</label>
			<div class="col-sm-10">
				<input type="text" class="form-control" v-model="newPizza.price2">
			</div>
		</div>
		<div class="form-group row">
			<button @click="addMenuItem" class="btn btn-success btn-block" type="button">添加</button>
		</div>
	</form>
</template>

<script>
	export default {
		data () {
			return {
				newPizza: {}
			}
		},
		methods: {
			addMenuItem () {
				let data = {
					name: this.newPizza.name,
					description: this.newPizza.description,
					options: [
						{
							size: this.newPizza.size1,
							price: this.newPizza.price1
						},
						{
							size: this.newPizza.size2,
							price: this.newPizza.price2
						}
					]
				}
				this.$axios.post('/menu.json', data)
					.then(res => {
						// 数据同步到 store 中
						this.$store.commit('pushToMenuItems', res.data)
					})
					.catch(error => {
						console.log(error)
					})
			}
		}
	};
</script>