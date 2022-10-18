<template>
	<v-card>
		<v-card-title class="text-h1">
			<h2>
				Criar sala
			</h2>
		</v-card-title>
		<v-text-field v-model="name" color="purple darken-2" label="Nome da sala" required />
		<v-select v-model="type_selected" :items="types" color="purple darken-2" label="Tipo" />
		<v-card-actions>
			<v-btn color="error" @click="$emit('close_dialog')">
				Cancelar
			</v-btn>
			<v-btn color="success" @click="storeSearch">
				Criar
			</v-btn>
		</v-card-actions>
	</v-card>
</template>
<script>
import EnvironmentPresenter from '@Presenter/environment-presenter';

export default {
  name: 'DialogNew',
  data() {
    return {
      types: ['Privado', 'Publico'],
      type_selected: 'Privado',
      name: ''
    };
  },
  methods: {
    storeSearch() {
      const parms = {
        name: this.name,
        type: this.type_selected
      };
      EnvironmentPresenter.store(parms).then(
        response => {
          console.log(response);
          localStorage.user_id = response.data.user_identification;
		  const code = response.data.code;
		  this.$router.push({ name: 'Environment', params: { code } });
        }
      );
    }
  }
};
</script>
