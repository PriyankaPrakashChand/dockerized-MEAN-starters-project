FROM node:18-slim as base

RUN mkdir /angular-ui
WORKDIR /angular-ui


from base as development
run echo "development env"


FROM base as production

COPY ["package.json", "./"]
RUN npm install
COPY . .
CMD ["npm", "start"]
