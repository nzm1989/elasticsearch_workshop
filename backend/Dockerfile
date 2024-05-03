FROM python:3.9-buster
COPY requirements.txt ./
RUN pip install -r requirements.txt
USER 1000:1000
RUN mkdir -p /tmp/app/
WORKDIR /tmp/app/
CMD python3 manage.py makemigrations && \
    python3 manage.py migrate && \
    python3 manage.py runserver 0.0.0.0:8000