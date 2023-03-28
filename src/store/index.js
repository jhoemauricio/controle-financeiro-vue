import { createStore } from 'vuex'
//importa o modulo
import moduloLancamentos from './modules/Lancamentos';

export default createStore({
  //adiciona os modulos
  modules: {
    moduloLancamentos
  }
  // state: {
  // },
  // getters: {
  // },
  // mutations: {
  // },
  // actions: {
  // },
  // modules: {
  // }
});



