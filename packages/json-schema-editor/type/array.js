const value = {
	description: null,
	minItems:null,
	maxItems:null,
	uniqueItems:false
}
const attr = {
	description: {
		name: 'description',
		type: 'string'
	},
	maxItems:{
		name: 'maxItems',
		type: 'integer'
	},
	minItems:{
		name: 'minItems',
		type: 'integer'
	},
	uniqueItems:{
		name:'uniqueItems',
		type: 'boolean'
	}
}
const wrapper = {value, attr}
export default wrapper