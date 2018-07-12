import { Module, MutationTree, ActionTree } from 'vuex'
import { Task } from 'vue-ts-core'
import RootState from '../RootState'

export interface TaskState {
  tasks: Task[]
}

export const state: TaskState = {
  tasks: JSON.parse(localStorage.getItem('tasks') || '[]')
}

const mutations: MutationTree<TaskState> = {
  addTask(state, task: Task) {
    state.tasks.push(task)
  }
}

const actions: ActionTree<TaskState, RootState> = {
  addTask({ commit, state }, task: Task) {
    commit('addTask', task)
    localStorage.setItem('tasks', JSON.stringify(state.tasks))
  }
}

const task: Module<TaskState, RootState> = {
  state,
  mutations,
  actions
}

export default task
