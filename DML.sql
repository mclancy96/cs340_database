-- This is where we will combine all of our Data manipulation queries

-- ================== UPDATE Queries =======================

UPDATE table_name
SET column1 = value1, column2 = value2, ...
WHERE condition;

-- Update One Entry in Class Categories Table

UPDATE `Class Categories`
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

DELETE FROM `Class Categories` WHERE class_category_id = :class_category_id;

-- Delete all entries from Class Categories table

DELETE FROM `Class Categories`;

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