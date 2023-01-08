import { Plant } from 'src/plants/entities/plant.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Category {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column({ unique: true })
  name: string;

  @OneToMany(() => Plant, (plant) => plant.category)
  plants: Plant[];
}
