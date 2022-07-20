import { Injectable } from '@nestjs/common';
import { CreatePacienteDto } from './dto/create-paciente.dto';
import { UpdatePacienteDto } from './dto/update-paciente.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Pacientes } from './interfaces/pacientes.interface';

@Injectable()
export class PacientesService {
  constructor(
    @InjectModel('Pacientes') private readonly pacientesModel: Model<Pacientes>,
  ) {}

  create(createPacienteDto: CreatePacienteDto) {
    const newPaciente = new this.pacientesModel(createPacienteDto);
    return newPaciente.save();
  }
  findAll() {
    const pacientes = this.pacientesModel.find();
    return pacientes;
  }
  findOne(id: number) {
    const paciente = this.pacientesModel.findById(id);
    return paciente;
  }
  update(id: number, updatePacienteDto: UpdatePacienteDto) {
    const updatedPaciente = this.pacientesModel.findByIdAndUpdate(
      id,
      updatePacienteDto,
      { new: true },
    );
    return updatedPaciente;
  }
  remove(id: number) {
    const deletedPaciente = this.pacientesModel.findOneAndDelete(id);
    return deletedPaciente;
  }
}
