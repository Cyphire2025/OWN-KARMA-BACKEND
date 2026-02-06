FROM node:20-alpine

WORKDIR /app/medusa

COPY package.json .


RUN yarn install

COPY . .

RUN yarn build

EXPOSE 9000

CMD ["tail", "-f", "/dev/null"]
