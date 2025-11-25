FROM node:22.17.0-alpine3.21

WORKDIR /opt/apps/nest

COPY package.json ./
COPY yarn.lock ./

RUN yarn

COPY . .

# RUN npx prisma generate

ENTRYPOINT ["yarn", "run", "start:dev"]