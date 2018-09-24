insert into categories
(product_type)
VALUES
('hats'),('shirts'),('bags'),('hoodies'),('mugs'), ('stickers');

insert into products
(name, price, description, product_type, category_id)
VALUES
('White Override Mug', 4.99, 'Enjoy your morning coffee with one of our mugs!', 'mugs', 5);

insert into imgs
(frontal_img, back_img, main, product_id)
VALUES('https://s3.us-east-2.amazonaws.com/devmountainpersonalproject/whitemugwithlogo.png','https://s3.us-east-2.amazonaws.com/devmountainpersonalproject/whitemugwithlogo.png',true, 1);

insert into users
(first_name, last_name, auth_id)
VALUES
('Brady', 'Snuggs', 1);

