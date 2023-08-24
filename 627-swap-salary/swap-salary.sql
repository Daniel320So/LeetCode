# Write your MySQL query statement below

UPDATE Salary s
    SET s.sex =
        CASE
            WHEN s.sex = 'f' THEN 'm' 
            WHEN s.sex ='m' THEN 'f'
        END;