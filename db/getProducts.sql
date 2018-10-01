select * 
from imgs i
join products p on p.id = i.id
order by price desc