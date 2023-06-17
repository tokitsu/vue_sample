import { createStore } from 'vuex'

export default createStore({
  state: {
    count: 0,
    memos: []
  },
  getters: {
    getCount: (state) => {
      return state.memos.length
    },
    getAll: (state) => {
      return state.memos
    },
    getMemoById: (state) => (id) => {
      return state.memos.find(memo => memo.id === id)
    }
  },
  mutations: {
    save(state, newMemo) {
      if (newMemo.id) {
        let x = state.memos.find(memo => memo.id === newMemo.id)
        x.title = newMemo.title
        x.content = newMemo.content
      } else {
        newMemo.id = ++state.count
        state.memos.unshift(newMemo)
      }
    },
    delete (state, id) {
      state.memos = state.memos.filter(memo => memo.id !== id)
    }
  },
  actions: {
  },
  modules: {
  }
})
