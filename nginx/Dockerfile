FROM nginx:1.21.6

COPY ./nginx.conf.template /etc/nginx/nginx.conf.template

CMD sh -c "envsubst '\$PORT' < /etc/nginx/nginx.conf.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"