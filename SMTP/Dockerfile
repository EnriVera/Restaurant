FROM node:15.12.0
WORKDIR /smtp
COPY package.json /smtp
RUN npm install yarn
RUN yarn add package.json
COPY . /smtp
CMD [ "yarn", "dev" ]