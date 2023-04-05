const value = {
    description: null,
    maxLength: null,
    minLength: null,
    pattern: null,
    format:undefined,
    enum:undefined
}
const attr = {
    description: {
      name: 'description',
      type: 'string',
    },
    maxLength:{
        name:'maxLength',
        type:'integer'
    },
    minLength:{
        name:'minLength',
        type:'integer'
    },
    pattern: {
        name: 'pattern',
        type:'string'
    },
    format: {
        name:'format',
        type:'array',
        enums:['date','date-time','email','hostname','ipv4','ipv6','uri']
    },
    enum:{
        name:'enum',
        type:'array'
    }
}
const wrapper = {value, attr}
export default wrapper