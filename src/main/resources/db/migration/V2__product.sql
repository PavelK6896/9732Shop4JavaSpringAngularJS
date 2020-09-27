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



create table img_file
(
    products_id   bigint not null,
    img_file_name varchar(255),
    foreign key (products_id) references products (id)
);


insert into img_file
    (products_id, img_file_name)
values (1, 'milk1.jpg'),
       (2, 'curd1.jpg'),
       (3, 'bread1.jpg'),
       (3, 'bread2.jpg'),
       (4, 'bread2.jpg'),
       (5, 'sausage1.jpg'),
       (6, 'frankfurter1.jpg');
