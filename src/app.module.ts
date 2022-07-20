import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PacientesModule } from './pacientes/pacientes.module';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [
    PacientesModule,
    MongooseModule.forRoot(
      'mongodb+srv://parra:mrcaleb7@cluster0.nimcwh6.mongodb.net/?retryWrites=true&w=majority',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
