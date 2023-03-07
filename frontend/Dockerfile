FROM node:16-alpine
WORKDIR /frontend/
COPY ./package.json ./package-lock.json ./
ENV PATH /frontend/node_modules/.bin:$PATH
RUN npm install
WORKDIR /frontend/app
COPY ./ .
RUN mkdir /frontend/app/.next -p
RUN chown -R node:node /frontend/app/.next
EXPOSE 3000
CMD ["npm", "run", "dev"]

