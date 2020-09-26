create table products
(
    id          bigserial,
    title       varchar(255),
    description varchar(5000),
    price       numeric(8, 2),
    primary key (id)
);


insert into products (title, description, price)
values ('Milk', 'fresh milk', 70.0),
       ('Curd', 'fatness 5%', 80.0),
       ('Bread', 'black bread', 100.0),
       ('Bread', 'white bread', 100.0),
       ('Sausage', 'pork sausage', 100.0),
       ('Frankfurter', 'pork frankfurter', 100.0);

create table categories
(
    id    bigserial,
    title varchar(255),
    primary key (id)
);
insert into categories (title)
values ('Dairy'),
       ('Breads'),
       ('Meaty');

create table products_categories
(
    product_id  bigint not null,
    category_id bigint not null,
    primary key (product_id, category_id),
    foreign key (product_id) references products (id),
    foreign key (category_id) references categories (id)
);
insert into products_categories (product_id, category_id)
values (1, 1),
       (2, 1),
       (3, 2),
       (4, 2),
       (5, 3),
       (6, 3);

