import { BaseEntity } from 'src/modules/common/entities/base.entity';
import { Course } from 'src/modules/course/entities/course.entity';
import { Subcategory } from 'src/modules/subcategory/entities/subcategory.entity';
import { Column, Entity, OneToMany, Unique } from 'typeorm';

@Entity()
@Unique(['name'])
export class Category extends BaseEntity {
  @Column({ type: 'text' })
  name: string;

  @OneToMany(() => Course, (course: Course) => course.category)
  courses: Course[];

  @OneToMany(
    () => Subcategory,
    (subcategory: Subcategory) => subcategory.category,
  )
  subcategories: Subcategory[];
}
