import { BaseEntity } from 'src/modules/common/entities/base.entity';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({
  name: 'user',
})
export class User extends BaseEntity {
  @PrimaryColumn({
    type: 'text',
    default: false,
  })
  username: string;

  @Column({
    type: 'text',
    default: false,
  })
  password: string;
}
