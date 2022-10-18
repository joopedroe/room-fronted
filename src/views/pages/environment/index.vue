
<template>
	<div class="wrapper">
		<Header :title="`${room.name} - ${room.code}`" :subtitle="`${number_users} assistindo`" />
		<v-layout wrap>
			<v-flex xs8>
				<v-card class="video">
					<div v-if="video_selected">
						<object id="my-video" width="100%" height="460">
							<param name="movie" :value="video_url">
							<embed :src="video_url" width="425" height="350">
						</object>
					</div>
					<div v-else width="100%" class="wrapper_not_video" style="height: 470px;">
						<div>
							<v-icon :style="`color: #3d4060`" class="mb-2">
								{{ icon }}
							</v-icon>
							<h2 :style="`color: #3d4060`">
								Aguarde o video iniciar . . .
							</h2>
							<p :style="`color: rgba(0,0,0,0.87)`" />
						</div>
					</div>
					<v-card-actions />
				</v-card>
			</v-flex>
			<v-flex xs4>
				<v-card class="video">
					<div class="chat">
						<div class="chat_title">
							<h2>Chat</h2>
						</div>
						<span class="heading">
							<div v-for="action in actions">
								<div class="chat_title">
									<h4>{{ action }} entrou...</h4>
								</div>
							</div>
						</span>
					</div>
					<div class="chat_text">
						<v-layout>
							<v-flex xs12 style="padding-top: 0px;">
								<v-textarea
									class="ml-1"
									label=""
									rows="3"
									row-height="25" />
							</v-flex>
						</v-layout>
					</div>
					<v-card-actions />
				</v-card>
			</v-flex>
			<v-flex v-if="is_admin" xs8 class="footer">
				<v-btn
					color="primary"
					@click="dialog_add = true">
					Apresentar
				</v-btn>
			</v-flex>
		</v-layout>
		<v-dialog v-model="dialog_add" max-width="290">
			<DialogAdd @close_dialog="dialog_add=false" @add_video="add_video" />
		</v-dialog>
	</div>
</template>

<script>
import Header from '@Components/header';
import EnvironmentPresenter from '@Presenter/environment-presenter';
import SocketioService from '@Services/socketio.service.js';
import Ws from '@adonisjs/websocket-client';
import DialogAdd from './add-video-dialog.vue';


export default {
  name: 'Search',
  components: {
    Header,
    DialogAdd
  },
  data: () => ({
    search_text: '',
    dialog_add: false,
    loading: false,
    dialog_search: false,
    err: false,
    actions: ['Joao'],
    room: {},
    socket: null,
    chat: null,
    hidden: false,
    video_selected: false,
    video_url: '',
    autorization_login: false,
    number_users: 1
  }),
  computed: {
    is_admin() {
      return localStorage.user_id === this.room.user_identification;
    },
    autorization() {
      return !!this.autorization_login;
    }
  },

  created() {
    // SocketioService.setupSocketConnection();
    this.setupSocketConnection();
    this.indexEnvironment();
  },
  methods: {
    indexEnvironment() {
      const code = this.$route.params.code;
      EnvironmentPresenter.show(code).then(
        response => {
          this.room = response.data[0];
          if (this.is_admin)
            SocketioService.loginRoom(code, 'Admin');
        }
      );
    },
    async setupSocketConnection() {
      this.socket = await Ws('ws://localhost:3322', {
        path: 'adonis-ws'
      });
      this.socket.connect();
      this.chat = this.socket.subscribe('chat');
      this.chat.on('class', data => {
        this.autorization_login = true;
        this.number_users = data.room.length;
        this.actions.push(data.user);
      });

      this.chat.on('video_room', data => {
        this.video_selected = true;
        this.video_url = data.link;
      });
    },
    add_video(link) {
      this.chat.emit('add_video', { code: this.room.code, link: link });
      this.dialog_add = false;
    }
  }
};
</script>

<style scoped lang='scss'>
@import "@Assets/css/settings.scss";
.wrapper_not_video {
  background-color: rgb(213, 216, 214);
  border-radius: 5px ;
  height: 100%;
  padding: 12px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .v-icon {
    user-select: none;
    font-size: 48px !important;
  }
}
.chat_title{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.video{
  background-color: rgb(213, 216, 214);
  height: 500px;
}
.footer{
  align-content: center;
  justify-content: center;
  display: flex;
	flex-wrap: row;
	flex-direction: row;
  height: 80%;
}
.notvideo {
  background-color: rgb(213, 216, 214);
  align-content: center;
  justify-content: center;
  display: flex;
	flex-wrap: row;
	flex-direction: row;
  border-radius: 5px ;
}
.chat{
  height: 80%;
  background-color: rgb(213, 216, 214);
  border-radius: 10px;
}
.chat_text {
  height: 20%;
  margin-top: 0px;
  padding-top: 10px;
  background-color: rgb(213, 216, 214);
  border-radius: 10px;
}
.chat_textarea{
  height: 90;
}
textarea:focus, input:focus, select:focus {
    box-shadow: none;
    border: 0 none;
    outline: 0;
}

</style>
