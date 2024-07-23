# car-repair-workshop

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```


Environment File (.env)
DATABASE_URL="postgresql://postgres.okllueudqgjiitleqkkz:[YOUR-PASSWORD]@aws-0-ap-southeast-1.pooler.supabase.com:5432/postgres"


Prisma Command

Db Pull
```bash
npx prisma db pull
```

Generate
```bash
npx prisma generate
```

Migrate
```bash
bun prisma migrate dev --name init
```

This project was created using `bun init` in bun v1.1.6. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
