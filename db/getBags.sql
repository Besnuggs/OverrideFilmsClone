select *
from products p join imgs i
on p.id = i.id
where p.category_id = 3