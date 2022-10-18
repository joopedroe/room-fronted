<template>
	<div class="container">
		<div class="heading" style="margin-bottom: 0px;">
			<!-- Heading title -->
			<span class="heading">
				<div>
					<h1>Vídeo conferência em qualquer lugar do mundo!</h1>
					<h3 class="grey--text">Crie salas públicas e privadas, se reuna com a família, colegas de trabalhos</h3>
				</div>
			</span><!-- End heading title -->
		</div>
		<div class="heading">
			<v-btn
				class="ma-2"
				color="success"
				@click.stop="dialog_new = true">
				Criar sala
			</v-btn>

			<v-btn
				class="ma-2"
				color="info"
				@click="dialog_login = true">
				Entrar
				<template v-slot:loader>
					<span class="custom-loader">
						<v-icon light>mdi-cached</v-icon>
					</span>
				</template>
			</v-btn>
		</div>
		<v-dialog v-model="dialog_new" max-width="290">
			<DialogNew @close_dialog="dialog_new=false" />
		</v-dialog>
		<v-dialog v-model="dialog_login" max-width="290">
			<DialogLogin @close_dialog="dialog_login=false" />
		</v-dialog>
	</div>
</template>
<script>
import DialogNew from './new-dialog.vue';
import DialogLogin from './login-dialog.vue';

export default {
  name: 'Main',
  components: { DialogNew, DialogLogin },
  data() {
    return {
      dialog_new: false,
      dialog_login: false,
      loader: null
    };
  },
  watch: {
    loader() {
      const l = this.loader;
      this[l] = !this[l];

      this.loader = null;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@Assets/css/settings.scss";
.container {
	margin-top: 10%;
}
.heading {
	align-items: center;
    justify-content: center;
	display: flex;
	flex-wrap: row;
	flex-direction: row;
}
.wrapper {
    background-color: rosybrown;
    height: 100%;

}

</style>
