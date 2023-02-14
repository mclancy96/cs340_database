
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


