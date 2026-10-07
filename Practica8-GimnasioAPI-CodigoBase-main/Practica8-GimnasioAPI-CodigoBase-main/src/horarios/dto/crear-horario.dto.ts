import { IsInt, IsNotEmpty, IsPositive, IsString } from 'class-validator';

export class CrearHorarioDto {
  @IsInt()
  @IsPositive()
  claseId!: number;

  @IsString()
  @IsNotEmpty()
  dia!: string;

  @IsString()
  @IsNotEmpty()
  horaInicio!: string;

  @IsInt()
  @IsPositive()
  cupoMaximo!: number;

  @IsString()
  @IsNotEmpty()
  entrenador!: string;
}