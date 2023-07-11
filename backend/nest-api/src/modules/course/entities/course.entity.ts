import { Category } from 'src/modules/category/entities/category.entity';
import { BaseEntity } from 'src/modules/common/entities/base.entity';
import { Section } from 'src/modules/section/entities/section.entity';
import { User } from 'src/modules/user/entities/user.entity';
import { Column, Entity, ManyToMany, ManyToOne, OneToMany } from 'typeorm';

@Entity()
export class Course extends BaseEntity {
  @ManyToOne(() => Course, (user: User) => user.createdCourses, { cascade: true })
  creator!: User;

  @Column({ type: 'text' })
  title!: string;

  @ManyToMany(() => Course, (user: User) => user.enrolledCourses, { nullable: true, cascade: true })
  enrolledUsers?: User[];

  @Column({ type: 'text', nullable: true })
  subtitle?: string;

  @Column({ type: 'text', nullable: true })
  description?: string;

  @Column({ type: 'text', nullable: true })
  price?: number;

  @ManyToOne(() => Category, (category: Category) => category.courses, { nullable: true, cascade: true })
  category?: Category;

  @OneToMany(() => Section, (section: Section) => section.course, { nullable: true })
  sections?: Section[];
}
