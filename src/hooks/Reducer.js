const Reducer = (state, action) => {
  switch (action.type) {
    case 'SET_NAME':
      return {
        ...state,
        name: action.payload,
        changeCount: state.changeCount + 1,
      }
    case 'SET_SLIST':
      return {
        ...state,
        searchList: action.payload,
      }
    case 'SET_Movie':
      return {
        ...state,
        searchList: action.payload,
      }
  }
}

export default Reducer
