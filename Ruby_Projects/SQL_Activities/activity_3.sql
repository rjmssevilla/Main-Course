CREATE TABLE classroom (id integer PRIMARY KEY, student_id INTEGER, section varchar(5));

INSERT INTO classrooms VALUES (1, 1, 'A');
INSERT INTO classrooms VALUES (2, 2, 'A');
INSERT INTO classrooms VALUES (3, 3, 'B');
INSERT INTO classrooms VALUES (4, 4, 'C');
INSERT INTO classrooms VALUES (5, 5, 'B');
INSERT INTO classrooms VALUES (6, 6, 'A');
INSERT INTO classrooms VALUES (7, 7, 'C');
INSERT INTO classrooms VALUES (8, 8, 'B');
INSERT INTO classrooms VALUES (9, 9, 'B');
INSERT INTO classrooms VALUES (10, 10, 'C');

SELECT students.id, students.first_name, students.middle_name, students.last_name, students.age,students.location, classrooms.student_id,classrooms.section
FROM students
INNER JOIN classrooms ON students.id = classrooms.id

SELECT students.id, students.first_name, students.middle_name, students.last_name, students.age,students.location, classrooms.student_id,classrooms.section
FROM students
LEFT JOIN classrooms ON students.id = classrooms.id

SELECT students.id, students.first_name, students.middle_name, students.last_name, students.age,students.location, classrooms.student_id,classrooms.section
FROM students
RIGHT JOIN classrooms ON students.id = classrooms.id

SELECT students.id, students.first_name, students.middle_name, students.last_name, students.age,students.location, classrooms.student_id,classrooms.section
FROM students
FULL JOIN classrooms ON students.id = classrooms.id