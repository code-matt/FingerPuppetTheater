const DEFAULT_STATE = [
  'https://2.bp.blogspot.com/-m2spxn5LIJg/VyJNSuwSK2I/AAAAAAAAGhk/htKFLq8eUbIc18atFbPfCINn8l_96rkmwCLcB/s1600/trumpFree_01.png',
  'http://orig12.deviantart.net/8539/f/2015/063/3/8/elsa_crying_png_by_astrogirl500-d8kd36k.png'
]

const puppets = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case 'SET_PUPPET_SUCCESS':
      return action.puppets
    default:
      return state
  }
}

export {
  puppets
}
