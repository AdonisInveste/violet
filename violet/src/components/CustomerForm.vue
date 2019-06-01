<template>

<b-container>

        <b-form @submit.prevent="manageSubmit">

                <b-row class="mt-3">
                        <b-col>

                                <b-form-input
                                        id="input-a0"
                                            type="text"
                                        v-model="customers.firstName"
                                        placeholder="Enter first name"
                                ></b-form-input>

                        </b-col>


                        <b-col>

                            <b-form-input
                                    id="input-b0"
                                    type="text"
                                    v-model="customers.lastName"
                                    placeholder="Enter last number"
                                    ></b-form-input>


                        </b-col>


                </b-row>


                <b-row class="mt-3">
                        <b-col>

                                <b-form-input
                                        id="input-a0"
                                        v-model="customers.email"
                                        type="email"
                                        placeholder="Enter email"
                                ></b-form-input>

                        </b-col>


                        <b-col>

                            <b-form-input
                                    id="input-b0"
                                        type="text"
                                    v-model="customers.phoneNumber"
                                    placeholder="Enter phone number"
                                    ></b-form-input>


                        </b-col>


                </b-row>
        <b-row class="mt-3">

            <b-col>

                <b-button type="submit">Submit </b-button>

            </b-col>

        </b-row>

        </b-form>


</b-container>
    
</template>



<script>

import firebase from '../Firebase'
import router from '../router'


export default {


    data() {
        return {

            // ref:firebase.firestore().collecton('customers'),
            // customer: {},
            customers: {
                firstName: '',
                lastName: '',
                email: '',
                phoneNumber: ''
            }
        }
    },

    methods: {
        manageSubmit: function(event) {
            // event.preventDefault()

            // this.ref.add(this.customer).then( (docRef) => {
            //     this.board.firstName = ' '
            //     this.board.lastName = ' '
            //     this.board.email = ' '
            //     this.board.phoneNumber = ' '
            //     router.push({
            //         name: 'CustomerInformationTable'
            //         })

            // })
           
        }
    }

    
}
</script>




<style scoped>

</style>
