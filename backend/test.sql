-- Active: 1695990007529@@127.0.0.1@3306@PetScarey
use PetScarey;

insert into Vet(Vet_name) values ("test1")

select * from Vet;

insert into Pet(pet_name, age, weight, clinic, uid, vet_id) 
    values ("test", 5, 50, "Ctest", 1, 1);

    insert into Pet(pet_name, age, weight, clinic, uid, vet_id) 
    values ("test1", 5, 50, "Ctest1", 1, 1);