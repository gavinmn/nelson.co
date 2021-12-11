FROM mhart/alpine-node:latest
ADD . /home/nelson
WORKDIR /home/nelson
RUN yarn
RUN yarn run build
EXPOSE 3000
CMD ["yarn", "run", "start"]