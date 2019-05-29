
create table users (
    id serial primary key,
    first_name varchar(100),
    last_name varchar(100),
    email varchar(200),
    pasword varchar(500)
);

create table savedGames (
    id serial primary key
)