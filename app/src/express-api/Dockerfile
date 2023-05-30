# syntax=docker/dockerfile:1

FROM node:18-slim as base


RUN mkdir /express-api
WORKDIR /express-api



FROM base as development
RUN npm list


FROM base as production
# so that devDependancies are not installed from package.json
ENV NODE_ENV="production"  
COPY ["package.json","package-lock.json", "./"]
RUN npm install 
COPY ./ ./
RUN npx tsc
CMD ["node", "dist/app.js"]





