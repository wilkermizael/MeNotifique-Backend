# Etapa de construção
FROM node:18-alpine AS builder
WORKDIR /app

# Copiar pacotes e instalar todas as dependências (incluindo devDependencies)
COPY package.json package-lock.json ./
RUN npm install

# Copiar o restante do código
COPY . .

# Gerar os arquivos TypeScript
RUN npm run build

# Gerar os arquivos necessários para o Prisma
RUN npx prisma generate

# Etapa final
FROM node:18-alpine
WORKDIR /app

# Copiar os arquivos compilados e as dependências instaladas
COPY --from=builder /app ./

# Expor a porta da API
EXPOSE 3000

# Rodar as migrações do Prisma antes de iniciar o servidor
CMD ["sh", "-c", "npx prisma migrate deploy && node dist/src/server.js"]
