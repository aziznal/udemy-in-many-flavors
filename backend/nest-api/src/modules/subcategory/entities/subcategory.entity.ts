import { Category } from 'src/modules/category/entities/category.entity';
import { BaseEntity } from 'src/modules/common/entities/base.entity';
import { Column, Entity, ManyToOne, Unique } from 'typeorm';

@Entity()
@Unique(['name'])
export class Subcategory extends BaseEntity {
  @Column({ type: 'text' })
  name!: string;

  @ManyToOne(() => Category, (category: Category) => category.subcategories, { cascade: true })
  category!: Category;
}
