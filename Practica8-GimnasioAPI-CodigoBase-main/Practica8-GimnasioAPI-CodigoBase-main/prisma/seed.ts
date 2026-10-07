import 'dotenv/config';
import { PrismaClient } from '../src/generado/prisma/client';
import { PrismaMariaDb } from '@prisma/adapter-mariadb';
import * as bcrypt from 'bcryptjs';

const url = new URL(process.env.DATABASE_URL!);

const adapter = new PrismaMariaDb({
  host: url.hostname,
  port: Number(url.port || 3306),
  user: decodeURIComponent(url.username),
  password: decodeURIComponent(url.password),
  database: url.pathname.replace(/^\//, ''),
  connectionLimit: 5,
});

const prisma = new PrismaClient({ adapter });

async function main() {
  await prisma.usuario.deleteMany();

  const passwordHash = await bcrypt.hash('gimnasio2026', 10);
  await prisma.usuario.createMany({
    data: [
      { correo: 'karla@itson.mx', passwordHash, rol: 'miembro', miembroId: 1 },
      { correo: 'ana@itson.mx', passwordHash, rol: 'entrenador' },
      { correo: 'admin@itson.mx', passwordHash, rol: 'admin' },
    ],
  });

  console.log('Usuarios sembrados correctamente.');
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });