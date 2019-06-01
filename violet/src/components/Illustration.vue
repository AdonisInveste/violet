<template>
    <b-container>
            <app-mission></app-mission>
            <!-- When user selects button, User should be navigated to the ThankYou interface. -->
            <b-button size="lg" variant="outline-primary" :to= " {name: 'customerForm'}"> Contact </b-button>
    </b-container>
</template>


<script>


import mission from  './Mission.vue'

export default {

            components: {
                'app-mission': mission
            }, 

            methods: {
                
            }
}
</script>


<style scoped>

</style>
