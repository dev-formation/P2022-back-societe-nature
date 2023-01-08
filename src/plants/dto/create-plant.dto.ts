import { IsNotEmpty } from 'class-validator';

export class CreatePlantDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  unitprice_ati: number;

  @IsNotEmpty()
  quantity: number;

  @IsNotEmpty()
  rating: number;
}
