import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'
import RootState from './RootState'
import modules from './modules'
import { state as taskState } from './modules/task'

Vue.use(Vuex)

const state: RootState = {
  task: taskState
}

const store: StoreOptions<RootState> = {
  state,
  modules
}
export default new Vuex.Store(store)
