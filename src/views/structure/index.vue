<template>
	<v-app>
		<Content />
	</v-app>
</template>

<script>
import Content from './container';

export default {
  name: 'Container',
  components: {
    Content
  },
  data: () => ({
  })
};
</script>

<style scoped lang='scss'>
@import "@Assets/css/settings.scss";

</style>
