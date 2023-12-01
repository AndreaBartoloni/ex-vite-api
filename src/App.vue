<script>
import card from './components/card.vue'
import axios from 'axios';
import { store } from "./store.js"
import AppSearch from './components/AppSearch.vue'

export default{
  components: {
    card,
    AppSearch
  },
  data() {
    return {
      store //viene inizializzato come un dato del componente.
    }
  },
  mounted() {      
    this.listaBirre(); // viene richiamato al caricamento della pagina
	},
  methods: {
		listaBirre() {
			axios.get(this.store.apiUrl).then(risultato => { //viene effettuata una richiesta HTTP GET utilizzando Axios all'API specificata in this.store.apiUrl. Quando la richiesta ha successo, i dati ricevuti vengono assegnati a this.store.birre

        this.store.birre = risultato.data;
			});
		},
    cerca(){
      let indirizzo = `${this.store.apiUrl}?name=${this.store.searchString}`;
      axios.get(indirizzo).then(risultato => { //viene effettuata una richiesta HTTP GET utilizzando Axios all'API specificata in this.store.apiUrl. Quando la richiesta ha successo, i dati ricevuti vengono assegnati a this.store.birre

        console.log(risultato.data);
        this.store.birre = risultato.data;
			});
    }
	}
}
</script>

<template>
  <header>
    <AppSearch @search="cerca"/>
  </header>
  <main>
    
    <card v-for="(birra, index) in store.birre" :info="birra" :key="index"/>
  </main>

  <!-- :info="birra" è un modo di passare dati da un componente padre a un componente figlio in Vue.js. 
  In modo più semplice, potrebbe essere considerata come l'invio di informazioni da un posto all'altro. 
  Utilizzo :info="birra" per inviare la singola birra come dato al componente "card".-->
  
</template>

<style scoped>

</style>
