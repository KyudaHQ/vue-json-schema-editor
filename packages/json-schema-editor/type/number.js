const value = {
    description: null,
    maximum: null,
    minimum: null,
    exclusiveMaximum:null,
    exclusiveMinimum:null,
    enum:[]
}
const attr = {
    description: {
      name: 'description',
      type: 'string',
    },
    maximum:{
        name:'maximum',
        type:'number'
    },
    minimum:{
        name:'minimum',
        type:'number'
    },
    exclusiveMaximum:{
        name:'exclusiveMaximum',
        type:'boolean'
    },
    exclusiveMinimum:{
        name:'exclusiveMinimum',
        type:'boolean'
    },
    enum:{
        name:'enum',
        type:'array'
    }
}
const wrapper = {value, attr}
export default wrapper