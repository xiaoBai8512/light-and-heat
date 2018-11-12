<template>
	<div class="container">
		<Header></Header>
	</div>
</template>
<script>
import Header from '../components/Header'
export default {
	name: 'Index',
	components: {
		Header,
	},
}
</script>
<style scoped lang="scss">
@import '../styles/theme.scss';
.container {
}
</style>
