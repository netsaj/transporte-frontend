<template>
  <q-layout view="hHh lpR fFf">
    <NavBar page="Combustibles"></NavBar>
    <Main></Main>
    <q-page-container>
      <div class="q-pa-md">
        <div class="row">
          <div class="col-6">
            <p class="text-h5">Combustibles</p>
          </div>
          <div>
            <q-btn color="white" text-color="black" label="Crear" @click="create = true"/>
          </div>
        </div>
        <q-table
          :data="list"
          :columns="columns"
          title="Combustibles"
          :rows-per-page-options="[]"
          row-key="name"
        >
          <template v-slot:body="props">
            <q-tr :props="props">
              <q-td key="name" :props="props">
                {{ props.row.nombre }}
                <q-popup-edit v-model="props.row.nombre" title="Editar nombre" buttons label-set="Actualizar"
                              label-cancel="Cerrar" @save="updateCombustible(props.row.nombre, props.row.id)">
                  <q-input v-model="props.row.nombre" dense autofocus counter/>
                </q-popup-edit>
              </q-td>
            </q-tr>
          </template>
        </q-table>
      </div>
    </q-page-container>
    <q-dialog v-model="create">
      <q-card style="width: 70%">
        <q-card-section class="row items-center">
          <div class="text-h6">Crear combustible</div>
          <q-space/>
          <q-btn icon="close" flat round dense v-close-popup/>
        </q-card-section>
        <div class="q-pa-md">
          <center>
            <q-form
              @submit="onCombustible"
            >
              <q-input outlined v-model="combustible.name" label="Nombre"
                       :rules="[val => !!val || 'La url es requerida']"
              />
              <q-btn label="Crear" type="submit" v-close-popup/>
            </q-form>
          </center>
        </div>
        <q-card-section>

        </q-card-section>
      </q-card>
    </q-dialog>
  </q-layout>
</template>

<script>
  import NavBar from "../../components/NavBar";
  import Main from "../../components/Main";

  const columns = [
    {name: 'name', align: 'left', label: 'Nombre', field: 'nombre'},
  ];
  export default {
    name: "Combustible",
    components: {Main, NavBar},
    data() {
      return {
        create: false,
        combustible: {
          name: null
        },
        list: [],
        columns
      }
    },
    created() {
      this.getCombustible();
    },
    methods: {
      getCombustible() {
        const _this = this;
        _this.axios.get('standard/settings/list/combustibles', {})
          .then(function (response) {
            console.log(response);
            _this.list = response.data.items;
          })
          .catch(function (error) {
            console.log(error);
          });
      },
      updateCombustible(name, id) {
        const _this = this;
        _this.axios.put('admin/settings', {
          "resource": "combustibles",
          "values": {
            "id": id,
            "nombre": name
          }
        })
          .then(function (response) {
            console.log(response);
            _this.$q.notify({
              message: 'Actualizado',
              color: 'green'
            })
          })
          .catch(function (error) {
            console.log(error);
            _this.$q.notify({
              message: 'Error general',
              color: 'red'
            })
          });
      },
      onCombustible() {
        const _this = this;
        _this.axios.post('admin/settings', {
          "resource": "combustibles",
          "values": {
            "nombre": _this.combustible.name
          }
        })
          .then(function (response) {
            console.log(response);
            _this.getCombustible();
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
