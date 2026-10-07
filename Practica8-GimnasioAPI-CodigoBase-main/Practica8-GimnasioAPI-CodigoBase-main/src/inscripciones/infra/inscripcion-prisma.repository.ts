import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Horario, Inscripcion, Miembro, NuevaInscripcion } from '../dominio/entidades';
import { InscripcionRepository } from '../dominio/inscripcion.repository';

@Injectable()
export class InscripcionPrismaRepository implements InscripcionRepository {
  constructor(private readonly prisma: PrismaService) {}

  private aInscripcion(fila: {
    id: number;
    horarioId: number;
    miembroId: number;
    estado: string;
    creandoEn: Date;
  }): Inscripcion {
    return {
      id: fila.id,
      horarioId: fila.horarioId,
      miembroId: fila.miembroId,
      estado: fila.estado as Inscripcion['estado'],
      creadaEn: fila.creandoEn,
    };
  }

  async listar(): Promise<Inscripcion[]> {
    const filas = await this.prisma.inscripcion.findMany();
    return filas.map((f) => this.aInscripcion(f));
  }

  async buscarPorId(id: number): Promise<Inscripcion | null> {
    const fila = await this.prisma.inscripcion.findUnique({ where: { id } });
    return fila ? this.aInscripcion(fila) : null;
  }

  async buscarPorHorario(horarioId: number): Promise<Inscripcion[]> {
    const filas = await this.prisma.inscripcion.findMany({ where: { horarioId } });
    return filas.map((f) => this.aInscripcion(f));
  }

  async buscarHorario(horarioId: number): Promise<Horario | null> {
    return this.prisma.horario.findUnique({ where: { id: horarioId } });
  }

  async buscarMiembro(miembroId: number): Promise<Miembro | null> {
    return this.prisma.miembro.findUnique({ where: { id: miembroId } });
  }

  async guardar(datos: NuevaInscripcion): Promise<Inscripcion> {
    const fila = await this.prisma.inscripcion.create({
      data: {
        horarioId: datos.horarioId,
        miembroId: datos.miembroId,
        estado: 'confirmada',
      },
    });
    return this.aInscripcion(fila);
  }

  async cancelar(id: number): Promise<Inscripcion | null> {
    try {
      const fila = await this.prisma.inscripcion.update({
        where: { id },
        data: { estado: 'cancelada' },
      });
      return this.aInscripcion(fila);
    } catch {
      return null;
    }
  }
}