<template>
  <q-layout view="hHh lpR fFf">
    <NavBar page="Empresas"></NavBar>
    <Main></Main>
    <q-page-container>
      <div class="q-pa-md">
        <div class="row">
          <div class="col-6">
            <p class="text-h5">Empresas</p>
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
                              label-cancel="Cerrar" @save="updatedEmpresa(props.row)">
                  <q-input v-model="props.row.nombre" dense autofocus counter/>
                </q-popup-edit>
              </q-td>
              <q-td key="nit" :props="props">
                {{ props.row.nit }}
                <q-popup-edit v-model="props.row.nit" title="Editar nit" buttons label-set="Actualizar"
                              label-cancel="Cerrar" @save="updatedEmpresa(props.row)">
                  <q-input v-model="props.row.nit" dense autofocus counter/>
                </q-popup-edit>
              </q-td>
              <q-td key="representante_nombre" :props="props">
                {{ props.row.representante_nombre }}
                <q-popup-edit v-model="props.row.representante_nombre" title="Editar representante nombre" buttons label-set="Actualizar"
                              label-cancel="Cerrar" @save="updatedEmpresa(props.row)">
                  <q-input v-model="props.row.representante_nombre" dense autofocus counter/>
                </q-popup-edit>
              </q-td>
              <q-td key="representante_documento" :props="props">
                {{ props.row.representante_documento }}
                <q-popup-edit v-model="props.row.representante_documento" title="Editar representante documento" buttons label-set="Actualizar"
                              label-cancel="Cerrar" @save="updatedEmpresa(props.row)">
                  <q-input v-model="props.row.representante_documento" dense autofocus counter/>
                </q-popup-edit>
              </q-td>
              <q-td key="direccion" :props="props">
                {{ props.row.direccion }}
                <q-popup-edit v-model="props.row.direccion" title="Editar direccion" buttons label-set="Actualizar"
                              label-cancel="Cerrar" @save="updatedEmpresa(props.row)">
                  <q-input v-model="props.row.direccion" dense autofocus counter/>
                </q-popup-edit>
              </q-td>
              <q-td key="telefono" :props="props">
                {{ props.row.telefono }}
                <q-popup-edit v-model="props.row.telefono" title="Editar telefono" buttons label-set="Actualizar"
                              label-cancel="Cerrar" @save="updatedEmpresa(props.row)">
                  <q-input v-model="props.row.telefono" dense autofocus counter/>
                </q-popup-edit>
              </q-td>
              <q-td key="email" :props="props">
                {{ props.row.email }}
                <q-popup-edit v-model="props.row.email" title="Editar email" buttons label-set="Actualizar"
                              label-cancel="Cerrar" @save="updatedEmpresa(props.row)">
                  <q-input v-model="props.row.email" dense autofocus counter/>
                </q-popup-edit>
              </q-td>
              <q-td key="capacidad_generadora" :props="props">
                {{ props.row.capacidad_generadora }}
                <q-popup-edit v-model="props.row.capacidad_generadora" title="Editar capacidad generadora" buttons label-set="Actualizar"
                              label-cancel="Cerrar" @save="updatedEmpresa(props.row)">
                  <q-input v-model="props.row.capacidad_generadora" dense autofocus counter/>
                </q-popup-edit>
              </q-td>
              <q-td key="es_colectivo" :props="props">
                {{ props.row.es_colectivo === true ? 'SI':'NO' }}
                <q-popup-edit v-model="props.row.es_colectivo" title="Editar colectivo" buttons label-set="Actualizar"
                              label-cancel="Cerrar" @save="updatedEmpresa(props.row)">
                  <q-toggle
                    v-model="props.row.es_colectivo"
                    label="Colectivo"
                  />
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
          <div class="text-h6">Crear empresa</div>
          <q-space/>
          <q-btn icon="close" flat round dense v-close-popup/>
        </q-card-section>
        <div class="q-pa-md">
          <center>
            <q-form
              @submit="onEmpresa"
            >
              <q-input outlined v-model="empresa.name" label="Nombre"
                       :rules="[val => !!val || 'La url es requerida']"
              />
              <q-input outlined v-model="empresa.nit" label="Nit"
                       :rules="[val => !!val || 'nit requerido']"
              />
              <q-input outlined v-model="empresa.representante_nombre" label="Representante nombre"
                       :rules="[val => !!val || 'requerido']"
              />
              <q-input outlined v-model="empresa.representante_documento" label="Representante documento"
                       type="number"
                       :rules="[val => !!val || 'requerido']"
              />
              <q-input outlined v-model="empresa.direccion" label="Dirección"
                       :rules="[val => !!val || 'requerido']"
              />
              <q-input outlined v-model="empresa.telefono" label="Telefono"
                       :rules="[val => !!val || 'requerido']"
              />
              <q-input outlined v-model="empresa.email" label="Correo electronico"
                       :rules="[val => !!val || 'requerido']"
              />
              <q-input outlined v-model="empresa.capacidad_generadora" label="Capacidad generadora"
                       :rules="[val => !!val || 'requerido']"
              />
              <q-toggle
                v-model="empresa.es_colectivo"
                label="Colectivo"
              />
              <br>
              <br>
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
  import NavBar from "../components/NavBar";
  import Main from "../components/Main";

  const columns = [
    {name: 'name', align: 'left', label: 'Nombre', field: 'nombre'},
    {name: 'nit', align: 'left', label: 'Nit', field: 'nit'},
    {name: 'representante_nombre', align: 'left', label: 'Representante nombre', field: 'representante_nombre'},
    {name: 'representante_documento', align: 'left', label: 'representante Documento', field: 'representante_documento'},
    {name: 'direccion', align: 'left', label: 'direccion', field: 'direccion'},
    {name: 'telefono', align: 'left', label: 'telefono', field: 'telefono'},
    {name: 'email', align: 'left', label: 'Correo electronico', field: 'email'},
    {name: 'capacidad_generadora', align: 'left', label: 'capacidad generadora', field: 'capacidad_generadora'},
    {name: 'es_colectivo', align: 'left', label: 'colectivo', field: 'es_colectivo'},
  ];
  export default {
    name: "Empresa",
    components: {Main, NavBar},
    data() {
      return {
        create: false,
        empresa: {
          "nombre": null,
          "nit": null,
          "representante_nombre": null,
          representante_documento: null,
          "direccion": null,
          "telefono": null,
          "email": null,
          "capacidad_generadora": 1000,
          "es_colectivo": true
        },
        list: [],
        columns
      }
    },
    created() {
      this.getEmpresas();
    },
    methods: {
      getEmpresas() {
        const _this = this;
        _this.axios.get('standard/empresas', {})
          .then(function (response) {
            console.log(response);
            _this.list = response.data.items;
          })
          .catch(function (error) {
            console.log(error);
          });
      },
      updatedEmpresa(empresa) {
        console.log(empresa)
        const _this = this;
        _this.axios.put('standard/empresa', {
          "nombre": empresa.nombre,
          "nit": empresa.nit,
          "representante_nombre": empresa.representante_nombre,
          representante_documento: parseInt(empresa.representante_documento),
          "direccion": empresa.direccion,
          "telefono": parseInt(empresa.telefono),
          "email": empresa.email,
          "capacidad_generadora": empresa.capacidad_generadora,
          "es_colectivo": empresa.es_colectivo
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
      onEmpresa() {
        const _this = this;
        _this.axios.post('standard/empresa', {
          "nombre": _this.empresa.name,
          "nit": _this.empresa.nit,
          "representante_nombre": _this.empresa.representante_nombre,
          representante_documento: parseInt(_this.empresa.representante_documento),
          "direccion": _this.empresa.direccion,
          "telefono": parseInt(_this.empresa.telefono),
          "email": _this.empresa.email,
          "capacidad_generadora": _this.empresa.capacidad_generadora,
          "es_colectivo": _this.empresa.es_colectivo
        })
          .then(function (response) {
            console.log(response);
            _this.getEmpresas();
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
