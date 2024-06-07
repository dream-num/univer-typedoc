FROM node:18.17.0-alpine3.18
WORKDIR /app

ENV NEXT_TELEMETRY_DISABLED 1

COPY .next/standalone ./
COPY public /app/public
COPY .next/static /app/.next/static

EXPOSE 80

ENV PORT 80

ENV HOSTNAME="0.0.0.0"

CMD node server.js
