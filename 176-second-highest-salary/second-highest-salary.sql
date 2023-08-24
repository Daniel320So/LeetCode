# Write your MySQL query statement below
SELECT MAX(e.salary) as "SecondHighestSalary" FROM Employee e WHERE e.salary != (SELECT MAX(e.salary) FROM Employee e);