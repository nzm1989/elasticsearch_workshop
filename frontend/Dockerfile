FROM node:16
RUN yarn global add @vue/cli
RUN apt-get update && apt-get -y install make gcc build-essential g++
USER 1000:1000
RUN mkdir -p /tmp/app
WORKDIR /tmp/app
CMD yarn && yarn serve