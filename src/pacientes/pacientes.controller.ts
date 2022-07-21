import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { PacientesService } from './pacientes.service';
import { CreatePacienteDto } from './dto/create-paciente.dto';
import { UpdatePacienteDto } from './dto/update-paciente.dto';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('pacientes')
@Controller('pacientes')
export class PacientesController {
  constructor(private readonly pacientesService: PacientesService) {}

  @Post('/crear')
  async create(@Res() res, @Body() createPacienteDto: CreatePacienteDto) {
    const paciente = await this.pacientesService.create(createPacienteDto);
    return res.status(HttpStatus.OK).json({
      message: 'recived',
      paciente: paciente,
    });
  }

  @Get('/')
  async findAll() {
    return await this.pacientesService.findAll();
  }

  @Get(':_id')
  findOne(@Param('_id') _id: string) {
    return this.pacientesService.findOne(_id);
  }

  @Patch('/edit/:_id')
  update(
    @Param('_id') _id: string,
    @Body() updatePacienteDto: UpdatePacienteDto,
  ) {
    return this.pacientesService.update(_id, updatePacienteDto);
  }

  @Delete('/delete/:_id')
  remove(@Param('_id') _id: string) {
    return this.pacientesService.remove(_id);
  }
}
