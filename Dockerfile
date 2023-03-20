FROM node:lts-alpine
ENV NODE_ENV=development
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install -silent && mv node_modules ../
RUN npm install -g nodemon
COPY . .
EXPOSE 4000
RUN apk add --no-cache --upgrade bash
RUN chown -R node /usr/src/app
USER node
CMD ["npm", "run", "dev"]
