FROM node:16.18.1

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "run", "start"]