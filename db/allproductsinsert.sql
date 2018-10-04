-- Products into product table
insert into products
(name, price, description, product_type, category_id)
VALUES
('White Override Mug', 4.99, 'Enjoy your morning coffee with one of our mugs!', 'mugs', 5);

-- Imgs into img table
insert into imgs
(frontal_img, back_img, main, product_id)
VALUES('https://s3.us-east-2.amazonaws.com/devmountainpersonalproject/whitemugwithlogo.png','https://s3.us-east-2.amazonaws.com/devmountainpersonalproject/whitemugwithlogo.png',true, 1);