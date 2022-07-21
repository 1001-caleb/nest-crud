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

  async create(createPacienteDto: CreatePacienteDto) {
    const newPaciente = await new this.pacientesModel(createPacienteDto);
    return newPaciente.save();
  }
  async findAll() {
    const pacientes = await this.pacientesModel.find();
    return pacientes;
  }
  async findOne(_id: string) {
    const paciente = await this.pacientesModel.findById(_id);
    return paciente;
  }
  update(id: string, updatePacienteDto: UpdatePacienteDto) {
    const updatedPaciente = this.pacientesModel.findByIdAndUpdate(
      id,
      updatePacienteDto,
      { new: true },
    );
    return updatedPaciente;
  }
  remove(_id: any) {
    const deletedPaciente = this.pacientesModel.findOneAndRemove(_id);
    return deletedPaciente;
  }
}
