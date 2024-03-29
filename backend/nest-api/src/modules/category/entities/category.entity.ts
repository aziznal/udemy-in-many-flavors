import { BaseEntity } from 'src/modules/common/entities/base.entity';
import { Course } from 'src/modules/course/entities/course.entity';
import { Subcategory } from 'src/modules/subcategory/entities/subcategory.entity';
import { Column, Entity, OneToMany, Unique } from 'typeorm';

@Entity()
@Unique(['name'])
export class Category extends BaseEntity {
  @Column({ type: 'text' })
  name!: string;

  @OneToMany(() => Course, (course: Course) => course.category, { nullable: true })
  courses?: Course[];

  @OneToMany(() => Subcategory, (subcategory: Subcategory) => subcategory.parentCategory, {
    nullable: true,
  })
  subcategories?: Subcategory[];
}
