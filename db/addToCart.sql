insert into cart
(user_id, product_id)
VALUES
(${user_id}, ${product_id});

select * from cart
where user_id = ${user_id}