import { Schema } from 'mongoose';

export const PacienteSchema = new Schema({
  name: { type: String, required: true },
  apellido: String,
  edad: Number,
  identificacion: Number,
  nombre_acompañante: String,
  apellido_acompañante: String,
  edad_acompañante: Number,
  identificacion_acompañante: Number,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
