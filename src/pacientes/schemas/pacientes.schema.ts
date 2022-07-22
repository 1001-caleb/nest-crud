import { Schema } from 'mongoose';

export const PacienteSchema = new Schema({
  name: { type: String, required: true },
  apellido: String,
  edad: Number,
  identificacion: Number,
  nombre_acompanante: String,
  apellido_acompanante: String,
  edad_acompanante: Number,
  identificacion_acompanante: Number,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
