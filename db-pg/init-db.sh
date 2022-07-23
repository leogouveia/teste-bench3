#!/bin/bash
set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
    CREATE DATABASE db01;

EOSQL

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "db01" <<-EOSQL
    CREATE TABLE tb_clientes (
        id varchar(38) primary key,
        username varchar(100) not null,
        name varchar(250) not null,
        email varchar(250) not null,
        avatar varchar(500),
        password varchar(100),
        birthdate date,
        registered_at varchar(100)
    );

    COPY tb_clientes(id, username, name, email, avatar, password, birthdate, registered_at)
    FROM '/docker-entrypoint-initdb.d/data.csv'
    DELIMITER ','
    CSV HEADER;

EOSQL