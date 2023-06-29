import { Category } from 'src/modules/category/entities/category.entity';
import { BaseEntity } from 'src/modules/common/entities/base.entity';
import { Section } from 'src/modules/section/entities/section.entity';
import { User } from 'src/modules/user/entities/user.entity';
import { Column, Entity, ManyToMany, ManyToOne, OneToMany } from 'typeorm';

@Entity()
export class Course extends BaseEntity {
  @ManyToOne(() => Course, (user: User) => user.createdCourses)
  creator: User;

  @ManyToMany(() => Course, (user: User) => user.enrolledCourses)
  enrolledUsers: User[];

  @Column({ type: 'text' })
  title: string;

  @Column({ type: 'text' })
  subtitle: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'text' })
  price: number;

  @ManyToOne(() => Category, (category: Category) => category.courses)
  category: Category;

  @OneToMany(() => Section, (section: Section) => section.course)
  sections: Course;
}
