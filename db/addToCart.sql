insert into cart
(user_id, product_id, quantity)
VALUES
(${user_id}, ${product_id}, ${quantity});

select * from cart
where user_id = ${user_id}