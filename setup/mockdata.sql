

insert into admins(username , password) values ('abbos' , crypt('12345' , gen_salt('bf')));

insert into categories(category_name) values ('xona gullar'), ('arzon gullar') , ('dala gullar');
update categories set category_name='dala gullar' where category_id = 3;
select * from admins;

insert into products(product_name , description, price , count , category_id) values
('aloe' , 'bu aloe xona osimlik , kop yillik' , '30.750' , '2' , 1),
('lola' , 'bu lola , qip qizil' , '30750.00' , '3' , 2),
('atir gul' , 'bu atir gul , zor', '28000.50' , '4' , 3);
delete from products;

select * from products;

insert into images(image , product_id) values
('https://picsum.photos/400' , 4),
('https://picsum.photos/400' , 5),
('https://picsum.photos/400' , 6),
('https://picsum.photos/400' , 9);


