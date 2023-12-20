import { Injectable } from '@nestjs/common';
import { CreateBranchDto } from './dto/create-branch.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Branch } from './branchs.model';
import { UpdateBranchDto } from './dto/update-branch.dto';

@Injectable()
export class BranchsService {
  constructor(
    @InjectModel(Branch)
    private model: typeof Branch,
  ) {}

  async create(dto: CreateBranchDto) {
    const result = await this.model.create(dto);
    return result;
  }

  async getAll(): Promise<Branch[]> {
    const result = await this.model.findAll();
    return result;
  }

  async getById(id: string): Promise<Branch> {
    const result = await this.model.findOne({
      where: { id },
    });
    return result;
  }

  async remove(id: string): Promise<Branch> {
    const result = await this.model.findOne({
      where: { id },
    });
    await result.destroy();
    return result;
  }

  //обновить данные
  async update(id: string, dto: UpdateBranchDto): Promise<Branch> {
    const result = await this.model.findOne({
      where: { id },
    });
    await result.update(dto);
    return result;
  }
}
