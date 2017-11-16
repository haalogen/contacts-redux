// A reducer makes the editing of state
// A reducer takes in two things:

// 1. The action (info about what happened)
// 2. Copy of current state


// Manages updating all the contacts
function contacts(state = {}, action) {
  console.log({state, action});

  switch (action.type) {
    case 'ADD_CONTACT': { // Parentheses are needed for creating local variables
      const newContacts = new Map(state.contacts); // Clone contacts
      newContacts.set(action.name, action.item);
      // Return the new state with new contact
      return newContacts;
    }

    case 'EDIT_CONTACT': { // Parentheses are needed for creating local variables
      const newContacts = new Map(state.contacts); // Clone contacts
      newContacts.delete(action.oldName);
      newContacts.set(action.newName, action.item);
      // Return the new state with edited contact
      return newContacts;
    }

    case 'REMOVE_CONTACT': { // Parentheses are needed for creating local variables
      const newContacts = new Map(state.contacts); // Clone contacts
      newContacts.delete(action.name);
      // Return the new state without the deleted contact
      return newContacts;
    }
    default:
      return state;
  }
  return state;
}

export default contacts;