const initialState = {
  count: 0,
}

const increment = (state = initialState, action) =>{
  switch(action.type){
    case 'INCREMENT': return {count: state.count+1}
    case 'DECREMENT': return {count: state.count-1}
    default : return {count: state.count}
  }
}

export default increment;