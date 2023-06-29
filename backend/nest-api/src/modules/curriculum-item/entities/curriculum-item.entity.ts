import { BaseEntity } from 'src/modules/common/entities/base.entity';
import { Section } from 'src/modules/section/entities/section.entity';
import { Column, Entity, ManyToOne, TableInheritance } from 'typeorm';

export enum CurriculumItemType {
  Lecture = 'lecture',
  Quiz = 'quiz',
  Assignment = 'assignment',
  codingExercise = 'coding-exercise',
}

// Setting the table this way will create a column named type in the table
// that will store the type of the entity.
// The type column will be an enum with the values of the CurriculumItemType enum.
@Entity()
@TableInheritance({
  column: {
    type: 'enum',
    enum: CurriculumItemType,
    name: 'type',
  },
})
export class CurriculumItem extends BaseEntity {
  @ManyToOne(() => Section, (section: Section) => section.curriculumItems)
  section!: Section;
}

@Entity()
export class Lecture extends CurriculumItem {
  @Column({ type: 'text' })
  title!: string;

  @Column({ type: 'text' })
  description!: string;
}
