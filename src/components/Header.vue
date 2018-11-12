<template>
	<div class="container">
		<div class="header">
			<img class="logo" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542016017937&di=6bbdcee858a02398023d1d37e1ac9d04&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F5%2F57fb3dca84a20.jpg" alt="" />
		</div>
		<div class="section">
			<h1>{{ msg }}</h1>
			<div class="btn-news" @click="onNews">{{ signature }}</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Header',
	data() {
		return {
			msg: '愿每个独立而丰富的灵魂，都有处可栖',
			signature:'无论极夜还有多久，太阳总会出来的'
		}
	},
	methods: {
		onNews(){
			this.$router.push('/News/')
		}
	}
}
</script>

<style scoped lang="scss">
@import '../styles/theme.scss';
.container {
	width: 80%;
	margin: 0 auto;
	.header {
		margin: 14% auto 0;
		.logo {
			width: 20rem;
		}
	}
	.section {
		.btn-news {
			margin: 10% auto 0;
			text-align: right;
		}
	}
}
</style>
