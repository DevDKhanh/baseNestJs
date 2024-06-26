import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'Account' })
export class Account {
  @ApiProperty()
  @PrimaryGeneratedColumn('increment')
  id: number;

  @ApiProperty()
  @Column({ type: 'nvarchar', length: 255, unique: true, nullable: false })
  username: string;

  @ApiProperty()
  @Column({ type: 'varchar', unique: true, nullable: false })
  password: string;

  @ApiProperty()
  @Column({ type: 'tinyint', unique: true, nullable: false, default: 0 })
  role: number;
}
