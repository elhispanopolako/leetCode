DELETE FROM Person
WHERE email IN (
  SELECT email
  FROM (
    SELECT email, MIN(id) AS min_id
    FROM Person
    GROUP BY email
    HAVING COUNT(*) > 1
  ) AS duplicates
  WHERE id != min_id
);
