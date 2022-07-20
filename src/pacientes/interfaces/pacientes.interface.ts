import { Document } from 'mongoose';

export interface Pacientes extends Document {
  readonly nombre: string;
  readonly apellido: string;
  readonly edad: number;
  readonly createdAt: Date;
}
