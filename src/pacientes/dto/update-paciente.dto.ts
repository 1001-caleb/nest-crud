import { PartialType } from '@nestjs/mapped-types';
import { CreatePacienteDto } from './create-paciente.dto';

export class UpdatePacienteDto extends PartialType(CreatePacienteDto) {
  readonly name: string;
  readonly apellido: string;
  readonly edad: number;
  readonly identificacion: number;
  readonly nombre_acompanante?: string;
  readonly apellido_acompanante?: string;
  readonly edad_acompanante?: number;
  readonly identificacion_acompanante?: number;
  readonly createdAt: Date;
}
