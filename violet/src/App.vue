<template>

  <div id="app">

    <customer-information></customer-information>

    
  </div>

</template>

<script>

import customers from  './components/CustomerForm.vue'
// import mission from  './components/Mission.vue'

export default {

  components: {
    'customer-information': customers,
    // 'app-mission': mission
  },
  data () {
    return {
      
    }
  }
}
</script>

<style>
</style>
