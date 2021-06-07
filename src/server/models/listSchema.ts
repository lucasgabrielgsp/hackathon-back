import {model, Schema} from 'mongoose';


const listSchema = new Schema({
    title:{
        type:String,
        required:true,
        unique:true,
    },
    username:{
        type:String,
        required:true
    },
    itens:{
        type:[],
    }
})

export default model('List', listSchema)