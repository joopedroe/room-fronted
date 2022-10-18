<template>
	<v-layout wrap class="pb-0">
		<v-flex v-for="(value, key) in campos" :key="key" :class="value.size || 'xs12'">
			<v-divider v-if="key === 'divider'" />
			<field :is="`${value.component || 'v-text-field'}`" v-else v-model="item[`${key}`]" v-money="value.money || value.decimal || false"
				v-coco-mask="getCocoMask(value)" v-validate="value.validation || {}" :box="style_box_form"
				:append-icon="value.icon"
				class="error-2-lines" :rows="value.component === 'v-textarea' ? 2 : null"
				:disabled="value.disabled === true" :auto-grow="value.component === 'v-textarea'"
				:placeholder="value.placeholder || null" :label="`${value.label}${(value.validation || {}).required ? ' *': ''}`" :type="value.type"
				:data-vv-name="key" :error-messages="errors.first(getScope(key))" :data-vv-scope="scope"
				:items="value.items || []" :item-text="value.item_text || null" :multiple="value.multiple"
				:item-value="value.item_value || null" :clearable="value.clearable || false"
				:return-object="value.return_object || false" :chips="value.chips || false"
				:small-chips="value.small_chips || false" :hide-details="value.hide_details || false"
				:open-on-clear="value.open_on_clear || false" :min="value.min || null"
				:max="value.max || null" :autocomplete="value.component ? null : 'new-password'"
				:autofocus="value.autofocus || false" :loading="value.loading || false"
				@keydown.enter="(!value.keydown && value.component !== 'v-autocomplete' && value.component !== 'v-select' && value.component !== 'v-textarea') ? $emit('keydown') : null">
				<template v-if="value.no_data_text" slot="no-data">
					<v-list-tile>
						<v-list-tile-content>
							<v-list-tile-sub-title>
								Nenhum resultado
							</v-list-tile-sub-title>
							<v-list-tile-title>
								{{ value.no_data_text }}
							</v-list-tile-title>
						</v-list-tile-content>
					</v-list-tile>
				</template>
				<v-tooltip v-if="value.info_text" slot="append" top max-width="210">
					<v-icon slot="activator">
						info_outline
					</v-icon>
					{{ value.info_text }}
				</v-tooltip>
				<v-tooltip v-if="value.date_picker !== undefined" slot="append" top max-width="210">
					<v-icon slot="activator" @click="openDatePicker(value, key)">
						event
					</v-icon>
					Calendário
				</v-tooltip>
				<v-tooltip v-if="value.time_picker !== undefined" slot="append" top max-width="210">
					<v-icon slot="activator" @click="openTimePicker(value, key)">
						access_time
					</v-icon>
					Horário
				</v-tooltip>
			</field>
			<v-dialog v-if="value.date_picker !== undefined" v-model="value.date_picker" lazy
				width="290px" transition="fade" full-width>
				<v-date-picker v-model="picked_date" class="pa-0" color="primary"
					locale="pt-br" :min="value.min_date" :max="value.max_date" @input="datePicked(value, key)" />
			</v-dialog>
			<v-dialog v-if="value.time_picker !== undefined" v-model="value.time_picker" lazy
				width="290px" transition="fade" full-width>
				<v-time-picker v-model="picked_time" class="pa-0" color="primary" format="24hr" @input="timePicked(value, key)" />
			</v-dialog>
		</v-flex>
	</v-layout>
</template>

<script>

export default {
  name: 'Form',
  inject: ['$validator'], // inject parent's validator
  props: {
    style_box_form: {
      type: Boolean,
      default: true
    },
    item: {
      type: Object,
      default: () => ({})
    },
    campos: {
      type: Object,
      default: () => ({})
    },
    scope: {
      type: String,
      default: null
    }
  },
  data: () => ({
    picked_date: null,
    picked_time: null
  }),
  created() {
    Object.keys(this.campos).forEach(key => {
      if (this.campos[key].default_value !== undefined)
        this.item[key] = this.campos[key].default_value;
    });
  },
  methods: {
    getScope(key) {
      return this.scope ? `${this.scope}.${key}` : key;
    },
    timePicked(value, key) {
      this.item[key] = this.picked_time;
      value.time_picker = false;
      this.picked_time = null;
    },
    openTimePicker(value, key) {
      this.picked_date = this.item[key];
      value.date_picker = true;
    },
    datePicked(value, key) {
      this.item[key] = this.$functions.formatDateFromRequest(this.picked_date);
      value.date_picker = false;
      this.picked_date = null;
    },
    openDatePicker(value, key) {
      this.picked_date = this.$functions.formatDateToRequest(this.item[key]);
      value.date_picker = true;
    },
    getCocoMask(value) {
      if (value.date_picker !== undefined) return ['##/##/####'];
      if (value.coco) return value.coco;
      if (value.mask) return [value.mask];
      return null;
    }
  }
};
</script>
