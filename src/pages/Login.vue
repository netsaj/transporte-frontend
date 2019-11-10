<template>
  <div class="q-pa-md">
    <center>
      <div style="margin-top: 50px;max-width: 600px">
        <center><img src="statics/img/amc.png"></center>
        <q-form
          @submit="onLogin"
        >
          <q-input outlined v-model="email" type="email" label="Correo electrónico"
                   :rules="[val => !!val || 'Correo electrónico es requerido']"
          />
          <q-input outlined v-model="password" :type="isPwd ? 'password' : 'text'"
                   label="Contraseña"
                   :rules="[val => !!val || 'Contraseña es requerido']"
          />
          <center>
            <q-btn label="Iniciar sesión" to="home"/>
          </center>
        </q-form>
      </div>
      <div style="margin-top: 30px">
        <center><a href="#" style="color:#5580ff " @click="$router.push('requestPassword')">olvidaste tu contraseña?</a>
        </center>
      </div>
      <div class="logo-dev">
        <center>
          <img src="statics/img/intro.jpg" style="width: 200px;">
        </center>

      </div>
    </center>
  </div>
</template>

<script>
  export default {
    name: "Login",
    data() {
      return {
        email: null,
        password: null,
        isPwd: true,
      }
    },
    methods: {
      onLogin() {

      }
    }
  }
</script>

<style scoped>
.logo-dev{
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>
