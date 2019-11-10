<template>
  <q-layout view="hHh lpR fFf">
    <NavBar page="Dashboard"></NavBar>
    <q-page-container>
      <div class="q-pa-md">
        <p class="text-h5">
          Bienvenido Juan Carlos Alvarez
        </p>
      </div>
    </q-page-container>
  </q-layout>
</template>

<script>
    import NavBar from "../components/NavBar";
    export default {
        name: "Home",
      components: {NavBar}
    }
</script>

<style scoped>

</style>
