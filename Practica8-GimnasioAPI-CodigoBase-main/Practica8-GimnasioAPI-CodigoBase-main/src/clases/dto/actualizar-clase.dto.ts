import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class ActualizarClaseDto {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  nombre?: string;
}