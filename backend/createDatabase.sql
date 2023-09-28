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
        User_type varchar(10)
    );

-- insert into users(username,password, tel,email,Full_name) VALUES("test","test","1234567890","test","test");

-- select * from users;

create table
    if not exists Pet(
        pid INTEGER AUTO_INCREMENT PRIMARY KEY,
        pet_name varchar(20) not null,
        age INTEGER,
        weight FLOAT,
        clinic VARCHAR(24),
        petpicpath VARCHAR(26)
    );

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
    if not exists Vet(
        Vet_id INTEGER auto_increment PRIMARY KEY,
        Vet_name VARCHAR(20) not null
    );

create table
    if not exists Lists(
        pid INTEGER not null,
        Vet_id INTEGER not null,
        uid INTEGER not null,
        PRIMARY KEY(pid, Vet_id),
        Foreign Key (pid) REFERENCES Pet(pid),
        Foreign Key (Vet_id) REFERENCES Vet(Vet_id),
        Foreign Key (uid) REFERENCES users(uid)
    );

create table
    if not exists Appointments(
        Appo_ID INTEGER AUTO_INCREMENT not null,
        pid INTEGER not null,
        Vet_id INTEGER not null,
        Tre_ID INTEGER not null,
        Sym_ID INTEGER not null,
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
        Sym_ID INTEGER not null,
        pid INTEGER not null,
        DDate DATE DEFAULT (CURRENT_DATE),
        PRIMARY KEY(VL_ID, Vac_ID, Sym_ID, pid),
        Foreign Key (pid) REFERENCES Pet(pid),
        Foreign Key (Vac_ID) REFERENCES Vaccine(Vac_ID),
        Foreign Key (Sym_ID) REFERENCES Symtom(Sym_ID)
    );

select * from users;