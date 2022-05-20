//import axios from 'axios'

//const api = axios.create({
//    baseURL: 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdacxi%2Ccosmos%2Cterra-luna&vs_currencies=usd'
//    
//    ROTA que exibe os preços atuais de BTC, ETH, DACXI, ATOM e LUNA
//    https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdacxi&vs_currencies=brl
//    https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdacxi%2Ccosmos%2Cterra-luna&vs_currencies=usd
//})
//api()
//export default api
import { createStore } from 'vuex'

export default createStore({
  state: {
    coins: {}
  },
  mutations: {
    loadCoin(state, payload){
      state.coins = payload
    }
  },
  actions: {
    async GetCoin(context){
let data = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd');
let result = await data.json();
      context.commit('loadCoin', result)
    }
  },
  modules: {
  }
})
