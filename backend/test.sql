-- Active: 1695990007529@@127.0.0.1@3306@PetScarey
use PetScarey;

insert into Vet values (1,"test1")

select * from Vet;

insert into Pet(pet_name, age, weight, clinic, uid, vet_id) 
    values ("test", 5, 50, "Ctest", 1, 1);

    insert into Pet(pet_name, age, weight, clinic, uid, vet_id) 
    values ("test1", 5, 50, "Ctest1", 1, 1);

select * from Pet;

update Pet set petType = "Pong";

select * from Pet p join Vet v on p.Vet_id = v.Vet_id where pid = 2;
update users set propic_path = null;

 insert into Symtom(Sym_name) values ("Food Poisoning");
 insert into Symtom(Sym_name) values ("Allergies");
 insert into Symtom(Sym_name) values ("Skin Infection");
 insert into Symtom(Sym_name) values ("Eye Injuries");
 insert into Symtom(Sym_name) values ("Flea and Tick");

 insert into Status(Vet_id,Sym_ID,pid,Sdesc) values (1,1,1,"He's fine")

 insert into Status(Vet_id,Sym_ID,pid,Sdesc) values (1,2,1,"He's Ded");
 insert into Status(Vet_id,Sym_ID,pid,Sdesc) values (1,3,1,"He's OK");
 insert into Status(Vet_id,Sym_ID,pid,Sdesc) values (1,4,1,"He's F");
 select * from 
    Status St 
    join Symtom Sm on St.Sym_ID = Sm.Sym_ID 
    join Pet P on St.pid = P.pid 
    join Vet v on v.Vet_id = St.Vet_id 
    join users u on v.Vet_id = u.uid 
    where St.pid = 1;

insert into Vaccine(Vac_name) values("testVacc");
    insert into Vaccine_List(Vac_ID, pid) values (1,1);
    insert into Vaccine_List(Vac_ID, pid) values (1,2);
    insert into Vaccine_List(Vac_ID, pid) values (1,3);
    insert into Vaccine_List(Vac_ID, pid) values (1,4);