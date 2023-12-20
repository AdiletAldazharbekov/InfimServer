import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Role } from './roles.model';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';

@Injectable()
export class RolesService {
  constructor(
    @InjectModel(Role)
    private model: typeof Role,
  ) {}

  async create(dto: CreateRoleDto) {
    const result = await this.model.create(dto);
    return result;
  }

  async getAll(): Promise<Role[]> {
    const result = await this.model.findAll();
    return result;
  }

  async getByValue(value: string): Promise<Role> {
    const result = await this.model.findOne({
      where: { value },
    });
    return result;
  }

  async remove(id: string): Promise<Role> {
    const result = await this.model.findOne({
      where: { id },
    });
    await result.destroy();
    return result;
  }

  //обновить данные
  async update(id: string, dto: UpdateRoleDto): Promise<Role> {
    const result = await this.model.findOne({
      where: { id },
    });
    await result.update(dto);
    return result;
  }
}
