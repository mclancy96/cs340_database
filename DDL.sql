SET FOREIGN_KEY_CHECKS=0;
SET AUTOCOMMIT = 0;


CREATE OR REPLACE TABLE Class_Categories
(
  class_category_id int(11) NOT NULL AUTO_INCREMENT,
  name varchar(45) NOT NULL,
  PRIMARY KEY (class_category_id)
);

CREATE OR REPLACE TABLE Professors 
(
  professor_id int(11) NOT NULL AUTO_INCREMENT,
  name varchar(145) NOT NULL,
  street_address varchar(145) NOT NULL,
  city varchar(45) NOT NULL,
  state varchar(45) NOT NULL,
  zip_code varchar(45) NOT NULL,
  email varchar(45) NOT NULL,
  PRIMARY KEY (professor_id)
);

CREATE OR REPLACE TABLE Classes 
(
  class_id int(11) NOT NULL AUTO_INCREMENT,
  professor_id int(11),
  class_category_id int(11) NOT NULL,
  name varchar(145) NOT NULL,
  current_enrollment int(11) NOT NULL,
  max_enrollment int(11) NOT NULL,
  PRIMARY KEY (class_id),
  KEY `fk_Classes_Professors1_idx` (professor_id),
  KEY `fk_Classes_Class Categories1_idx` (class_category_id),
  CONSTRAINT `fk_Classes_Class Categories1` FOREIGN KEY (class_category_id) REFERENCES Class_Categories (class_category_id) ON DELETE CASCADE,
  CONSTRAINT `fk_Classes_Professors1` FOREIGN KEY (professor_id) REFERENCES Professors (professor_id) ON DELETE CASCADE
);

CREATE OR REPLACE TABLE Students
(
  student_id int(11) NOT NULL AUTO_INCREMENT,
  name varchar(145) NOT NULL,
  street_address varchar(145) NOT NULL,
  city varchar(45) NOT NULL,
  state varchar(45) NOT NULL,
  zip_code varchar(45) NOT NULL,
  email varchar(45) NOT NULL,
  phone_number varchar(45) NOT NULL,
  PRIMARY KEY (student_id)
);

CREATE OR REPLACE TABLE Registrations 
(
  registration_id int(11) NOT NULL AUTO_INCREMENT,
  student_id int(11) NOT NULL,
  class_id int(11) NOT NULL,
  date_time_of_registration date NOT NULL,
  semester varchar(45) NOT NULL,
  PRIMARY KEY (registration_id),
  KEY `fk_Registrations_Students_idx` (student_id),
  KEY `fk_Registrations_Classes1_idx` (class_id),
  CONSTRAINT `fk_Registrations_Classes1` FOREIGN KEY (class_id) REFERENCES Classes (class_id) ON DELETE CASCADE,
  CONSTRAINT `fk_Registrations_Students` FOREIGN KEY (student_id) REFERENCES Students (student_id) ON DELETE CASCADE
);

INSERT INTO Class_Categories (name)
VALUES ('Psychology'),
('Mathematics'),
('Computer Science'),
('Nursing');

INSERT INTO Classes (professor_id, class_category_id, name, current_enrollment, max_enrollment)
VALUES (1,1,'Psychology 101',0,30),
(1,1,'Psychology 201',0,30),
(2,2,'Intro to Geometry',0,100);

INSERT INTO Professors (name, street_address, city, state, zip_code, email)
VALUES ('Marito Viana','1 first st.','Yakima','TX','72556','marito.viana@example.com'),
('Andy Martin','2 second st.','Fullerton','WV','63361','andy.martin@example.com'),
('Wendy Miller','3 third st.','Houston','MI','46194','wendy.miller@example.com');

INSERT INTO Registrations (student_id, class_id, date_time_of_registration, semester) 
VALUES (1,2,'2023-03-02','SUMMER 2023'),
(2,3,'2023-02-04','SUMMER 2023'),
(2,1,'2023-01-25','SUMMER 2023');

INSERT INTO Students (name, street_address, city, state, zip_code, email, phone_number)
VALUES ('Travis Bell','1 hello st','Chandler','NY','13941','travis.bell@example.com','(576) 254-3812'),
('Caroline Lynch','2 bye st.','New York','LA','35397','caroline.lynch@example.com','(903) 425-6641'),
('Ashley Pena','3 why st.','Arvada','RI','86584','ashley.pena@example.com','(508) 464-0886');

SET FOREIGN_KEY_CHECKS=1;
COMMIT;
