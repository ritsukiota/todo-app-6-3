import { defineConfig } from 'drizzle-kit';
import { config } from 'dotenv';

// .env.localを読み込み
config({ path: '.env.local' });

export default defineConfig({
  schema: './src/lib/schema.ts',
  out: './drizzle',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
