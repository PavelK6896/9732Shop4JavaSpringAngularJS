create table users
(
    id         bigserial,
    phone      varchar(30) not null unique,
    password   varchar(80) not null,
    email      varchar(50) unique,
    first_name varchar(50),
    last_name  varchar(50),
    role1       varchar(20) not null,
    status     varchar(20) not null,
--     created_at timestamp default current_timestamp,
--     updated_at timestamp default current_timestamp,
    primary key (id)
);

insert into users (phone, password, email, first_name, last_name, role1, status)
values ('1', '$2y$12$2LVAI8g8ci9Iq/Zod6Zb4uQYw1cLxTIG669BlOJP7W8Xo6dgeHVXa', 'admin@gmail.com', 'admin', 'admin', 'ADMIN',
        'ACTIVE'),
       ('2', '$2y$12$2LVAI8g8ci9Iq/Zod6Zb4uQYw1cLxTIG669BlOJP7W8Xo6dgeHVXa', 'user@gmail.com', 'user', 'user', 'USER',
        'ACTIVE')   ,
        ('73', '$2y$12$2LVAI8g8ci9Iq/Zod6Zb4uQYw1cLxTIG669BlOJP7W8Xo6dgeHVXa', 'user3@gmail.com', 'user', 'user', 'USER',
        'BANNED');
