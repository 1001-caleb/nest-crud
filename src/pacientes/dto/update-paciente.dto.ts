import { PartialType } from '@nestjs/mapped-types';
import { CreatePacienteDto } from './create-paciente.dto';

export class UpdatePacienteDto extends PartialType(CreatePacienteDto) {
  readonly name: string;
  readonly apellido: string;
  readonly edad: number;
  readonly createdAt: Date;
}
