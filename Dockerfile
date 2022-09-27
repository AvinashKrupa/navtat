# Stage-1
FROM node:16.1 as react-build
WORKDIR /app
COPY . ./
EXPOSE 3000
RUN npm dev
CMD ["npm", "run", "dev"]
