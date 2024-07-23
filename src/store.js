import { proxy } from 'valtio'

 export const state = proxy({
    intro: true,
    colors: [ '#666665','#6B5636', '#422B08','#35330E', '#060707'],
    selectedColor: '#060707',
    
    
  })
  

  