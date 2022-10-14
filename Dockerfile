FROM node:16-alpine as builder

# build backend
RUN mkdir /server
WORKDIR /server

ADD server .

RUN yarn && yarn build

# build frontend
RUN mkdir /frontend
WORKDIR /frontend

ADD client .

RUN yarn && yarn build


FROM node:16-alpine

RUN mkdir /app
WORKDIR /app

ADD server/package.json .
ADD server/yarn.lock .

COPY --from=builder /server/build/ .


RUN mkdir public
COPY --from=builder /frontend/build/ ./public

RUN yarn

CMD [ "node", "index.js" ]
