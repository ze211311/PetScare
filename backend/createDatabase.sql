create DATABASE if not exists PetScarey;

use PetScarey;

create table
    if not exists users(
        uid INTEGER AUTO_INCREMENT PRIMARY KEY,
        username varchar(25) not null,
        password varchar(25) not null,
        tel char(10),
        email varchar(30),
        Full_name varchar(25),
        propic_path varchar(26),
        User_type BOOLEAN default false -- True = Vet : False = user
    );

-- insert into users(username,password, tel,email,Full_name) VALUES("test","test","1234567890","test","test");

-- select * from users;

create table
    if not exists Vet(
        Vet_id INTEGER PRIMARY KEY,
        Vet_name VARCHAR(25) not null
    );

create table
    if not exists Pet(
        pid INTEGER AUTO_INCREMENT PRIMARY KEY,
        pet_name varchar(20) not null,
        age INTEGER,
        weight FLOAT,
        clinic VARCHAR(24),
        petpicpath VARCHAR(26),
        petType VARCHAR(12),
        uid INTEGER not null,
        Vet_id INTEGER,
        Foreign Key (uid) REFERENCES users(uid),
        Foreign Key (Vet_id) REFERENCES Vet(Vet_id)
    );

alter table Pet add petType varchar(26);
alter table Pet remove Vet_id;

create table
    if not exists Vaccine(
        Vac_ID INTEGER auto_increment PRIMARY KEY,
        Vac_name varchar(20) not null
    );

create table
    if not exists Symtom(
        Sym_ID INTEGER auto_increment PRIMARY KEy,
        Sym_name varchar(20) not null
    );

create TABLE
    if not exists Treatment(
        Tre_ID INTEGER auto_increment PRIMARY KEY,
        Tre_name varchar(20) not null
    );

create table
    if not exists Appointments(
        Appo_ID INTEGER AUTO_INCREMENT not null,
        pid INTEGER not null,
        Vet_id INTEGER not null,
        Tre_ID INTEGER not null,
        Sym_ID INTEGER not null,
        Appdate date DEFAULT(current_date),
        PRIMARY KEY(
            Appo_ID,
            pid,
            Vet_id,
            Tre_ID,
            Sym_ID
        ),
        Foreign Key (pid) REFERENCES Pet(pid),
        Foreign Key (Vet_id) REFERENCES Vet(Vet_id),
        Foreign Key (Tre_ID) REFERENCES Treatment(Tre_ID),
        Foreign Key (Sym_ID) REFERENCES Symtom(Sym_ID)
    );

create table
    if not exists Status(
        Status_ID INTEGER AUTO_INCREMENT not null,
        Vet_id INTEGER not null,
        Sym_ID INTEGER not null,
        pid INTEGER not null,
        Sdesc VARCHAR(30),
        stapicpath varchar(26),
        DDate DATE DEFAULT (CURRENT_DATE),
        PRIMARY KEY(Status_ID, Vet_id, Sym_ID),
        Foreign Key (Vet_id) REFERENCES Vet(Vet_id),
        Foreign Key (pid) REFERENCES Pet(pid),
        Foreign Key (Sym_ID) REFERENCES Symtom(Sym_ID)
    );

create table
    if not exists Vaccine_List(
        VL_ID INTEGER AUTO_INCREMENT not null,
        Vac_ID INTEGER not null,
        pid INTEGER not null,
        DDate DATE DEFAULT (CURRENT_DATE),
        PRIMARY KEY(VL_ID, Vac_ID, pid),
        Foreign Key (pid) REFERENCES Pet(pid),
        Foreign Key (Vac_ID) REFERENCES Vaccine(Vac_ID)
    );

select * from users;

insert into
    users(
        username,
        password,
        tel,
        email,
        Full_name
    )
VALUES (
        "otto",
        "otto123",
        "0812345678",
        "otto@tni.ac.th",
        "Natthaphum Kongsatjaviwat"
    );

insert into
    users(
        username,
        password,
        tel,
        email,
        Full_name
    )
VALUES (
        "GyozaAmogus",
        "GyozaAmogus123",
        "0912345678",
        "GyozaAmogus6969@tni.ac.th",
        "Aiya Tutsanachaiyasit"
    );

insert into
    users(
        username,
        password,
        tel,
        email,
        Full_name
    )
VALUES (
        "sea",
        "sea123",
        "0712345678",
        "sea@tni.ac.th",
        "Narongkorn Sangayotin"
    );

select * from Pet P join Vet V on P.Vet_id = V.Vet_id where uid = 1;