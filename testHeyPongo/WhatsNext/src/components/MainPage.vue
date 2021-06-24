<template>
  <div class="flex flex-col overflow-x-hidden">
    <div class=" z-10 my-10 w-screen h-20 bg-gray-800 flex flex-col items-center justify-center">
      <h1 class="text-white font-bold text-2xl">Whats Next</h1>
    </div>
    <span class="bg-red-600 transform rotate-45 w-16 h-screen -top-56 -left-16 z-0 absolute"></span>
    <span class="bg-red-600 transform rotate-45 w-2 h-screen -top-56 -left-28 z-0 absolute"></span>
    <div class="grid grid-cols-3 gap-4 gap-y-16 w-full 2xl:w-11/12 mx-auto my-10  md:grid-cols-2 ph:grid-cols-1">
      <template v-if="ourData">
        <infos v-for="(data, index) in ourData.businesses" :key="index" :infos="data" />
      </template>
      <div class="w-full flex absolute" v-else>
        <p class="m-auto">Votre page charge !</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Infos from './Infos.vue'

export default {
  name: 'MainPage',
  data(){
    return {
      ourData: undefined,
      api_code: '7-6At0Yd8L8u5nggqeMfID2BXppjxx7NS4FBBvH10AWWpA-WYKtef0K7C6J5xJzbF3l7SpfQsiLheAlk1z_TDwMHasqhSv_1-SSu1h5BUN09wM82HTtJTP2wWs_RYHYx',
      url_recherche: " http://localhost:8000/restaurants/"
    }
  },
  components: {
    'infos': Infos
  },
  created() {
        this.charge()
    },
  methods: {
    charge(){
      axios.get(this.url_recherche, {
      headers: {
        'content-type': 'application/json',
        "Access-Control-Allow-Origin": "http://localhost:8000/",
        'Authorization': `Bearer ${this.api_code}`
        }
      })
      .then(response => {
          this.ourData = response.data.jsonBody
      })
    }

  }
}
</script>

<style scoped>
</style>
