create table teas as 
	select 'black' as type, '2' as price, 'mint' as addon union
	select 'green' as type, '1.5' as price, 'honey' as addon union
	select 'jasmine' as type, '3' as price, 'boba' as addon union
	select 'black' as type, '2.5' as price, 'boba' as addon;

select type, price from teas where type = 'black' order by price;

select a.price, b.price from teas as a, teas as b, where a.price != b.price;