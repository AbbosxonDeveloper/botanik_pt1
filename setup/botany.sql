create database botanik;
/c

create extension pgcrypto;

create table if not exists admins (
    admin_id serial primary key,
    username varchar(32) not null,
    password varchar(60) not null
);

CREATE table if not exists categories(
    category_id serial primary key,
    category_name varchar(64) not null,
    status varchar(15) default 'active',
    created_at timestamp default current_timestamp
);

CREATE table if not exists products (
    product_id serial primary key,
    product_name varchar(64) not null,
    description text not null,
    count int not null,
    price decimal(12 , 2) not null,
    category_id int references categories(category_id),
    status varchar(15) default 'active',
    created_at timestamp default current_timestamp
);

CREATE table if not exists images (
    img_id serial primary key,
    image text not null,
    product_id int references products(product_id)
);

CREATE table if not exists news (
    news_id serial primary key,
    title varchar(255) not null,
    news_image text not null,
    description text not null,
    status varchar(15) default 'active',
    created_at timestamp default current_timestamp
);

CREATE table if not exists banner (
    banner_id serial primary key,
    banner_image text not null,
    status varchar(15) default 'active',
    created_at timestamp default current_timestamp
);