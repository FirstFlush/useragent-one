FROM node:22-slim

WORKDIR /app
COPY . .
RUN npm install && npm run build

EXPOSE 4173
CMD ["npm", "run", "preview"]
