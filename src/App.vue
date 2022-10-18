<template>
	<div>
		<router-view />
	</div>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
  }),
  methods: {
  }
};
</script>

<style lang="scss">
@import "@Assets/css/spacing-responsive.scss";
@import "@Assets/css/settings.scss";

/* Loading */
.loading-app {
  overflow: hidden !important;
  &.ready {
    opacity: 0;
    z-index: -1000;
    transition: all 0.5s;
  }
}
/* Router transitions */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}
.page-enter {
  opacity: 0;
  transform: translateY(-15px);
  @media screen and (min-width: $break-point-lg) {
    transform: translateY(0);
    transform: translateX(-15px);
  }
}
.page-leave-to {
  opacity: 0;
  transform: translateY(15px);
  @media screen and (min-width: $break-point-lg) {
    transform: translateY(0);
    transform: translateX(15px);
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
/* Main CSS */
html,
body,
.application {
  height: 100%;
  font-family: "Source Sans Pro", sans-serif;
}
.v-chip {
  font-family: "Roboto", sans-serif;
}
h1,
h2,
h3 {
  color: $title-color;
}
h1,
h2,
h3,
h4,
h5,
h6,
.v-btn,
.v-card__title,
.v-navigation-drawer,
.v-list__tile__title,
.text--primary,
.v-avatar {
  font-family: "Nunito", Helvetica, Arial, sans-serif;
}
h3,
h4,
h5,
h6 {
  font-weight: 600;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}
.fade-in-enter {
  opacity: 0;
}
.fade-in-enter-active {
  transition: all 400ms ease;
}
.select-none {
  user-select: none;
}
.pointer {
  cursor: pointer;
}
.v-dialog__content--active, .vue-image-crop-upload {
  backdrop-filter: blur(3px) grayscale(50%);
}
.btn-fora-card {
  background-color: #fff !important;
  color: $title-color;
  font-weight: 600 !important;
  padding: 3px 18px !important;
  box-shadow: 0 5px 30px rgba(#000, 0.09) !important;
  .v-icon.fas,
  .v-icon.far {
    font-size: 15px !important;
    margin-top: -1px !important;
  }
}
.justify-between {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.no-wrap {
  white-space: nowrap !important;
}
.max-content {
  max-width: max-content !important;
}
/* Vue Image Upload Crop */
.vue-image-crop-upload .vicp-wrap {
  width: 290px;
}
/* Vuetify reset */
/* Border color from v-text-field */
.fas.v-icon,
.far.v-icon {
  font-size: 22px;
  &.fas.small,
  &.far.small {
    font-size: 14px !important;
  }
}
.theme--light.v-table thead tr:first-child {
  border-bottom: 1px solid rgba(0, 0, 0, 0.04) !important;
}
.theme--light.v-table tbody tr:not(:last-child) {
  border-bottom: 1px solid rgba(0, 0, 0, 0.08) !important;
}
.theme--light.v-datatable .v-datatable__actions {
  border-top: 1px solid rgba(0, 0, 0, 0.08) !important;
}
.theme--light.v-text-field > .v-input__control > .v-input__slot:before {
  border-color: rgba(#000, 0.15) !important;
}
.v-btn {
  &__content {
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    text-transform: none;
    line-height: 1.4;
  }
  &.primary,
  &.success {
    font-weight: 700;
  }
}
.v-chip--small {
  .v-chip__content {
    font-size: 10px;
  }
}
.v-menu__content {
  box-shadow: 0 8px 50px rgba(0, 0, 0, 0.09) !important;
}
.v-avatar {
  &.cy-avatar {
    user-select: none;
    font-family: "Nunito", sans-serif;
    font-weight: bold;
    background: $cy-gradient;
    color: #fff;
    .letter {
      font-size: 24px;
    }
  }
  img {
    object-fit: cover;
  }
}
.v-tooltip__content {
  background-color: $title-color !important;
  box-shadow: none !important;
  text-align: center;
  &.top {
    &:after {
      border: solid transparent !important;
      top: 100% !important;
      left: 50% !important;
      content: " " !important;
      height: 0 !important;
      width: 0 !important;
      position: absolute !important;
      pointer-events: none !important;
      border-top-color: $title-color !important;
      border-width: 4px !important;
      margin-left: -4px !important;
    }
  }
  &.bottom {
    &:after {
      border: solid transparent !important;
      bottom: 100% !important;
      left: 50% !important;
      content: " " !important;
      height: 0 !important;
      width: 0 !important;
      position: absolute !important;
      pointer-events: none !important;
      border-bottom-color: $title-color !important;
      border-width: 4px !important;
      margin-left: -4px !important;
    }
  }
}
.v-pagination__navigation,
.v-pagination__item {
  outline: none;
  box-shadow: 0 8px 50px rgba(#000, 0.09) !important;
}
.v-input--switch {
  .v-input--selection-controls__input {
    margin-top: 3px !important;
    .v-input--switch__track {
      border-radius: 10px !important;
      height: 20px !important;
      top: 0 !important;
      opacity: 1 !important;
    }
    .v-input--switch__thumb {
      color: #fff !important;
      caret-color: #fff !important;
      top: 1px !important;
      height: 18px !important;
      width: 18px !important;
      transform: translate(3px, 0);
      &.cy_purple--text,
      &.cy_blue--text,
      &.accent--text,
      &.success--text,
      &.error--text,
      &.warning--text,
      &.info--text,
      &.primary--text {
        color: #fff !important;
        caret-color: #fff !important;
      }
    }
  }
  &.v-input--is-dirty {
    .v-input--switch__thumb {
      transform: translate(17px, 0) !important;
    }
  }
}
.v-select-list {
  padding: 0 !important;
}
.v-card {
  border-radius: 6px !important;
  box-shadow: 0 8px 50px rgba(#000, 0.09) !important;
  padding: 14px;
  overflow: hidden;
  ::-webkit-scrollbar {
    width: 6px;
    background-color: transparent;
  }
  ::-webkit-scrollbar:horizontal {
    height: 6px;
  }
  ::-webkit-scrollbar-track {
    border-radius: 50px;
    background-color: rgba(0, 0, 0, 0.05);
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 50px;
    background-color: #bbb;
  }
  .v-card__title {
    padding: 6px 14px 20px;
    text-transform: uppercase;
    font-weight: bold;
    color: $title-color;
    .v-btn,
    .v-text-field,
    span {
      text-transform: none;
      font-weight: 600;
    }
    .title-wrapper {
      display: flex;
      flex-direction: column;
      .subtitle {
        text-transform: none;
        font-weight: 400;
      }
    }
  }
  .v-card__text {
    padding: 7px 14px;
  }
  .v-card__actions {
    padding: 20px 14px 6px;
    justify-content: center;
    flex-wrap: wrap;
  }
  &.card-lista {
    padding: 16px 16px 16px 0 !important;
    .v-card__title {
      padding: 10px 18px 10px 34px !important;
    }
    .v-card__text {
      padding: 0px 10px 0 0 !important;
      overflow-y: auto !important;
    }
    .v-list {
      padding: 0 !important;
      .v-list__tile {
        border-radius: 0 5px 5px 0 !important;
        margin: 5px 0 !important;
        padding-left: 24px !important;
        .v-chip {
          text-transform: uppercase !important;
          font-weight: 600 !important;
          font-size: 11px !important;
        }
      }
    }
  }
}
.v-dialog__content,
.v-dialog,
.v-overlay {
  transition: none !important;
  box-shadow: none !important;
}
.v-overlay {
  &:before {
    background-color: $overlay !important;
  }
  &.v-overlay--active:before {
    opacity: 0.6 !important;
  }
}
/* Quill Editor */
.quill-editor {
  .ql-editor {
    min-height: 338px;
  }
  .ql-toolbar {
    position: sticky;
    top: -7px;
    background: white;
    z-index: 1;
  }
}
.ql-tabs {
  position: sticky;
  top: -7px;
  z-index: 1;
  .v-btn {
    min-width: auto;
    padding: 0 14px;
    margin: 6px;
  }
}
</style>
