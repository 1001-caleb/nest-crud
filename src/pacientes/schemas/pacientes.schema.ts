import { Schema } from 'mongoose';

export const PacienteSchema = new Schema({
  name: {type: String, required: true},
  apellido: String,
  edad: Number,
  createdAt: {
    type: Date
    default: Date.now
  }
});
