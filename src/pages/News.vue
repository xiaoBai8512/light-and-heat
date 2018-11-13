<template>
	<div class="container">
		<div class="content">
			<h2 @click="onReturn">{{ msg }}</h2>
		</div>
	</div>
</template>
<script>
import Header from '../components/Header'
export default {
	name: 'News',
	data () {
		return {
			msg:'太阳出来了，就一定会洒下光和热'
		}
	},
	methods: {
		onReturn(){
			this.$router.go(-1)
		}
	},
	components: {
		Header,
	},
}
</script>
<style scoped lang="scss">
@import '../styles/theme.scss';
.container {
	margin: 0 auto;
	.content {
		margin: 14% auto 0;
	}
}
</style>
