SELECT name as Customers
FROM customers
LEFT JOIN Orders
ON customers.id = Orders.customerId 
WHERE Orders.customerId IS NULL