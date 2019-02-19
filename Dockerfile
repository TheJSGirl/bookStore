FROM node:11-alpine

RUN mkdir -p /app/src/

WORKDIR /app/src/

COPY . .

RUN npm install

RUN npm install -g nodemon

EXPOSE 3000

CMD ["npm", "run", "dev"]

