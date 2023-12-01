import { reactive } from 'vue'

export const store = reactive({
    apiUrl: "https://api.openbrewerydb.org/v1/breweries?by_country=poland&per_page=10",
    birre: [],
    searchString: "" // abbiamo spostato questa variabile qui cosi che possa vederlo anche il padre del componente AppSearch
});