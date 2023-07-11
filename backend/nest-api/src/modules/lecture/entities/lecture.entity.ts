import { BaseEntity } from 'src/modules/common/entities/base.entity';
import { Section } from 'src/modules/section/entities/section.entity';
import { Column, Entity, ManyToOne } from 'typeorm';

@Entity()
export class Lecture extends BaseEntity {
  @Column({ type: 'text' })
  title!: string;

  @Column({ type: 'text' })
  description!: string;

  @ManyToOne(() => Section, (section: Section) => section.lectures, { cascade: true })
  section!: Section;
}
