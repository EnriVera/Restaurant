FROM node:15.12.0
WORKDIR /user/src/app
COPY package.json /user/src/app
RUN npm install yarn
RUN yarn add package.json
COPY . /user/src/app
CMD [ "yarn", "start" ]