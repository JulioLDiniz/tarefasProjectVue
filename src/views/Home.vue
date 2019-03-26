<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Bem vindo ao meu app Víu djey éss"/>
    <LembreteTable></LembreteTable>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import LembreteTable from '@/components/LembreteTable.vue';
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'home',
  components: {
    LembreteTable,
    HelloWorld
  }
}
</script>
