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
  },
  removeTask(state, index) {
    state.tasks.splice(index, 1)
  },
  changeStatus(state, { index, status }) {
    const task = state.tasks[index]
    task.status = status
  }
}

const actions: ActionTree<TaskState, RootState> = {
  addTask({ commit, state }, task: Task) {
    commit('addTask', task)
    localStorage.setItem('tasks', JSON.stringify(state.tasks))
  },
  removeTask({ commit, state }, index) {
    commit('removeTask', index)
    localStorage.setItem('tasks', JSON.stringify(state.tasks))
  },
  changeStatus({ commit, state }, payload) {
    commit('changeStatus', payload)
    localStorage.setItem('tasks', JSON.stringify(state.tasks))
  }
}

const task: Module<TaskState, RootState> = {
  state,
  mutations,
  actions
}

export default task
