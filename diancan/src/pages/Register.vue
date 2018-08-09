<template>
	<div class="row mt-3">
		<div class="col-md-12 col-lg-12">
			<div class="card">
				<div class="card-body">
					<img src="../assets/img/icon.png" height="256" width="256" alt="" class="mx-auto d-block">
					<form @submit.prevent="onSubmit">
						<div class="form-group">
							<label for="email">邮箱</label>
							<input type="email" v-model="user.email" class="form-control">
						</div>
						<div class="form-group">
							<label for="password">密码</label>
							<input type="password" v-model="user.password" class="form-control">
						</div>
						<div class="form-group">
							<label for="confirm">确认密码</label>
							<input type="password" v-model="user.confirmPassword" class="form-control">
						</div>
						<button class="btn btn-block btn-success" type="submit">注册</button>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				user: {
					email: '',
					password: '',
					confirmPassword: ''
				}
			}
		},
		methods: {
			onSubmit () {
				if (this.user.password === this.user.confirmPassword) {
					console.log(this.user)
					this.$axios.post('/users.json', this.user)
						.then(res => this.$router.push('/login'))
						.catch(error => {
							console.log(error)
						})
				} else {
					alert('两次密码不一致！')
				}
			}
		}
	};
</script>