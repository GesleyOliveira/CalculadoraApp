import { sql } from '@vercel/postgres';
import bcrypt from 'bcrypt';

async function seed() {
  const email = 'admin@example.com';
  const plainPassword = 'admin123';
  const hashedPassword = await bcrypt.hash(plainPassword, 10);

  try {
    const result = await sql`
      INSERT INTO users (email, password)
      VALUES (${email}, ${hashedPassword});
    `;
    console.log('Usuário criado com sucesso:', result);
  } catch (err) {
    console.error('Erro ao criar usuário:', err);
  }
}

seed();
