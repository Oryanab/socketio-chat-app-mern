FROM node:16

WORKDIR /backend

COPY package*.json /backend/

RUN npm install

COPY . .

EXPOSE 4000

CMD ["npm","run", "dev"]