<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  // created() {
  //   const vm = this;
  //   const api = `${process.env.API_DOMAINNAME}/api/${process.env.CUSTOM_PATH}/products`;
  //   vm.$http.get(api).then((response) => {
  //     // response.data
  //     console.log(response.data);
  //   });
  // },
};
</script>

<style lang="scss">
// @import "./assets/all";
// #app {
//   font-family: 'Avenir', Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
//   margin-top: 60px;
// }
</style>
