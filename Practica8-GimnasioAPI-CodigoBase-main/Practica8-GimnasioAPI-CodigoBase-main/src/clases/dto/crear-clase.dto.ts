import { IsNotEmpty, IsString } from 'class-validator';

export class CrearClaseDto {
  @IsString()
  @IsNotEmpty()
  nombre!: string;
}