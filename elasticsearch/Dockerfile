FROM docker.elastic.co/elasticsearch/elasticsearch:7.11.1

RUN /usr/share/elasticsearch/bin/elasticsearch-plugin install --batch ingest-attachment

COPY elasticsearch.yml /usr/share/elasticsearch/config/elasticsearch.yml