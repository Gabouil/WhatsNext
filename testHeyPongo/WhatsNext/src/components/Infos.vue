<template>
    <div v-if="data"  class="m-auto relative items-center w-8/12 h-full bg-gray-800 text-white rounded p-4">
    <!-- section page d'acceuil -->
      <h2 class=" w-11/12 font-semibold my-2"  >{{ data.name }}</h2>
      <span class="w-24 h-28 overflow-hidden absolute -top-12 -right-12 rounded transition-transform transform hover:scale-150 bg-gray-900">
        <img class=" object-cover w-full h-full block rounded" :src="data.image_url" alt="">
      </span>
      <p>Adresse : {{ data.location.address1 }} {{ data.location.address2 }} {{ data.location.address3 }} {{ data.location.city }}</p>
      <p>Distance : {{infos.distance.toFixed()}} </p>
      <div class="grid grid-cols-2 gap-1">
        <p class="" >Catégories :</p>
        <ul>
          <li v-for="cat in data.categories" :key="cat">
            {{cat.title}}
          </li>
        </ul>
      </div>
      <p>prix : {{data.price}}</p>
      <div class="flex flex-row items-center" v-if="data.rating == 0"><p class="my-4">note : {{data.rating}}/5</p>     <div class="h-4 w-4 rounded-full mx-1 bg-white"></div><div class="h-4 w-4 rounded-full mx-1 bg-white"></div><div class="h-4 w-4 rounded-full mx-1 bg-white"></div><div class="h-4 w-4 rounded-full mx-1 bg-white"></div><div class="h-4 w-4 rounded-full mx-1 bg-white"></div></div>
      <div class="flex flex-row items-center" v-if="data.rating == 0.5"><p class="my-4">note : {{data.rating}}/5</p>     <div class="h-4 w-4 rounded-full mx-1 bg-gradient-to-r from-red-600 to-white"></div><div class="h-4 w-4 rounded-full mx-1 bg-white"></div><div class="h-4 w-4 rounded-full mx-1 bg-white"></div><div class="h-4 w-4 rounded-full mx-1 bg-white"></div><div class="h-4 w-4 rounded-full mx-1 bg-white"></div></div>
      <div class="flex flex-row items-center" v-else-if="data.rating == 1"><p class="my-4">note : {{data.rating}}/5</p><div class="h-4 w-4 rounded-full mx-1 bg-red-600"></div><div class="h-4 w-4 rounded-full mx-1 bg-white"></div><div class="h-4 w-4 rounded-full mx-1 bg-white"></div><div class="h-4 w-4 rounded-full mx-1 bg-white"></div><div class="h-4 w-4 rounded-full mx-1 bg-white"></div></div>
      <div class="flex flex-row items-center" v-else-if="data.rating == 1.5"><p class="my-4">note : {{data.rating}}/5</p><div class="h-4 w-4 rounded-full mx-1 bg-red-600"></div><div class="h-4 w-4 rounded-full mx-1 bg-gradient-to-r from-red-600 to-white"></div><div class="h-4 w-4 rounded-full mx-1 bg-white"></div><div class="h-4 w-4 rounded-full mx-1 bg-white"></div><div class="h-4 w-4 rounded-full mx-1 bg-white"></div></div>
      <div class="flex flex-row items-center" v-else-if="data.rating == 2"><p class="my-4">note : {{data.rating}}/5</p><div class="h-4 w-4 rounded-full mx-1 bg-red-600"></div><div class="h-4 w-4 rounded-full mx-1 bg-red-600"></div><div class="h-4 w-4 rounded-full mx-1 bg-white"></div><div class="h-4 w-4 rounded-full mx-1 bg-white"></div><div class="h-4 w-4 rounded-full mx-1 bg-white"></div></div>
      <div class="flex flex-row items-center" v-else-if="data.rating == 2.5"><p class="my-4">note : {{data.rating}}/5</p><div class="h-4 w-4 rounded-full mx-1 bg-red-600"></div><div class="h-4 w-4 rounded-full mx-1 bg-red-600"></div><div class="h-4 w-4 rounded-full mx-1 bg-gradient-to-r from-red-600 to-white"></div><div class="h-4 w-4 rounded-full mx-1 bg-white"></div><div class="h-4 w-4 rounded-full mx-1 bg-white"></div></div>
      <div class="flex flex-row items-center" v-else-if="data.rating == 3"><p class="my-4">note : {{data.rating}}/5</p><div class="h-4 w-4 rounded-full mx-1 bg-red-600"></div><div class="h-4 w-4 rounded-full mx-1 bg-red-600"></div><div class="h-4 w-4 rounded-full mx-1 bg-red-600"></div><div class="h-4 w-4 rounded-full mx-1 bg-white"></div><div class="h-4 w-4 rounded-full mx-1 bg-white"></div></div>
      <div class="flex flex-row items-center" v-else-if="data.rating == 3.5"><p class="my-4">note : {{data.rating}}/5</p><div class="h-4 w-4 rounded-full mx-1 bg-red-600"></div><div class="h-4 w-4 rounded-full mx-1 bg-red-600"></div><div class="h-4 w-4 rounded-full mx-1 bg-red-600"></div><div class="h-4 w-4 rounded-full mx-1 bg-gradient-to-r from-red-600 to-white"></div><div class="h-4 w-4 rounded-full mx-1 bg-white"></div></div>
      <div class="flex flex-row items-center" v-else-if="data.rating == 4"><p class="my-4">note : {{data.rating}}/5</p><div class="h-4 w-4 rounded-full mx-1 bg-red-600"></div><div class="h-4 w-4 rounded-full mx-1 bg-red-600"></div><div class="h-4 w-4 rounded-full mx-1 bg-red-600"></div><div class="h-4 w-4 rounded-full mx-1 bg-red-600"></div><div class="h-4 w-4 rounded-full mx-1 bg-white"></div></div>
      <div class="flex flex-row items-center" v-else-if="data.rating == 4.5"><p class="my-4">note : {{data.rating}}/5</p><div class="h-4 w-4 rounded-full mx-1 bg-red-600"></div><div class="h-4 w-4 rounded-full mx-1 bg-red-600"></div><div class="h-4 w-4 rounded-full mx-1 bg-red-600"></div><div class="h-4 w-4 rounded-full mx-1 bg-red-600"></div><div class="h-4 w-4 rounded-full mx-1 bg-gradient-to-r from-red-600 to-white"></div></div>
      <div class="flex flex-row items-center" v-else-if="data.rating == 5"><p class="my-4">note : {{data.rating}}/5</p><div class="h-4 w-4 rounded-full mx-1 bg-red-600"></div><div class="h-4 w-4 rounded-full mx-1 bg-red-600"></div><div class="h-4 w-4 rounded-full mx-1 bg-red-600"></div><div class="h-4 w-4 rounded-full mx-1 bg-red-600"></div><div class="h-4 w-4 rounded-full mx-1 bg-red-600"></div></div>
      <div class="w-full flex flex-row justify-around">
        <button class="self-center underline p-2 bg-gray-600 hover:bg-red-600 rounded-lg border-none" v-on:click="moreInfo = true" >Plus d'info</button>
        <a class="self-center underline p-2 bg-gray-600 hover:bg-red-600 rounded-lg" :href="data.url" target="_blank">Visiter le site</a>
      </div>


    <!-- section plus d'infos -->
      <div v-if="moreInfo" class="h-screen w-screen bg-gray-700 z-50 fixed top-0 left-0 overflow-y-scroll">
        <button class="absolute top-5 right-10" v-on:click="moreInfo = false">X</button>
        <div class="my-16 w-full flex bg-gray-500">
            <h2 class=" text-4xl font-bold my-2 m-auto"  >{{ data.name }}</h2>
        </div>
        <div class="flex justify-around mx-5">
          <p v-for="cat in data.categories" :key="cat">
            {{cat.title}}
          </p>
        </div>
        <div class="my-10 flex justify-around w-full h-3/5">
          <div class="w-4/5 ph:w-11/12 h-full overflow-hidden rounded bg-gray-900 relative">
            <img class="object-cover w-full h-full block rounded" :src="data.photos[imgCompteur]" alt="">
            <button class="hover:text-red-700 absolute border-none text-5xl top-1/2 -translate-y-1/2 right-5" v-on:click="carouselP">	→ </button>
            <button class="hover:text-red-700 absolute border-none text-5xl top-1/2 -translate-y-1/2 left-1" v-on:click="carouselM"> ← </button>
          </div>
        </div>
        <div class="flex justify-around w-full h-3/6 my-10">
          <div class=" grid grid-cols-2 ph:grid-cols-1 ph:grid-rows-2 h-full w-4/5 ph:gap-y-24 ">
              <div class="h-full text-xl flex flex-col justify-around ph:justify-between">
                  <p>prix : {{data.price}}</p>
                  <div class="flex flex-row items-center" v-if="data.rating == 0"><p>note : {{data.rating}}/5</p>     <div class="h-4 w-4 rounded-full mx-1 bg-white"></div><div class="h-4 w-4 rounded-full mx-1 bg-white"></div><div class="h-4 w-4 rounded-full mx-1 bg-white"></div><div class="h-4 w-4 rounded-full mx-1 bg-white"></div><div class="h-4 w-4 rounded-full mx-1 bg-white"></div><p class="mx-3">{{data.review_count}} avis</p></div>
                  <div class="flex flex-row items-center" v-if="data.rating == 0.5"><p>note : {{data.rating}}/5</p>     <div class="h-4 w-4 rounded-full mx-1 bg-gradient-to-r from-red-600 to-white"></div><div class="h-4 w-4 rounded-full mx-1 bg-white"></div><div class="h-4 w-4 rounded-full mx-1 bg-white"></div><div class="h-4 w-4 rounded-full mx-1 bg-white"></div><div class="h-4 w-4 rounded-full mx-1 bg-white"></div><p class="mx-3">{{data.review_count}} avis</p></div>
                  <div class="flex flex-row items-center" v-else-if="data.rating == 1"><p>note : {{data.rating}}/5</p><div class="h-4 w-4 rounded-full mx-1 bg-red-600"></div><div class="h-4 w-4 rounded-full mx-1 bg-white"></div><div class="h-4 w-4 rounded-full mx-1 bg-white"></div><div class="h-4 w-4 rounded-full mx-1 bg-white"></div><div class="h-4 w-4 rounded-full mx-1 bg-white"></div><p class="mx-3">{{data.review_count}} avis</p></div>
                  <div class="flex flex-row items-center" v-else-if="data.rating == 1.5"><p>note : {{data.rating}}/5</p><div class="h-4 w-4 rounded-full mx-1 bg-red-600"></div><div class="h-4 w-4 rounded-full mx-1 bg-gradient-to-r from-red-600 to-white"></div><div class="h-4 w-4 rounded-full mx-1 bg-white"></div><div class="h-4 w-4 rounded-full mx-1 bg-white"></div><div class="h-4 w-4 rounded-full mx-1 bg-white"></div><p class="mx-3">{{data.review_count}} avis</p></div>
                  <div class="flex flex-row items-center" v-else-if="data.rating == 2"><p>note : {{data.rating}}/5</p><div class="h-4 w-4 rounded-full mx-1 bg-red-600"></div><div class="h-4 w-4 rounded-full mx-1 bg-red-600"></div><div class="h-4 w-4 rounded-full mx-1 bg-white"></div><div class="h-4 w-4 rounded-full mx-1 bg-white"></div><div class="h-4 w-4 rounded-full mx-1 bg-white"></div><p class="mx-3">{{data.review_count}} avis</p></div>
                  <div class="flex flex-row items-center" v-else-if="data.rating == 2.5"><p>note : {{data.rating}}/5</p><div class="h-4 w-4 rounded-full mx-1 bg-red-600"></div><div class="h-4 w-4 rounded-full mx-1 bg-red-600"></div><div class="h-4 w-4 rounded-full mx-1 bg-gradient-to-r from-red-600 to-white"></div><div class="h-4 w-4 rounded-full mx-1 bg-white"></div><div class="h-4 w-4 rounded-full mx-1 bg-white"></div><p class="mx-3">{{data.review_count}} avis</p></div>
                  <div class="flex flex-row items-center" v-else-if="data.rating == 3"><p>note : {{data.rating}}/5</p><div class="h-4 w-4 rounded-full mx-1 bg-red-600"></div><div class="h-4 w-4 rounded-full mx-1 bg-red-600"></div><div class="h-4 w-4 rounded-full mx-1 bg-red-600"></div><div class="h-4 w-4 rounded-full mx-1 bg-white"></div><div class="h-4 w-4 rounded-full mx-1 bg-white"></div><p class="mx-3">{{data.review_count}} avis</p></div>
                  <div class="flex flex-row items-center" v-else-if="data.rating == 3.5"><p>note : {{data.rating}}/5</p><div class="h-4 w-4 rounded-full mx-1 bg-red-600"></div><div class="h-4 w-4 rounded-full mx-1 bg-red-600"></div><div class="h-4 w-4 rounded-full mx-1 bg-red-600"></div><div class="h-4 w-4 rounded-full mx-1 bg-gradient-to-r from-red-600 to-white"></div><div class="h-4 w-4 rounded-full mx-1 bg-white"></div><p class="mx-3">{{data.review_count}} avis</p></div>
                  <div class="flex flex-row items-center" v-else-if="data.rating == 4"><p>note : {{data.rating}}/5</p><div class="h-4 w-4 rounded-full mx-1 bg-red-600"></div><div class="h-4 w-4 rounded-full mx-1 bg-red-600"></div><div class="h-4 w-4 rounded-full mx-1 bg-red-600"></div><div class="h-4 w-4 rounded-full mx-1 bg-red-600"></div><div class="h-4 w-4 rounded-full mx-1 bg-white"></div><p class="mx-3">{{data.review_count}} avis</p></div>
                  <div class="flex flex-row items-center" v-else-if="data.rating == 4.5"><p>note : {{data.rating}}/5</p><div class="h-4 w-4 rounded-full mx-1 bg-red-600"></div><div class="h-4 w-4 rounded-full mx-1 bg-red-600"></div><div class="h-4 w-4 rounded-full mx-1 bg-red-600"></div><div class="h-4 w-4 rounded-full mx-1 bg-red-600"></div><div class="h-4 w-4 rounded-full mx-1 bg-gradient-to-r from-red-600 to-white"></div><p class="mx-3">{{data.review_count}} avis</p></div>
                  <div class="flex flex-row items-center" v-else-if="data.rating == 5"><p>note : {{data.rating}}/5</p><div class="h-4 w-4 rounded-full mx-1 bg-red-600"></div><div class="h-4 w-4 rounded-full mx-1 bg-red-600"></div><div class="h-4 w-4 rounded-full mx-1 bg-red-600"></div><div class="h-4 w-4 rounded-full mx-1 bg-red-600"></div><div class="h-4 w-4 rounded-full mx-1 bg-red-600"></div><p class="mx-3">{{data.review_count}} avis</p></div>
                  <br>
                  <p>Adresse : {{ data.location.address1 }} {{ data.location.address2 }} {{ data.location.address3 }} {{ data.location.city }}</p>
                  <p>Distance : {{infos.distance.toFixed()}} </p>
                  <br>
                  <p>Tél : {{data.phone}}</p>
                  <div class="w-full flex flex-row">
                    <a class="self-center underline p-2 bg-gray-600 hover:bg-red-600 rounded-lg" :href="data.url" target="_blank">Visiter le site</a>
                  </div>
              </div>
              <!-- je n'ai pas eu le temps de chercher à intégrer une vrai carte avec les coordonée dans l'api -->
              <div class="w-full h-full bg-white flex ph:mx-auto">
                <h1 class="text-black m-auto">Mape</h1>
              </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Infos',
  data(){
    return {
        moreInfo: false,
        data: undefined,
        imgCompteur : 0
    }
  },
  props: {
      infos: { type: Object, required: true }
  },
  beforeMount() {
    this.charge()
  },
  methods: {
    charge(){
      axios.get(`http://localhost:8000/restaurant/${this.infos.id}`, {
      headers: {
        'content-type': 'application/json',
        "Access-Control-Allow-Origin": "http://localhost:8000/",
        'Authorization': `Bearer 7-6At0Yd8L8u5nggqeMfID2BXppjxx7NS4FBBvH10AWWpA-WYKtef0K7C6J5xJzbF3l7SpfQsiLheAlk1z_TDwMHasqhSv_1-SSu1h5BUN09wM82HTtJTP2wWs_RYHYx`
        }
      })
      .then(response => {
          this.data = response.data
          console.log(this.data)
      })
    },
    carouselP(){
      this.imgCompteur ++
      if (this.imgCompteur >= this.data.photos.length) {
        this.imgCompteur = 0
      }
    },
    carouselM(){
      this.imgCompteur --
      if (this.imgCompteur < 0) {
        this.imgCompteur = (this.data.photos.length - 1)
      }
    }
  }
}
</script>

<style scoped>
</style>
