<template>
  <div class="home row">
  	<div class="col-sm-12 text-center">
  		<div class="background">
  			<h1>欢迎大家品尝 pizza!</h1>
  			<h3>这里的 pizza 很好吃！</h3>
		  	<button class="btn btn-success" @click=goToMenu>Let's order!</button>
  		</div>
  	</div>
  </div>
</template>

<script>
export default {
	name: 'home',
	data () {
		return {}
	},
	methods: {
		goToMenu () {
			// 跳转到上一次浏览页面
			// this.$router.go(-1)

			// 跳转到指定地址
			// this.$router.push('/menu')
			// or
			// this.$router.replace('/menu')
			// or
			// this.$router.replace({name: 'menu'})
			
			this.$router.push('/menu')
		}
	}
};
</script>

<style scoped>
.home {
	height: 70vh;
	padding: 10%;
	background-image: url('../assets/img/pizza.jpg');
	background-repeat: no-repeat;
	background-size: 1140px 763px;
	margin: 0 auto;
	margin-top: 10px;
}

h1, h3 {
	margin: 6%;
}
.background {
	background-color: #eee;
	opacity: 0.8;
	max-width: 70vw;
	margin: 0 auto;
	padding: 20px 0;
}
</style>
