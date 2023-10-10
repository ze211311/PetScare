-- Active: 1695731949474@@localhost@3306@PetScarey
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