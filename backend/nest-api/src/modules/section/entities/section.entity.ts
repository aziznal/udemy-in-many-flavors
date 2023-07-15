import { BaseEntity } from 'src/modules/common/entities/base.entity';
import { Course } from 'src/modules/course/entities/course.entity';
import { Lecture } from 'src/modules/lecture/entities/lecture.entity';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';

@Entity()
export class Section extends BaseEntity {
  @Column({ type: 'text' })
  title!: string;

  @Column({ type: 'text' })
  learningObjective!: string;

  @ManyToOne(() => Course, (course: Course) => course.sections, { cascade: true })
  course!: Course;

  @OneToMany(() => Lecture, (lecture: Lecture) => lecture.section, { nullable: true })
  lectures?: Lecture[];
}
