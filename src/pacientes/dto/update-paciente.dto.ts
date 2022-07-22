import { PartialType } from '@nestjs/mapped-types';
import { CreatePacienteDto } from './create-paciente.dto';

export class UpdatePacienteDto extends PartialType(CreatePacienteDto) {
  readonly name: string;
  readonly apellido: string;
  readonly edad: number;
  readonly identificacion: number;
  readonly nombre_acompañante?: string;
  readonly apellido_acompañante?: string;
  readonly edad_acompañante?: number;
  readonly identificacion_acompañante?: number;
  readonly createdAt: Date;
}
