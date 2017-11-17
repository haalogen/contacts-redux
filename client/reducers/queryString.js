// A reducer makes the editing of state
// A reducer takes in two things:

// 1. The action (info about what happened)
// 2. Copy of current state


// Manages updating the queryString
// state === queryString
function queryString(state='', action) {
  switch (action.type) {
    case 'UPDATE_QUERY_STRING':
      return action.queryString
    default:
      return state;
  }

  return state;
}

export default queryString;