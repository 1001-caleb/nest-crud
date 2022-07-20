import { Module } from '@nestjs/common';
import { PacientesService } from './pacientes.service';
import { PacientesController } from './pacientes.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PacienteSchema } from './schemas/pacientes.schema';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Pacientes', schema: PacienteSchema }]),
  ],
  controllers: [PacientesController],
  providers: [PacientesService],
})
export class PacientesModule {}
