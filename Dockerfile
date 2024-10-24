# Stage 1
FROM node:20-alpine

WORKDIR /dockerBuild

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]

# Stage 2
# FROM nginx:alpine

# WORKDIR /usr/share/nginx/html

# RUN rm -rf ./*

# COPY --from=build-stage /usr/app/build .

# ENTRYPOINT [ "nginx", "-g", "daemon off;" ]