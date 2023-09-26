create DATABASE if not exists PetScarey;

use PetScarey;

create table if not exists users(
    uid INTEGER AUTO_INCREMENT PRIMARY KEY,
    username varchar(25) not null,
    password varchar(25) not null,
    tel char(10),
    email varchar(30),
    Full_name varchar(25),
    propic_path varchar(26),
    User_type varchar(10)
);

-- insert into users(username,password, tel,email,Full_name) VALUES("test","test","1234567890","test","test");
-- select * from users;

create table if not exists Pet(
    pid INTEGER AUTO_INCREMENT PRIMARY KEY,
    pet_name varchar(20) not null,
    age INTEGER,
    weight FLOAT,
    clinic VARCHAR(24),
    petpicpath VARCHAR(26)
);