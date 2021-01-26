 SELECT COUNT(id) AS students from students
 
 SELECT id, first_name, middle_name, last_name, age, location FROM students WHERE location = "Manila"
  
 SELECT AVG(age) from students
 
 SELECT age, id, first_name, middle_name, last_name, age, location from students ORDER BY age DESC
 