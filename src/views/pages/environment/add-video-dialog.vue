<template>
	<v-card>
		<v-card-title class="text-h1">
			<h2>
				Adicionar video
			</h2>
		</v-card-title>
		<v-text-field v-model="link" color="purple darken-2" label="Link" required />
		<v-card-actions>
			<v-btn color="error" @click="$emit('close_dialog')">
				Cancelar
			</v-btn>
			<v-btn color="info" @click="$emit('add_video', link)">
				Adicionar
			</v-btn>
		</v-card-actions>
	</v-card>
</template>
<script>

export default {
  name: 'DialogAdd',
  data() {
    return {
      link: ''
    };
  }
};
</script>
