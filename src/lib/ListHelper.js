export const addListItem = (list, item, key = 'id') => {
  const index = list.findIndex(p => p[key] === item[key])
  if (index === -1) return [...list, item]
  return updateListItem(list, item, (key = 'id'))
}

export const updateListItem = (list, item, key = 'id') => {
  const index = list.findIndex(p => p[key] === item[key])
  if (index === -1) return list
  return [...list.slice(0, index), item, ...list.slice(index + 1)]
}

export const removeListItem = (list, item, key = 'id') => {
  return list.filter(p => p[key] !== item[key])
}
