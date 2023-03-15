-- The following are our data manipulation queries. We are using a colon (":") character to 
-- denote the variables that will have data from the backend programming language

---------------------------------------READ---------------------------------------------
-- display all students from Students table
SELECT student_id, name AS student_name, street_address,
city, state, zip_code, email, phone_number
FROM Students;

-- display all classes from Classes table
SELECT Classes.class_id, Professors.name AS professor_name, Class_Categories.name AS class_category_name, 
Classes.name AS class_name, COUNT(Registrations.class_id) AS current_enrollment, Classes.max_enrollment
FROM Classes
    INNER JOIN Professors
    ON Classes.professor_id = Professors.professor_id
    INNER JOIN Class_Categories
    ON Classes.class_category_id = Class_Categories.class_category_id
    LEFT JOIN Registrations
    ON Classes.class_id = Registrations.class_id
GROUP BY Classes.class_id;

-- display all registrations from Registration table
SELECT Registrations.registration_id, Students.name AS student_name, Classes.name AS class_name, 
Registrations.date_time_of_registration, Registrations.semester
FROM Registrations
    INNER JOIN Students
    ON Registrations.student_id = Students.student_id
    INNER JOIN Classes
    ON Registrations.class_id = Classes.class_id;

-- display all class categories from Class Categories table
SELECT class_category_id, name AS class_category_name
FROM Class_Categories;

-- display all professors from the Professors table
SELECT professor_id, name AS professor_name, street_address,
city, state, zip_code, email
FROM Professors;

------------------------------------------CREATE-------------------------------------------


-- Insert Into the Students Table
INSERT INTO Students (name, street_address, city, state, zip_code, email, phone_number)
VALUES(:studentNameInput,:streeAddessInput,:cityInput, :stateInput, :zip_codeInput, :emailInput, :phoneNumberInput);


-- get all professor ids and names to populate the professorId_dropdown input for inserting into the Classes Table
SELECT professor_id, name
FROM Professors;

-- get all class category ids and names to populate the classCategoryID_dropdown input for inserting into the Classes Table 
SELECT class_category_id, name
FROM Class_Categories;

-- Insert into the Classes Table
INSERT INTO Classes (professor_id, class_category_id, name, current_enrollment, max_enrollment)
VALUES(:professorId_dropdown_input, :classCategoryID_dropdown_input, :classNameInput, :currentEnrollmentInput, :maxEnrollmentInput);

-- get all student ids and names to populate the studentId_dropdown_input for inserting into the Registrations Table
SELECT student_id, name
FROM Students;

-- get all class ids and names to populate the classId_dropdown_input for inserting into the Registrations Table
SELECT class_id, name
FROM Classes;

-- Insert into the Registrations Table
INSERT INTO Registrations (student_id, class_id, date_time_of_registration, semester)
VALUES(:studentId_dropdown_input, :classId_dropdown_input, :dateInput, :semesterInput);

-- Insert into the Class Categories Table
INSERT INTO Class_Categories (name)
VALUES(:classCategoryNameInput);

-- Insert into the Professors Table
INSERT INTO Professors (name, street_address, city, state, zip_code, email)
VALUES(:professorNameInput, :streetAddressInput, :cityInput, :stateInput, :zipCodeInput, :emailInput);



-- ================== UPDATE Queries =======================

UPDATE table_name
SET column1 = value1, column2 = value2, ...
WHERE condition;

-- Update One Entry in Class Categories Table

UPDATE Class_Categories
SET name = :classCategoryNameInput
WHERE class_category_id = :class_category_id;

-- Update One Entry in Student Table

UPDATE Students
SET name=:studentNameInput, 
street_address= :streeAddessInput,
city=:cityInput, 
state=:stateInput, 
zip_code = :zip_codeInput, 
email = :emailInput, 
phone_number= :phoneNumberInput
WHERE student_id = :student_id;

-- Update One Entry in Classes Table

UPDATE Classes
SET professor_id = :professorId_dropdown_input, 
class_category_id = :classCategoryID_dropdown_input, 
name = :classNameInput, 
current_enrollment = :currentEnrollmentInput, 
max_enrollment = :maxEnrollmentInput
WHERE class_id = :class_id;

-- Update One Entry in Professors Table

UPDATE Professors
SET name = :professorNameInput, 
street_address = :streetAddressInput, 
city = :cityInput, 
state = :stateInput, 
zip_code = :zipCodeInput, 
email = :emailInput
WHERE professor_id = :professor_id;

-- =======================DELETE Queries===============

-- Delete one entry from Students table

DELETE FROM Students WHERE student_id = :student_id;

-- Delete all entries from Students table

DELETE FROM Students;

-- Delete one entry from Class Categories table

DELETE FROM Class_Categories WHERE class_category_id = :class_category_id;

-- Delete all entries from Class Categories table

DELETE FROM Class_Categories;

-- Delete one entry from Classes table

DELETE FROM Classes WHERE class_id = :class_id;

-- Delete all entries from Classes table

DELETE FROM Classes;

-- Delete one entry from Professors table

DELETE FROM Professors WHERE professor_id = :professor_id;

-- Delete all entries from Professors table

DELETE FROM Professors;

-- Delete one entry from Registrations table

DELETE FROM Registrations WHERE registration_id = :registration_id;

-- Delete all entries from Registrations table

DELETE FROM Registrations;