from node:18 as build

 # Copy package json and install dependencies
COPY package.json .

RUN npm install

 # Build application
RUN npm run build

FROM nginx:18 as
 
# Copy build output
COPY --from=build/output /app/dist/

# Expose port
EXPOSE 3000

# Start production server
COMMAND ng serve -s /app/dist