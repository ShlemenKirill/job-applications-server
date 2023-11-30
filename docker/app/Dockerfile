FROM node:16-alpine

WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install && mv node_modules ../
#COPY prisma ./prisma/
RUN npm install
COPY . .
COPY .env.example .env
EXPOSE ${PORT}

CMD [ "npm", "run", "start:dev" ]
