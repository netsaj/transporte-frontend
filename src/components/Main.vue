<template>
  <q-drawer
    v-model="drawer"
    show-if-above
    :width="200"
    :breakpoint="500"
    bordered
    content-class="bg-grey-3"
  >
    <q-scroll-area class="fit">
      <q-list v-for="(menuItem, index) in menuList" :key="index">

        <q-item clickable :active="menuItem.label === 'Outbox'" @click="$router.push(menuItem.link)" v-ripple>
          <q-item-section avatar>
            <q-icon :name="menuItem.icon"/>
          </q-item-section>
          <q-item-section>
            {{ menuItem.label }}
          </q-item-section>
        </q-item>

        <q-separator v-if="menuItem.separator"/>

      </q-list>
    </q-scroll-area>
  </q-drawer>
</template>

<script>
  const menuList = [
    {
      icon: 'build',
      label: 'Combustibles',
      link: 'combustible',
      separator: true
    },
    {
      icon: 'build',
      label: 'Carrocerias',
      link: 'carrocerias',
      separator: true
    },
    {
      icon: 'build',
      label: 'Radios',
      link: 'radios',
      separator: true
    },
    {
      icon: 'build',
      label: 'Nivel',
      link: 'niveles',
      separator: true
    },
    {
      icon: 'work',
      label: 'Empresas',
      link: 'empresa',
      separator: true
    },
  ];

  export default {
    name: "Main",
    data() {
      return {
        drawer: true,
        menuList
      }
    }
  }
</script>

<style scoped>

</style>
