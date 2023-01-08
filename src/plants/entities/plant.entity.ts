import { Category } from 'src/categories/entities/category.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Plant {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column()
  name: string;

  @Column({ type: 'float' })
  unitprice_ati: number;

  @Column()
  quantity: number;

  @Column()
  rating: number;

  @Column({ nullable: true })
  url_picture: string;

  @ManyToOne(() => Category, (category) => category.plants, { eager: true })
  category: Category;
}
