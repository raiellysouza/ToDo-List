# Usar Node.js como base
FROM node:18-alpine

# Definir o diretório de trabalho no container
WORKDIR /usr/src/app

# Copiar o arquivo package.json e package-lock.json primeiro
COPY package.json ./

# Instalar as dependências
RUN npm install

# Copiar o restante dos arquivos do projeto
COPY . .

# Expor a porta 3000
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "start"]
