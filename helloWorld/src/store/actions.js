export const addUser = ({ dispatch }, e) => {
  dispatch('ADD_USER', e)
}

export const editUser = ({ dispatch }, e) => {
  dispatch('EDIT_USER', e)
}

export const deleteUser = ({ dispatch }, e) => {
  dispatch('DELETE_USER', e)
}