<template>
	<div class="heading-wrapper" style="margin-bottom: 0px;">
		<!-- Heading title -->
		<span class="heading">
			<div>
				<h1>{{ title }}</h1>
				<h3 v-if="subtitle" class="grey--text">{{ subtitle }}</h3>
			</div>
			<div class="conteudo-horizontal">
				<v-select
					v-if="select_opcao"
					v-model=" ordem_selecionada"
					class="select"
					:items="select_opcao"
					item-value="value"
					item-text="name"
					label="Ordenar"
					outlined />
				<v-btn v-if="btn_action" round small class="btn-fora-card primary ml-0 mb-0 mt-2 mr-4"
					color="primary" @click="$emit('action')">
					<v-icon small class="mr-2">{{ btn_icon }}</v-icon>
					{{ btn_action }}
				</v-btn>
				<v-btn v-if="btn_acao3" round small class="btn-fora-card primary ml-0 mb-0 mt-2 mr-4"
					color="success" @click="$emit('acao3')">
					<v-icon small class="mr-2">{{ btn_icone3 }}</v-icon>
					{{ btn_acao3 }}
				</v-btn>
				<slot v-else-if="!!this.$slots.btn_slot" name="btn_slot" />
				<v-tooltip v-if="btn_2_tooltip && btn_2_icone" top content-class="top">
					<v-btn slot="activator" round small icon class="ml-0 mb-0 mt-2 mr-4"
						:loading="btn_2_loading" @click="$emit('acao2')">
						<v-icon :style="btn_2_style" :color="btn_2_color">{{ btn_2_icone }}</v-icon>
					</v-btn>
					<span>{{ btn_2_tooltip }}</span>
				</v-tooltip>
				<v-btn v-else-if="btn_2_icone" round small icon class="ml-0 mb-0 mt-2 mr-4"
					@click="$emit('acao2')">
					<v-icon :style="btn_2_style" :color="btn_2_color">{{ btn_2_icone }}</v-icon>
				</v-btn>
				<v-checkbox v-if="switch_label" :value="switch_label" :label="switch_label"
					:class="['mt-1', switch_dois_label ? 'mr-4' : null]" hide-details
					:disabled="switch_disabled" @change="bool => $emit('check_changed', bool)" />
				<v-checkbox v-if="switch_dois_label" :value="switch_dois_value" :label="switch_dois_label" class="mt-1" hide-details
					@change="bool => $emit('check_two_changed', bool)" />
			</div>
		</span><!-- End heading title -->

		<!-- Heading buttons -->
		<span v-if="busca_label || !!!this.$slots.right_slot">
			<div class="conteudo-horizontal">
				<v-text-field v-if="busca_label" clearable :label="busca_label"
					:placeholder="busca_placeholder" append-icon="search" style="width: 230px" @input="b => $emit('busca', b)" />
				<h3 v-if="separador" class="ml-4">ou</h3>
				<v-text-field v-if="busca_label2" v-model="busca_valor" class="ml-4" clearable :label="busca_label2"
					:placeholder="busca_placeholder2" :append-icon="icon_busca2" style="width: 230px" @keyup.enter="$emit('enter',busca_valor)" />
			</div>
		</span><!-- End heading buttons -->
		<slot v-else name="right_slot" />
	</div><!-- End heading-wrapper -->
</template>

<script>
export default {
  name: 'Header',
  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      default: null
    },
    btn_icon: {
      type: String,
      default: 'add'
    },
    btn_action: {
      type: String,
      default: null
    },
    btn_icone3: {
      type: String,
      default: 'add'
    },
    btn_acao3: {
      type: String,
      default: null
    },
    btn_2_icone: {
      type: String,
      default: null
    },
    btn_2_tooltip: {
      type: String,
      default: null
    },
    btn_2_style: {
      type: String,
      default: ''
    },
    btn_2_color: {
      type: String,
      default: 'green'
    },
    btn_2_loading: {
      type: Boolean,
      default: false
    },
    busca_label: {
      type: String,
      default: null
    },
    busca_placeholder: {
      type: String,
      default: null
    },
    busca_label2: {
      type: String,
      default: null
    },
    busca_placeholder2: {
      type: String,
      default: null
    },
    icon_busca2: {
      type: String,
      default: 'search'
    },
    switch_label: {
      type: String,
      default: null
    },
    switch_disabled: {
      type: Boolean,
      default: false
    },
    switch_dois_label: {
      type: String,
      default: null
    },
    switch_value_props: {
      type: Boolean,
      default: false
    },
    switch_dois_value_props: {
      type: Boolean,
      default: false
    },
    select_opcao: {
      type: Array,
      default: null
    },
    separador: {
      type: String,
      default: null
    }
  },
  data: () => ({
    ordem_selecionada: 1,
    switch_value: false,
    busca_valor: '',
    switch_dois_value: false
  }),
  watch: {
    busca_valor: {
      handler(value) {
        if (value === null || value === '')
          this.$emit('limpar');
      },
      deep: true
    },
    ordem_selecionada: {
      handler(value) {
        this.$emit('ordenar', value);
      },
      deep: true
    }
  },
  created() {
    this.switch_value = this.switch_value_props;
    this.switch_dois_value = this.switch_dois_value_props;
  }
};
</script>

<style lang="scss" scoped>
.conteudo-horizontal {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.select{
	padding-top: 0;
	width: 150px;
	height: 40px;
	padding-right: 20px;
}
.heading {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: center;
  align-items: center;
}
</style>
