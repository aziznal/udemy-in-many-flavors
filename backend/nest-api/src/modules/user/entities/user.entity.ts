import { BaseEntity } from 'src/modules/common/entities/base.entity';
import { Course } from 'src/modules/course/entities/course.entity';
import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';

@Entity({
  name: 'user',
})
export class User extends BaseEntity {
  @PrimaryColumn({
    type: 'text',
  })
  username: string;

  @Column({
    type: 'text',
  })
  password: string;

  @OneToMany(() => User, (course: Course) => course.user)
  courses: Course;
}
