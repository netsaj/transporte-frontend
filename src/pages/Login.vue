<template>
  <div class="q-pa-md">
    <center>
      <div style="margin-top: 50px;max-width: 600px">
        <center><img src="statics/img/amc.png"></center>
        <q-form
          @submit="onLogin"
        >
          <q-input outlined v-model="username" type="text" label="Usuario"
                   :rules="[val => !!val || 'El usuario es requerido']"
          />
          <q-input outlined v-model="password" :type="isPwd ? 'password' : 'text'"
                   label="Contraseña"
                   :rules="[val => !!val || 'Contraseña es requerido']"
          />
          <center>
            <q-btn label="Iniciar sesión" type="submit"/>
          </center>
        </q-form>
      </div>
      <div style="margin-top: 30px">
        <center><a href="#" style="color:#5580ff ">olvidaste tu contraseña?</a>
        </center>
        <br>
        <center><a href="#" style="color:#5580ff " @click="endpoint = true">Configurar endpoint</a>
        </center>
      </div>
      <div class="logo-dev">
        <center>
          <img src="statics/img/intro.jpg" style="width: 200px;">
        </center>
      </div>
    </center>
    <q-dialog v-model="endpoint">
      <q-card style="width: 70%">
        <q-card-section class="row items-center">
          <div class="text-h6">Url de endpoint</div>
          <q-space/>
          <q-btn icon="close" flat round dense v-close-popup/>
        </q-card-section>
        <div class="q-pa-md">
          <center>
            <q-form
              @submit="onEndpoint"
            >
              <q-input outlined v-model="url" label="Url endpoint"
                       :rules="[val => !!val || 'La url es requerida']"
              />
              <q-btn label="Guardar" type="submit" v-close-popup/>
            </q-form>
          </center>
        </div>
        <q-card-section>

        </q-card-section>
      </q-card>
    </q-dialog>

  </div>
</template>

<script>
  import Vue from "vue";

  export default {
    name: "Login",
    data() {
      return {
        username: 'admins',
        password: 'admins',
        isPwd: true,
        endpoint: false,
        url: null
      }
    },
    methods: {
      onLogin() {
        const _this = this;
        _this.axios.post('auth/login', {
          username: _this.username,
          password: _this.password
        })
          .then(function (response) {
            console.log(response);
            localStorage.setItem('default_auth_token', response.data.token);
            _this.$router.push('home');
          })
          .catch(function (error) {
            console.log(error);
          });
      },
      onEndpoint() {
        localStorage.setItem('endpoint', this.url);
        Vue.axios.defaults.baseURL = this.url;
      }
    }
  }
</script>

<style scoped>
  .logo-dev {
    position: fixed;
    bottom: 0;
    width: 100%;
  }
</style>
