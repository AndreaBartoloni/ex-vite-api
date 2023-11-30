<script>
import card from './components/card.vue'
import axios from 'axios';
import { store } from "./store.js"

export default{
  components: {
    card
  },
  data() {
    return {
      store
    }
  },
  mounted() {
    this.listaBirre();
	},
  methods: {
		listaBirre() {
			axios.get(this.store.apiUrl).then(risultato => {
				// v. anche risultato.data.info 
				//this.store.birre = risultato.data.results;
        console.log(risultato)
			});
		},
	}
}
</script>

<template>

  <card/>
</template>

<style scoped>

</style>
