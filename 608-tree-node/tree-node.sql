# Write your MySQL query statement below

SELECT t.id, "Root" as type FROM Tree t WHERE t.p_id IS NULL
UNION 
SELECT t2.id, "Inner" as type FROM Tree t LEFT JOIN Tree t2 ON t.p_id = t2.id WHERE t2.p_id IS NOT NULL
UNION 
SELECT t.id, "Leaf" as type FROM Tree t LEFT JOIN Tree t2 ON t.id = t2.p_id WHERE t.p_id IS NOT NULL AND t2.id IS NULL
;
