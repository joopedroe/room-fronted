<template>
	<v-content>
		<router-view />
	</v-content>
</template>

<script>

export default {
  name: 'Content',
  data: () => ({
  })
};
</script>

<style lang="scss" scoped>
@import "@Assets/css/settings.scss";

.content-app {
  background-color: #fcfdff;
  color: $font-color;

  header {
    position: fixed;
    z-index: 2;
    top: 0;
    left: 0;
    right: 0;
    height: 60px;
    background: $light-gradient;

    @media screen and (min-width: $break-point-lg) {
      display: none;
    }
  }

  ::v-deep .content-wrapper {
    position: relative;
    padding-top: 45px;

    @media screen and (min-width: $break-point-lg) {
      padding: 30px 45px 45px;
    }

    .heading-wrapper {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 45px;
    }
  }
}
</style>
