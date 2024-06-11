FROM nginx:alpine
WORKDIR /app

RUN apk add --no-cache nodejs 

ENV NEXT_TELEMETRY_DISABLED 1

COPY .next/standalone ./
COPY public /app/public
COPY .next/static /app/.next/static

COPY nginx/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

ENV HOSTNAME="0.0.0.0"

CMD ["sh", "-c", "nginx -g 'daemon off;' & node server.js"]