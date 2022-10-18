<template>
	<v-card :class="{ 'fullscreen': fullscreen }">
		<!-- Card title -->
		<v-card-title>
			<!-- Title and subtitle -->
			<div class="flex-column">
				<!-- Title -->
				<div v-if="!editable_title && title" class="title">
					<v-icon v-if="title_icon">
						{{ title_icon }}
					</v-icon> {{ title }}
				</div>

				<!-- Subtitle -->
				<div v-if="!editable_title && subtitle" class="subtitle">
					<v-icon v-if="subtitle_icon" small class="mr-2">
						{{ subtitle_icon }}
					</v-icon> {{ subtitle
					}}
				</div>

				<!-- Subtitle2 -->
				<div v-if="!editable_title && subtitle2" class="subtitle2">
					<v-icon v-if="subtitle2_icon" small class="mr-2">
						{{ subtitle2_icon }}
					</v-icon> {{ subtitle2
					}}
				</div>


				<!-- Editable title -->
				<div v-if="editable_title" class="editable-title">
					<v-text-field hide-details autofocus :label="title_label" :value="title" @input="value => $emit('title', value)" />
				</div>
			</div> <!-- End title and subtitle -->

			<!-- Close button -->
			<div class="close">
				<v-btn icon small @click="$emit('close')">
					<v-icon small color="info">
						close
					</v-icon>
				</v-btn>
			</div> <!-- End close button -->
		</v-card-title><!-- End card title -->

		<!-- Card text -->
		<v-card-text v-if="!!this.$slots.default">
			<!-- Error content -->
			<div v-if="error" class="loading">
				<v-icon color="error" style="font-size: 48px !important">
					warning
				</v-icon>
			</div><!-- End loading content -->

			<!-- Loading content -->
			<div v-else-if="loading" class="loading">
				<v-progress-circular indeterminate color="primary" />
			</div><!-- End loading content -->

			<!-- Slot (props children) -->
			<slot />
		</v-card-text><!-- End card text -->

		<!-- Card actions buttons -->
		<v-card-actions v-if="btn_delete_title || btn_cancel_title || btn_submit_title || btn_submit_2_title"
			:class="!this.$slots.default ? 'pt-0' : null">
			<!-- Delete buttons -->
			<v-btn v-if="btn_delete_title" flat round :loading="btn_delete_loading" color="error"
				:small="btn_small"
				:disabled="loading" :class="!md_and_up ? 'ma-1' : 'my-0'" class="px-3" @click="$emit('delete')">
				<span>{{ btn_delete_title }}</span>
			</v-btn><!-- End delete buttons -->

			<v-spacer v-if="btn_delete_title && md_and_up" />

			<!-- Cancel button -->
			<v-btn v-if="btn_cancel_title" flat round color="info" :small="btn_small"
				:disabled="loading"
				:class="!md_and_up ? 'ma-1' : 'my-0'" class="px-3" @click="$emit('close')">
				<span>{{ btn_cancel_title }}</span>
			</v-btn><!-- End cancel button -->

			<!-- Action button -->
			<v-btn v-if="btn_submit_title" depressed round :loading="btn_submit_loading" :color="btn_submit_loading ? 'info' : btn_submit_color ? btn_submit_color : 'primary'"
				:disabled="btn_submit_disabled || loading" :small="btn_small" :class="!md_and_up ? 'ma-1' : 'my-0'"
				class="px-3" @click="$emit('action')">
				<v-icon v-if="btn_submit_icon_left" class="mr-2" small dark>
					{{ btn_submit_icon_left }}
				</v-icon>
				<span>{{ btn_submit_title }}</span>
				<v-icon v-if="btn_submit_icon_right" class="ml-2" small dark>
					{{ btn_submit_icon_right }}
				</v-icon>
			</v-btn><!-- End action button -->

			<!-- Action button 2 -->
			<v-btn v-if="btn_submit_2_title" depressed round :loading="btn_submit_2_loading" :color="btn_submit_2_loading ? 'info' : btn_submit_2_color ? btn_submit_2_color : 'primary'"
				:disabled="btn_submit_2_disabled || loading" :small="btn_small" :class="!md_and_up ? 'ma-1' : 'my-0'"
				class="px-3" @click="$emit('action2')">
				<v-icon v-if="btn_submit_2_icon_left" class="mr-2" small dark>
					{{ btn_submit_2_icon_left }}
				</v-icon>
				<span>{{ btn_submit_2_title }}</span>
				<v-icon v-if="btn_submit_2_icon_right" class="ml-2" small dark>
					{{ btn_submit_2_icon_right
					}}
				</v-icon>
			</v-btn><!-- End action button -->
		</v-card-actions><!-- End card actions buttons -->
	</v-card>
</template>

<script>
export default {
  name: 'Dialog',
  props: {
    title: {
      type: String,
      default: null
    },
    title_icon: {
      type: String,
      default: null
    },
    title_label: {
      type: String,
      default: null
    },
    editable_title: {
      type: Boolean,
      default: false
    },
    subtitle: {
      type: String,
      default: null
    },
    subtitle2: {
      type: String,
      default: null
    },
    subtitle_icon: {
      type: String,
      default: null
    },
    subtitle2_icon: {
      type: String,
      default: null
    },
    loading: {
      type: Boolean,
      default: false
    },
    error: {
      type: Boolean,
      default: false
    },
    btn_small: {
      type: Boolean,
      default: true
    },
    btn_submit_title: {
      type: String,
      default: null
    },
    btn_submit_icon_left: {
      type: String,
      default: null
    },
    btn_submit_icon_right: {
      type: String,
      default: null
    },
    btn_submit_loading: {
      type: Boolean,
      default: false
    },
    btn_submit_disabled: {
      type: Boolean,
      default: false
    },
    btn_submit_color: {
      type: String,
      default: null
    },
    btn_submit_2_title: {
      type: String,
      default: null
    },
    btn_submit_2_icon_left: {
      type: String,
      default: null
    },
    btn_submit_2_icon_right: {
      type: String,
      default: null
    },
    btn_submit_2_loading: {
      type: Boolean,
      default: false
    },
    btn_submit_2_disabled: {
      type: Boolean,
      default: false
    },
    btn_submit_2_color: {
      type: String,
      default: null
    },
    btn_cancel_title: {
      type: String,
      default: null
    },
    btn_delete_title: {
      type: String,
      default: null
    },
    btn_delete_loading: {
      type: Boolean
    },
    fullscreen: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
  }),
  computed: {
    md_and_up() {
      return this.$vuetify.breakpoint.mdAndUp;
    }
  },
  mounted() {
    this.toggleBodyClass('addClass', 'dialog-active');
  },
  destroyed() {
    this.toggleBodyClass('removeClass', 'dialog-active');
  },
  methods: {
    toggleBodyClass(addRemoveClass, className) {
      const el = document.body;

      if (addRemoveClass === 'addClass')
        el.classList.add(className);
      else
        el.classList.remove(className);
    },
    hasFooter() {
      return this.btn_cancel_title || this.btn_submit_title;
    },
    hasHeader() {
      return this.title || this.subtitle;
    }
  }
};
</script>

<style scoped lang='scss'>
@import "@Assets/css/settings.scss";

.v-card {
  border-radius: 8px;
  box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.07), 0 20px 25px 0 rgba(0, 0, 0, 0.1) !important;

  ::-webkit-scrollbar {
    width: 6px;
    background-color: transparent;
  }

  ::-webkit-scrollbar-track {
    border-radius: 50px;
    background-color: rgba(0, 0, 0, 0.06);
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 50px;
    background-color: rgba(0, 0, 0, 0.3);
  }

  &.fullscreen {
    .v-card__title {
      flex: 0;
      padding: 20px 14px !important;
      min-height: 80px;
    }

    .v-card__text {
      padding: 20px 14px !important;
      background: #f9f9f9;
      flex: 1;
    }

    .v-card__actions {
      padding: 20px 14px !important;
      flex: 0;
    }

    .close {
      top: 20px !important;
    }
  }

  .v-icon {
    font-size: 14px !important;
  }

  .v-card__title {
    position: relative;
    justify-content: space-between;
    text-transform: none;
    font-size: 22px;

    .title {
      margin: 0 32px;

      .v-icon {
        color: $title-color;
        position: relative;
        top: -1px;
      }
    }

    .editable-title {
      flex: 1;
      margin-right: 32px;
    }

    .subtitle {
      margin: 4px 32px 0;
      font-size: 14px;
      font-weight: 500;
      color: #666;

      .v-icon {
        position: relative;
        top: -3px;
      }
    }

    .subtitle2 {
      margin: 4px 32px 0;
      font-size: 14px;
      font-weight: 500;
      color: #666;
      white-space: pre;
      .v-icon {
        position: relative;
        top: -3px;
      }
    }


    .flex-column {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      flex: 1;
    }

    .close {
      position: absolute;
      top: 0;
      right: 0;
    }
  }

  .v-card__text {
    position: relative;
    min-height: 50px;

    .loading {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background: #fff;
      z-index: 10;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .v-card__actions {
    .v-btn {
      ::v-deep .v-btn__content {
        .v-icon {
          margin-top: 0 !important;
        }
      }

      &.v-btn--small {
        ::v-deep .v-btn__content {
          span {
            padding-top: 2px !important;
          }
        }
      }
    }
  }
}
</style>
