export const addContact = (name, item) => {
  return {
    type: 'ADD_CONTACT',
    name,
    item
  }
}

export const editContact = (oldName, newName, item) => {
  return {
    type: 'EDIT_CONTACT',
    oldName,
    newName,
    item
  }
}

export const removeContact = (name) => {
  return {
    type: 'REMOVE_CONTACT',
    name
  }
}

export const updateQueryString = (queryString) => {
  return {
    type: 'UPDATE_QUERY_STRING',
    queryString
  }
}