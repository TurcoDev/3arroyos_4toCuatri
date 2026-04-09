import { Controller, Get, Post, Delete, Put, Body, Param } from '@nestjs/common';
import { UsuarioService } from './app.service';
import { User } from './entities/user.entity';

@Controller('usuarios')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Get()
  getAll() {
    return this.usuarioService.findAll();
  }

  @Post()
  create(@Body() user: User) {
    return this.usuarioService.create(user);
  }

 

@Delete(':id')
deleteHelloController(@Param('id') id: number) {
  return this.usuarioService.remove(Number(id));
}

  @Put()
  update(@Body() user: User) {
    return this.usuarioService.update(user);
  }
}