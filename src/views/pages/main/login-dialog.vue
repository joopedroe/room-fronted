<template>
	<v-card>
		<v-card-title class="text-h1">
			<h2>
				Entrar na sala
			</h2>
		</v-card-title>
		<v-text-field v-model="code" color="purple darken-2" label="Código da sala" required />
		<v-text-field v-model="name" color="purple darken-2" label="Nome do usuário" required />
		<v-card-actions>
			<v-btn color="error" @click="$emit('close_dialog')">
				Cancelar
			</v-btn>
			<v-btn color="info" @click="loginRoom">
				Entrar
			</v-btn>
		</v-card-actions>
	</v-card>
</template>
<script>
import SocketioService from '@Services/socketio.service.js';
import EnvironmentPresenter from '@Presenter/environment-presenter';

export default {
  name: 'DialogNew',
  data() {
    return {
      code: '',
      name: '',
      socket: null
    };
  },
  created() {
    SocketioService.setupSocketConnection();
  },
  methods: {
    loginRoom() {
      EnvironmentPresenter.show(this.code).then(response => {
        if (response.data.length) {
          SocketioService.loginRoom(this.code, this.name);
          const code = response.data[0].code;
          this.$router.push({ name: 'Environment', params: { code } });
        } else
          window.alert('Codigo inválido');
      });
    }
  }
};
</script>
