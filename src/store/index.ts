import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 1
  },
  getters: {
    getStateCount: (state: any): number => { return state.count + 1; }
  },
  mutations: {
    add: (state: any): number => { return state.count++; },
    reduce: (state: any): number => { return state.count--; },
    multi: (state: any, n: number): number => {
      let result = state.count * n;
      console.log("result = " + result);

      state.count = result;
      return result;
    }
  },
  actions: {
    multiAsync: (context: any, obj: any) => {
      context.commit("multi", obj);
    }

  },
  modules: {
  }
})
