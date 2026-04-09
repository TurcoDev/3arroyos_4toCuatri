import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioController } from './app.controller';
import { UsuarioService } from './app.service';
import { User } from './entities/user.entity';
import { TelefonoController } from './telefono.controller';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT || '3306'),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [User],
      synchronize: true,
    }),

    TypeOrmModule.forFeature([User]),
  ],
  controllers: [UsuarioController, TelefonoController],
  providers: [UsuarioService],
})
export class AppModule {}
