export default async ({app, router, Vue}) => {
  Vue.router = router;
  Vue.use(require('@websanova/vue-auth'), {
    auth: require('@websanova/vue-auth/drivers/auth/bearer.js'),
    http: require('@websanova/vue-auth/drivers/http/axios.1.x'),
    router: require('@websanova/vue-auth/drivers/router/vue-router.2.x'),
    authRedirect: {path: '/'},
    refreshData: {enabled: false}
  });
}
