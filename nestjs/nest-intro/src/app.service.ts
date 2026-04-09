import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  // GET
  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  // POST
  async create(user: User): Promise<User> {
    return this.usersRepository.save(user);
  }

  // DELETE
  async remove(id: number): Promise<string> {
    const result = await this.usersRepository.delete(id);

    if (result.affected === 0) {
      return 'Usuario no encontrado';
    }

    return 'Usuario eliminado';
  }

  // PUT
 async update(updateUser: User): Promise<string> {
  const user = await this.usersRepository.findOneBy({ id: updateUser.id });

  if (!user) {
    return 'Usuario no encontrado!';
  }

  await this.usersRepository.update(updateUser.id, updateUser);

  return 'Usuario actualizado correctamente!';
}
}