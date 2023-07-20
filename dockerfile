FROM nginx:stable

ARG PORT=80

ENV REACT_APP_BASE_URL=http://server.deva.asia/


WORKDIR /app

COPY . .

RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && apt-get install -y nodejs && npm install && npm run build

RUN mkdir /var/www/ && cp -r build /var/www/ && cp portfolio.conf /etc/nginx/conf.d/

RUN rm /etc/nginx/conf.d/default.conf

EXPOSE $PORT

ENTRYPOINT  ["nginx", "-g", "daemon off;"]