FROM  node 
WORKDIR /app
ENV SERVER_NAME server_2
ADD . $SERVER_NAME
COPY ./package.json ./
RUN npm install 
COPY ./ ./
CMD ["npm","start"]

