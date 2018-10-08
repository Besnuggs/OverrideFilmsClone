delete from cart
where product_id = ${product_id}
and user_id = ${user_id}

select * from cart