import { IsInt, IsNotEmpty, IsOptional, IsPositive, IsString } from 'class-validator';

export class ActualizarHorarioDto {
  @IsOptional() @IsInt() @IsPositive()
  claseId?: number;

  @IsOptional() @IsString() @IsNotEmpty()
  dia?: string;

  @IsOptional() @IsString() @IsNotEmpty()
  horaInicio?: string;

  @IsOptional() @IsInt() @IsPositive()
  cupoMaximo?: number;

  @IsOptional() @IsString() @IsNotEmpty()
  entrenador?: string;
}