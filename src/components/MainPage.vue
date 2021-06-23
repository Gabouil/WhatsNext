<template>
  <div class="container mx-auto px-5">
    <h1 class="">hello world</h1>
    <button v-on:click="charge()">click on me</button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'MainPage',
  data(){
    return {
      requete: '',
      api_code: '7-6At0Yd8L8u5nggqeMfID2BXppjxx7NS4FBBvH10AWWpA-WYKtef0K7C6J5xJzbF3l7SpfQsiLheAlk1z_TDwMHasqhSv_1-SSu1h5BUN09wM82HTtJTP2wWs_RYHYx',
      url_recherche: "https://api.yelp.com/v3/businesses/search?location='7th Ave, New York, NY 10018'&radius=1000"
    }
  },
  methods: {
    charge(){
      axios.get(this.url_recherche, {
      headers: {
        "Access-Control-Allow-Origin": "htttps://api.yelp.com",
        'Authorization': `Bearer ${this.api_code}`
        }
      })
      .then(response => {
          console.log(response)
      })
    }
  }
}
</script>

<style scoped>
</style>
