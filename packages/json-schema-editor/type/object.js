const value = {
    description: null,
    maxProperties: null,
    minProperties: null
}
const attr = {
    description: {
      name: 'description',
      type: 'string',
    },
    maxProperties:{
        name:'maxProperties',
        type:'integer'
    },
    minProperties:{
        name:'minProperties',
        type:'integer'
    }
}
const wrapper = {value, attr}
export default wrapper