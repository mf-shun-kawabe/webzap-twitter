FROM node:22.17.0-alpine3.21 AS dependencies
WORKDIR /web
COPY package.json yarn.lock ./
RUN yarn install --production

FROM node:22.17.0-alpine3.21 AS builder
WORKDIR /web
COPY package.json yarn.lock ./
RUN yarn install
COPY next.config.ts ./
COPY . .
RUN yarn build

FROM node:22.17.0-alpine3.21 AS runner
WORKDIR /web
COPY --from=dependencies /web/node_modules ./node_modules
COPY --from=builder /web/.next ./.next
COPY package.json yarn.lock ./

CMD [ "yarn", "start" ]

FROM node:22.17.0-alpine3.21 AS dev-server
WORKDIR /web
COPY package.json yarn.lock ./
RUN yarn install
COPY . .

CMD [ "yarn", "dev" ]
