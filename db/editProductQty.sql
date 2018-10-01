update cart
set quantity = $1
where cart_id = $2;

select * 
from products p
join cart c on p.id = c.product_id
join imgs i on p.id = i.id
where c.user_id = $3
order by price desc;
