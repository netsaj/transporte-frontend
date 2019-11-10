<template>
  <q-header elevated class="text-white">
    <q-toolbar>
      <q-toolbar-title>
        {{page}}
      </q-toolbar-title>
      <q-btn flat round dense icon="drag_indicator" to="/" />
    </q-toolbar>
  </q-header>
</template>

<script>
  export default {
    name: "NavBar",
    props: ['page'],
  }
</script>

<style scoped>
.bg-back{
  background: linear-gradient(360deg, #FFB07B 0%, rgba(255, 255, 255, 0) 100%), #FF3C2B;
}

</style>
