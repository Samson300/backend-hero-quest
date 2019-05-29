
create table users (
    id serial primary key,
    first_name varchar(100),
    last_name varchar(100),
    email varchar(200),
    password varchar(500)
);

create table savedGames (
    id serial primary key,
    state text,
    user_id integer references users(id)
)