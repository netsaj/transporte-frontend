<template>
  <div>
    <div id="q-app" v-if="$auth.ready()">
      <router-view/>
    </div>
    <div v-if="!$auth.ready()">
      Cargando......
    </div>
  </div>


</template>

<script>
  export default {
    name: 'App'
  }
</script>
