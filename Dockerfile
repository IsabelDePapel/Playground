FROM node:8.12.0-stretch
LABEL maintainer=isuchanek@gmail.com

COPY package.json /opt/isabel_test/
COPY src /opt/isabel_test/src
WORKDIR /opt/isabel_test
RUN npm install && npm cache clean --force

# Add Tini
ENV TINI_VERSION v0.18.0
ADD https://github.com/krallin/tini/releases/download/${TINI_VERSION}/tini /usr/local/bin/tini
RUN chmod +x /usr/local/bin/tini
ENTRYPOINT ["tini", "--"]

CMD ["/usr/local/bin/node", "./src/app.js"]
