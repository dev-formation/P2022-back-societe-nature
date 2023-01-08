import { IsNotEmpty } from 'class-validator';

export class UpdatePlantDto {
  @IsNotEmpty()
  unitprice_ati: number;

  @IsNotEmpty()
  quantity: number;

  @IsNotEmpty()
  rating: number;
}
