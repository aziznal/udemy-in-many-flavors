import { BaseEntity } from 'src/modules/common/entities/base.entity';
import { Course } from 'src/modules/course/entities/course.entity';
import { Column, Entity, ManyToMany, OneToMany, PrimaryColumn } from 'typeorm';

@Entity({
  name: 'user',
})
export class User extends BaseEntity {
  @PrimaryColumn({
    type: 'text',
  })
  email: string;

  @Column({
    type: 'text',
  })
  password: string;

  @Column({
    type: 'text',
  })
  fullname: string;

  @Column({
    type: 'boolean',
    default: false,
  })
  isInstructor: boolean;

  @OneToMany(() => User, (course: Course) => course.creator)
  createdCourses: Course[];

  @ManyToMany(() => User, (course: Course) => course.creator)
  enrolledCourses: Course[];
}
