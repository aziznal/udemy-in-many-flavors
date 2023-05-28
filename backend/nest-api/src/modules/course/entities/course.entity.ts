import { BaseEntity } from 'src/modules/common/entities/base.entity';
import { Column, Entity } from 'typeorm';

// TODO: add rest of properties once I figure out how foreign keys work

@Entity()
export class Course extends BaseEntity {
  @Column({ type: 'text', default: false })
  title: string;

  @Column({ type: 'text', default: false })
  subtitle: string;

  @Column({ type: 'text', default: false })
  description: string;
}
