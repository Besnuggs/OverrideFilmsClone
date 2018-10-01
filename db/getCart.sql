select * 
from products p
join cart c on p.id = c.product_id
join imgs i on p.id = i.id
where c.user_id = ${user_id}
order by price desc;