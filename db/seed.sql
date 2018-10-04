select * from products
select * from imgs
select * from categories

insert into categories
(product_type)
VALUES
('hats'),('shirts'),('bags'),('hoodies'),('mugs'), ('stickers');

insert into products
(name, price, description, product_type, category_id)
VALUES
('Coffee Mug (Blue)', 4.99, 'Enjoy your morning coffee with one of our mugs!', 'mugs', 5);

insert into products
(name, price, description, product_type, category_id)
VALUES
('Sticker (White)', 4.99, 'Check out our cool bumper stickers.', 'stickers', 6);

insert into products
(name, price, description, product_type, category_id)
VALUES
('Sticker (Black)', 4.99, 'Check out our cool bumper stickers.', 'stickers', 6);

insert into products
(name, price, description, product_type, category_id)
VALUES
('Coffee Mug (Black)', 4.99, 'Enjoy your morning coffee with one of our mugs!', 'mugs', 5);

insert into products
(name, price, description, product_type, category_id)
VALUES
('Cap (Black)', 14.99, 'Baseball cap with Override Films logo!', 'hats', 1);

insert into products
(name, price, description, product_type, category_id)
VALUES
('Hoodie (Black)', 19.99, 'Stay warm in one of our hoodies', 'hoodies', 4);

insert into products
(name, price, description, product_type, category_id)
VALUES
('Cap (Black & White)', 14.99, 'Baseball cap with Override Films logo!', 'hats', 1);

insert into products
(name, price, description, product_type, category_id)
VALUES
('Shirt (Black, Long Sleeve)', 14.99, 'Black, Long Sleeve Shirt with logo', 'shirts', 2);

insert into products
(name, price, description, product_type, category_id)
VALUES
('Sticker (Blue)', 4.99, 'Check out our cool bumper stickers.', 'stickers', 6);

insert into products
(name, price, description, product_type, category_id)
VALUES
('Shirt (Dark Grey, Long Sleeve)', 14.99, ' Dark Grey, Long Sleeve Shirt with logo', 'shirts', 2);

insert into products
(name, price, description, product_type, category_id)
VALUES
('Shirt (Light Grey, Long Sleeve)', 14.99, 'Light Grey, Long Sleeve Shirt with logo', 'shirts', 2);

insert into products
(name, price, description, product_type, category_id)
VALUES
('No-Draw-String-Bag (Blue)', 9.99, 'Carry stuff with one of our bags', 'bags', 3);

insert into products
(name, price, description, product_type, category_id)
VALUES
('No-Draw-String-Bag (Red)', 9.99, 'Carry stuff with one of our bags', 'bags', 3);

insert into products
(name, price, description, product_type, category_id)
VALUES
('No-Draw-String-Bag (Yellow)', 9.99, 'Carry stuff with one of our bags', 'bags', 3);

insert into products
(name, price, description, product_type, category_id)
VALUES
('No-Draw-String-Bag (Black)', 9.99, 'Carry stuff with one of our bags', 'bags', 3);

insert into products
(name, price, description, product_type, category_id)
VALUES
('Hoodie (Orange)', 19.99, 'Stay warm in one of our hoodies', 'hoodies', 4);

insert into products
(name, price, description, product_type, category_id)
VALUES
('Cap (Red)', 14.99, 'Baseball cap with Override Films logo!', 'hats', 1);

insert into products
(name, price, description, product_type, category_id)
VALUES
('Shirt (Red, Short Sleeve)', 14.99, 'Red, Short Sleeve Shirt with logo', 'shirts', 2);

insert into products
(name, price, description, product_type, category_id)
VALUES
('Shirt (Grey, Short Sleeve)', 14.99, 'Grey, Short Sleeve Shirt with logo', 'shirts', 2);

insert into products
(name, price, description, product_type, category_id)
VALUES
('Coffee Mug (White)', 4.99, 'Enjoy your morning coffee with one of our mugs!', 'mugs', 5);

insert into products
(name, price, description, product_type, category_id)
VALUES
('Hoodie (Yellow)', 19.99, 'Stay warm in one of our hoodies', 'hoodies', 4);

insert into products
(name, price, description, product_type, category_id)
VALUES
('Shirt (Yellow, Short Sleeve)', 14.99, 'Yellow, Short Sleeve Shirt with logo', 'shirts', 2);

insert into imgs
(frontal_img, main, product_id)
VALUES('https://s3.us-east-2.amazonaws.com/devmountainpersonalproject/Blue+coffee+mug+with+logo.png',true, 1);

insert into imgs
(frontal_img, main, product_id)
VALUES('https://s3.us-east-2.amazonaws.com/devmountainpersonalproject/Override.png',true, 2);

insert into imgs
(frontal_img, main, product_id)
VALUES('https://s3.us-east-2.amazonaws.com/devmountainpersonalproject/black+car+bumper+sticker.png',true, 3);

insert into imgs
(frontal_img, main, product_id)
VALUES('https://s3.us-east-2.amazonaws.com/devmountainpersonalproject/black+coffee+mug.png',true, 4);

insert into imgs
(frontal_img, main, product_id)
VALUES('https://s3.us-east-2.amazonaws.com/devmountainpersonalproject/black+hat+cap.png',true, 5);

insert into imgs
(frontal_img, main, product_id)
VALUES('https://s3.us-east-2.amazonaws.com/devmountainpersonalproject/black+hoodie.png',true, 6);

insert into imgs
(frontal_img, main, product_id)
VALUES('https://s3.us-east-2.amazonaws.com/devmountainpersonalproject/black%26white+cap.png',true, 7);

insert into imgs
(frontal_img, main, product_id)
VALUES('https://s3.us-east-2.amazonaws.com/devmountainpersonalproject/black-long-sleeve+shirt+with+logo.png',true, 8);

insert into imgs
(frontal_img, main, product_id)
VALUES('https://s3.us-east-2.amazonaws.com/devmountainpersonalproject/bluebumpersticker.jpg',true, 9);

insert into imgs
(frontal_img, main, product_id)
VALUES('https://s3.us-east-2.amazonaws.com/devmountainpersonalproject/long-sleeve+grey+shirt.jpg',true, 10);

insert into imgs
(frontal_img, main, product_id)
VALUES('https://s3.us-east-2.amazonaws.com/devmountainpersonalproject/long-sleeve+shirt+with+logo.png',true, 11);

insert into imgs
(frontal_img, main, product_id)
VALUES('https://s3.us-east-2.amazonaws.com/devmountainpersonalproject/no-draw-string+backpack+(blue)+with+logo.png',true, 12);

insert into imgs
(frontal_img, main, product_id)
VALUES('https://s3.us-east-2.amazonaws.com/devmountainpersonalproject/no-draw-string+backpack+(red)+with+logo.png',true, 13);

insert into imgs
(frontal_img, main, product_id)
VALUES('https://s3.us-east-2.amazonaws.com/devmountainpersonalproject/no-draw-string+backpack+(yellow)+with+logo.png',true, 14);

insert into imgs
(frontal_img, main, product_id)
VALUES('https://s3.us-east-2.amazonaws.com/devmountainpersonalproject/no-draw-string+backpack+with+logo+(black).png',true, 15);

insert into imgs
(frontal_img, main, product_id)
VALUES('https://s3.us-east-2.amazonaws.com/devmountainpersonalproject/orange+hoodie.jpg',true, 16);

insert into imgs
(frontal_img, main, product_id)
VALUES('https://s3.us-east-2.amazonaws.com/devmountainpersonalproject/red+cap.jpg',true, 17);

insert into imgs
(frontal_img, main, product_id)
VALUES('https://s3.us-east-2.amazonaws.com/devmountainpersonalproject/redshirt+short-sleeve.jpg',true, 18);

insert into imgs
(frontal_img, main, product_id)
VALUES('https://s3.us-east-2.amazonaws.com/devmountainpersonalproject/short-sleeve+shirt+logo.png',true, 19);

insert into imgs
(frontal_img, main, product_id)
VALUES('https://s3.us-east-2.amazonaws.com/devmountainpersonalproject/whitemugwithlogo.png',true, 20);

insert into imgs
(frontal_img, main, product_id)
VALUES('https://s3.us-east-2.amazonaws.com/devmountainpersonalproject/yellow+hoodie+kids.jpg',true, 21);

insert into imgs
(frontal_img, main, product_id)
VALUES('https://s3.us-east-2.amazonaws.com/devmountainpersonalproject/yellow+short-sleeve+shirt.jpg',true, 22);

insert into users
(first_name, last_name, auth_id)
VALUES
('Brady', 'Snuggs', 1);

