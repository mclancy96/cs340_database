
---------------------------------------READ---------------------------------------------
-- display all students from Students table
SELECT student_id, name AS student_name, street_address,
city, state, zip_code, email, phone_number
FROM Students;

-- display all classes from Classes table
SELECT Classes.class_id, Professors.name AS professor_name, `Class Categories`.name AS class_category_name, 
Classes.name AS class_name, Classes.current_enrollment, Classes.max_enrollment
FROM Classes
    INNER JOIN Professors
    ON Classes.professor_id = Professors.professor_id
    INNER JOIN `Class Categories`
    ON Classes.class_category_id = `Class Categories`.class_category_id;

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
FROM `Class Categories`;

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
FROM `Class Categories`;

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
INSERT INTO `Class Categories` (name)
VALUES(:classCategoryNameInput);

-- Insert into the Professors Table
insert into Professors (name, street_address, city, state, zip_code, email)
VALUES(:professorNameInput, :streetAddressInput, :cityInput, :stateInput, :zipCodeInput, :emailInput);

