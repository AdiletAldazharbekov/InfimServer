import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface BranchCreationAttrs {
  name: string;
}

@Table({ tableName: 'branchs' })
export class Branch extends Model<Branch, BranchCreationAttrs> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    defaultValue: 1,
  })
  adress_id: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    defaultValue: 1,
  })
  director_id: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    defaultValue: 1,
  })
  company_id: number;

  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  isActive: boolean;
}
