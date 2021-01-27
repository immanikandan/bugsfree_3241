
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const romeSchema = new Schema({
   firstname: String,
   lastname: String
})

const romeModel = mongoose.model('rome', romeSchema, 'rome');
export default romeModel;
