<template>
  <div class="index-wrap">
    <h1>{{folderPath}}</h1>
  </div>
</template>

<script>
export default {
  async fetch({store}){
      await store.dispatch('shared/testVDS')

  },
  computed: {
    folderPath: function (){
      return this.$store.getters['shared/testVDS']
    },
  }
}
</script>

<style scoped>
h1{
  color: #fff;
  font-family: roboto;
  text-align: center;
  padding-top: 50px;
}
.index-wrap{
  height: 100%;
  background-image: url(https://api.fermka.ru/rsk/files/img/home-midfield.jpg);
}

</style>
