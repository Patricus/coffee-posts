# Frontend
FROM node:latest AS frontend

WORKDIR /app/frontend

COPY frontend/package*.json ./
RUN npm install

COPY frontend .
RUN npm run build

# Backend
FROM node:latest AS backend

WORKDIR /app/backend

COPY backend/package*.json ./
RUN npm install

COPY backend .

# Final image
FROM node:latest

WORKDIR /app

COPY --from=frontend /app/frontend/.next ./frontend
COPY --from=backend /app/backend ./

EXPOSE 80
EXPOSE 8080

CMD ["npm", "run", "start"]
