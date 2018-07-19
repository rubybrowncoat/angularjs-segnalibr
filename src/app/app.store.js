class Store {
  constructor(reducer, initialState = {}) {
    this.reducer = reducer
    this.state = {
      ...initialState,
    }

    this.listeners = []
  }

  getState() {
    return this.state
  }

  dispatch(action) {
    this.state = this.reducer(this.state, action)

    // Run listeners
    this.listeners.forEach(listener => listener())
  }

  subscribe(listener) {
    this.listeners = [...this.listeners, listener]

    // Returns unsubscribe function
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener)
    }
  }
}

export default Store
