<template>
  <q-layout view="hHh lpR fFf">
    <NavBar page="Dashboard"></NavBar>
    <q-page-container>
      <div class="q-pa-md">
        <p class="text-h5">
          Bienvenido {{$auth.user().name}}
        </p>
      </div>
    </q-page-container>
  </q-layout>
</template>

<script>
  import NavBar from "../components/NavBar";

  export default {
    name: "Home",
    components: {NavBar},
    created() {
      this.user();
      this.optionsList();
    },
    methods: {
      user() {
        const _this = this;
        _this.axios.get('auth/user', {})
          .then(function (response) {
            console.log(response);
            _this.$auth.user(response.data);
          })
          .catch(function (error) {
            console.log(error);
          });
      },
      optionsList(){
        const _this = this;
        _this.axios.get('admin/settings/list', {})
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    }
  }
</script>

<style scoped>

</style>
