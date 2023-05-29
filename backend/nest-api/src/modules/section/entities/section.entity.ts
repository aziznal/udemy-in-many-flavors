import { BaseEntity } from 'src/modules/common/entities/base.entity';
import { Course } from 'src/modules/course/entities/course.entity';
import { CurriculumItem } from 'src/modules/curriculum-item/entities/curriculum-item.entity';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';

@Entity()
export class Section extends BaseEntity {
  @Column({ type: 'text' })
  title: string;

  @Column({ type: 'text' })
  learningObjective: string;

  @ManyToOne(() => Course, (course: Course) => course.sections)
  course: Course;

  @OneToMany(
    () => CurriculumItem,
    (curriculumItem: CurriculumItem) => curriculumItem.section,
  )
  curriculumItems: CurriculumItem[];
}
