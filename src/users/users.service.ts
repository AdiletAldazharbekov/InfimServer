import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './users.model';
import { UpdateUserDto } from './dto/update-user.dto';
import { RolesService } from 'src/roles/roles.service';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
    private roleService: RolesService,
  ) {}

  async createUser(newUser: CreateUserDto) {
    const user = await this.userModel.create(newUser);
    const role = await this.roleService.getByValue('user');
    await user.$set('roles', [role.id]);
    return user;
  }

  async getAllUsers(): Promise<User[]> {
    const users = await this.userModel.findAll({ include: { all: true } });
    return users;
  }

  async getById(id: string): Promise<User> {
    const user = await this.userModel.findOne({
      where: { id },
    });
    return user;
  }

  async findOne(login: string): Promise<User | undefined> {
    const users = await this.getAllUsers();
    return users.find((user) => user.login === login);
  }

  async remove(id: string): Promise<User> {
    const user = await this.userModel.findOne({
      where: { id },
    });
    await user.destroy();
    return user;
  }

  //обновить данные
  async updateUser(id: string, newUser: UpdateUserDto): Promise<User> {
    const user = await this.userModel.findOne({
      where: { id },
    });
    await user.update(newUser);
    return user;
  }
}
