create table products
(
    id          bigserial,
    title       varchar(255),
    description varchar(5000),
    price       numeric(8, 2),
    primary key (id)
);


insert into products (title, description, price)
values ('Cheese', 'Fresh cheese', 70.0),
       ('Milk', 'Fresh milk', 80.0),
       ('Apples', 'Fresh apples', 90.0),
       ('Bread', 'Fresh bread', 100.0);

create table categories
(
    id    bigserial,
    title varchar(255),
    primary key (id)
);
insert into categories (title)
values ('Food'),
       ('Devices');

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
       (1, 2),
       (2, 1),
       (3, 1),
       (4, 2);

