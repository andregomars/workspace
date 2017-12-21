FROM nginx:1.12.2-alpine 
MAINTAINER andre shen

#VOLUME /var/www/html
RUN mkdir -p /var/www/html
#RUN chown -R www-data:www-data /var/www/html
#RUN chmod -R g+w .
WORKDIR /var/www/html

COPY nginx.conf /etc/nginx/conf.d/default.conf


