DROP DATABASE IF EXISTS db_gym_app;
CREATE DATABASE db_gym_app;
USE db_gym_app;

CREATE TABLE Plan (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(20),
    info VARCHAR(150),
    price DECIMAL(10, 2),
    image VARCHAR(150)
);

CREATE TABLE User (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50),
    surname VARCHAR(50),
    username VARCHAR(20),
    password VARCHAR(30),
    address VARCHAR(150),
    type TINYINT,
    status TINYINT,
    gender VARCHAR(15),
    email VARCHAR(50),
    worker_id INT,
    dni VARCHAR(15),
    job_title_worker VARCHAR(45),
    phone_num VARCHAR(15),
    client_id INT,
    credit_card VARCHAR(19),
    birthday DATE,
    url_img VARCHAR(250),
    plan_id INT,
    FOREIGN KEY (plan_id) REFERENCES Plan(id)
);

CREATE TABLE gym (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(40),
    address VARCHAR(50),
    phone VARCHAR(15),
    email VARCHAR(45),
    horary VARCHAR(60)
);

CREATE TABLE gym_has_user (
    gym_id INT,
    user_id INT,
    PRIMARY KEY (gym_id, user_id),
    FOREIGN KEY (gym_id) REFERENCES gym(id),
    FOREIGN KEY (user_id) REFERENCES user(id)
);

CREATE TABLE sports (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(45),
    description VARCHAR(150)
);

CREATE TABLE gym_has_sports (
    gym_id INT,
    sports_id INT,
    PRIMARY KEY (gym_id, sports_id),
    FOREIGN KEY (gym_id) REFERENCES gym(id),
    FOREIGN KEY (sports_id) REFERENCES sports(id)
);
CREATE TABLE class (
    id INT AUTO_INCREMENT PRIMARY KEY,
    coach VARCHAR(45),
    max_students INT,
    sports_id INT,
    FOREIGN KEY (sports_id) REFERENCES sports(id)
);

CREATE TABLE federation (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(65),
    region VARCHAR(15),
    num_members INT,
    type_sport_federation VARCHAR(45)
);

CREATE TABLE sports_has_federation (
    sports_id INT,
    federation_id INT,
    PRIMARY KEY (sports_id, federation_id),
    FOREIGN KEY (sports_id) REFERENCES sports(id),
    FOREIGN KEY (federation_id) REFERENCES federation(id)
);

CREATE TABLE federation_rol (
    id INT AUTO_INCREMENT PRIMARY KEY,
    rol VARCHAR(45),
    federation_id INT,
    FOREIGN KEY (federation_id) REFERENCES federation(id)
);


CREATE TABLE novedades (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(80),
    gym_name VARCHAR(85),
    fecha DATE,
    informacion VARCHAR(200)
);


INSERT INTO novedades (titulo, gym_name, fecha, informacion) VALUES
('Entrenamiento de alta intensidad', 'GymFit', '2023-01-15', '¡Descubre nuestra nueva clase de alta intensidad para todos los niveles!'),
('Apertura de nuevas sucursales', 'PowerGym', '2023-02-02', 'Celebra con nosotros la apertura de nuevas sucursales en toda la ciudad.'),
('Descuentos para nuevos miembros', 'ActiveLife', '2023-03-10', '¡Únete a ActiveLife y disfruta de descuentos especiales como nuevo miembro!'),
('Yoga al aire libre', 'ZenFitness', '2023-04-05', 'Disfruta de la serenidad con nuestras clases de yoga al aire libre.'),
('Entrenamiento personalizado gratuito', 'EpicGains', '2023-05-20', 'Obtén un entrenamiento personalizado gratuito para alcanzar tus metas de acondicionamiento físico.'),
('Competencia de levantamiento de pesas', 'IronFlex', '2023-06-08', '¡Demuestra tu fuerza en nuestra competencia de levantamiento de pesas!'),
('Nuevos equipos de cardio de última generación', 'FitnessFusion', '2023-07-15', 'Descubre la tecnología de punta con nuestros nuevos equipos de cardio.'),
('Clases de baile latino', 'SalsaFit', '2023-08-03', 'Siente la energía latina con nuestras nuevas clases de baile.'),
('Recetas saludables en nuestro blog', 'NutriGym', '2023-09-12', 'Encuentra recetas saludables y consejos nutricionales en nuestro blog.'),
('Entrenamiento en grupo', 'TeamUnity', '2023-10-18', 'Motívate con nuestro entrenamiento en grupo para alcanzar tus metas fitness.'),
('Evento de acondicionamiento físico comunitario', 'FitCommunity', '2023-11-05', 'Únete a nuestro evento comunitario para mejorar tu acondicionamiento físico.'),
('Nuevas máquinas de pesas', 'StrongLifts', '2023-12-20', 'Añadimos nuevas máquinas de pesas para potenciar tu rutina de entrenamiento.'),
('Descuentos exclusivos para estudiantes', 'StudentFit', '2024-01-08', 'Estudiantes, aprovechen descuentos exclusivos para mantenerse en forma.'),
('Sesiones de meditación', 'MindBody', '2024-02-14', 'Encuentra paz interior con nuestras nuevas sesiones de meditación.'),
('Carrera benéfica', 'RunForGood', '2024-03-22', 'Participa en nuestra carrera benéfica para apoyar una buena causa.'),
('Entrenamiento funcional', 'FunctionalFlex', '2024-04-10', 'Mejora resistencia y movilidad con nuestro nuevo programa de entrenamiento funcional.'),
('Semana de acceso gratuito', 'OpenGym', '2024-05-01', 'Únete durante la semana de acceso gratuito y descubre todo lo que ofrecemos.'),
('Clases de natación', 'AquaFit', '2024-06-18', 'Refresca tu rutina con nuestras nuevas clases de natación.'),
('Desafío de pérdida de peso', 'WeightLossWarriors', '2024-07-05', 'Participa en nuestro desafío de pérdida de peso y alcanza tus metas fitness.');



INSERT INTO plan (title, price, info, image)
VALUES
('Free', 0.00, 'Acceso básico de forma gratuita para siempre. ¡Descubre las funciones esenciales de nuestro servicio hoy!', '/src/assets/image_free.jpg'),
('Bronze', 14.99, 'Plan Bronze con duración mensual. Nuevas funciones cada mes. ¡Mejora ahora!', '/src/assets/image_bronze.jpg'),
('Silver', 29.99, 'Plan Silver con duración trimestral. Más tiempo, más ventajas. ¡Únete a la exclusividad!', '/src/assets/image_silver.jpg'),
('Gold', 49.99, 'Experimenta la grandeza con nuestro plan Gold con duración semestral. Funciones avanzadas y soporte prioritario. ¡Hazte Gold hoy mismo!', '/src/assets/image_gold.jpg'),
('Premium', 79.99, 'La cima de la experiencia. Nuestro plan Premium con duración anual te brinda acceso a todas las características. ¡Vive la excelencia con Premium!', '/src/assets/image_premium.jpgl');


INSERT INTO gym (name, address, phone, email, horary)
VALUES
('Fitness Center A', '123 Main St', '555-1234', 'info@fitnesscentera.com', '8:00 AM - 9:00 PM'),
('Gym Plus', '456 Oak St', '555-5678', 'info@gymplus.com', '6:00 AM - 10:00 PM'),
('FitHub', '789 Pine St', '555-8765', 'info@fithub.com', '7:00 AM - 8:00 PM'),
('Flex Fitness', '101 Cedar St', '555-4321', 'info@flexfitness.com', '9:00 AM - 7:00 PM'),
('Powerhouse Gym', '202 Elm St', '555-9876', 'info@powerhousegym.com', '5:00 AM - 11:00 PM');




INSERT INTO sports (name, description)
VALUES 
('Boxing', 'Combat sport in which two people fight using only their fists.'),
('Judo', 'Japanese combat sport based on throwing and grappling techniques.'),
('Karate', 'Japanese martial art focusing on strikes with hands and feet.'),
('Muay Thai', 'Thai martial art known as "the art of eight limbs" for its use of hands, legs, elbows, and knees.'),
('Wrestling', 'Combat sport in which two wrestlers compete using grappling techniques.'),
('Kickboxing', 'Combat sport that combines techniques from boxing with kicks from martial arts.'),
('Taekwondo', 'Korean martial art characterized by its high kicks and leg techniques.'),
('Mixed Martial Arts (MMA)', 'Combat sport allowing the use of techniques from various martial arts disciplines.'),
('Sumo', 'Traditional Japanese wrestling sport where two wrestlers try to force each other out of a ring.'),
('Wushu', 'Chinese term for martial arts and combat sports.');

INSERT INTO user (name, surname, username, password, address, type, status, gender, email, worker_id, dni, job_title_worker, phone_num, client_id, credit_card, birthday, url_img, plan_id) 
VALUES
('John', 'Doe', 'john_doe', 'password123', '123 Main St', 1, 1, 'Male', 'john.doe@example.com', 101, '123456789', 'Manager', '555-1234', NULL, '1234-5678-9012-3456', '1990-01-15', 'http://example.com/johndoe.jpg', 1),
('Alice', 'Smith', 'alice_smith', 'pass123', '456 Oak St', 2, 1, 'Female', 'alice.smith@example.com', NULL, '987654321', NULL, '555-5678', 201, '9876-5432-1098-7654', '1985-05-20', 'http://example.com/alicesmith.jpg', 2),
('Bob', 'Johnson', 'bob_johnson', 'securepass', '789 Pine St', 1, 0, 'Male', 'bob.johnson@example.com', 102, '112233445', 'Supervisor', '555-8765', NULL, '6543-2109-8765-4321', '1978-11-03', 'http://example.com/bobjohnson.jpg', 3),
('Eva', 'Williams', 'eva_williams', 'eva_pass', '101 Cedar St', 2, 1, 'Female', 'eva.williams@example.com', NULL, '334455667', NULL, '555-4321', 203, '8765-4321-0987-5678', '1993-08-08', 'http://example.com/evawilliams.jpg', 1),
('Michael', 'Lee', 'michael_lee', 'pass4321', '202 Elm St', 1, 1, 'Male', 'michael.lee@example.com', 103, '889900011', 'Analyst', '555-9876', NULL, '4321-0987-7654-3210', '1982-04-25', 'http://example.com/michaellee.jpg', 2),
('Laura', 'Anderson', 'laura_anderson', 'laura_pass', '303 Maple St', 2, 1, 'Female', 'laura.anderson@example.com', NULL, '556677889', NULL, '555-3456', 204, '7654-3210-9876-5432', '1995-02-12', 'http://example.com/lauraanderson.jpg', 3),
('Daniel', 'Brown', 'daniel_brown', 'passDaniel', '404 Birch St', 1, 0, 'Male', 'daniel.brown@example.com', 104, '1122334455', 'Technician', '555-6543', NULL, '8765-4321-2345-6789', '1989-07-30', 'http://example.com/danielbrown.jpg', 1),
('Sophie', 'Clark', 'sophie_clark', 'sophie123', '505 Oak St', 2, 1, 'Female', 'sophie.clark@example.com', NULL, '223344556', NULL, '555-7654', 205, '2345-6789-0123-4567', '1998-09-18', 'http://example.com/sophieclark.jpg', 2),
('Ryan', 'Evans', 'ryan_evans', 'ryan_pass', '606 Pine St', 1, 1, 'Male', 'ryan.evans@example.com', 105, '778899001', 'Assistant', '555-8765', NULL, '5678-9012-3456-7890', '1984-12-05', 'http://example.com/ryanevans.jpg', 3),
('Emma', 'Fisher', 'emma_fisher', 'emma_pass', '707 Cedar St', 2, 1, 'Female', 'emma.fisher@example.com', NULL, '1122334455', NULL, '555-9876', 206, '8901-2345-6789-0123', '1990-06-23', 'http://example.com/emmafisher.jpg', 1),
('David', 'Garcia', 'david_garcia', 'davidpass', '808 Elm St', 1, 1, 'Male', 'david.garcia@example.com', 106, '3344556677', 'Coordinator', '555-5432', NULL, '3456-7890-1234-5678', '1987-03-15', 'http://example.com/davidgarcia.jpg', 2),
('Olivia', 'Hall', 'olivia_hall', 'passolivia', '909 Maple St', 2, 1, 'Female', 'olivia.hall@example.com', NULL, '8899001122', NULL, '555-6543', 207, '6789-0123-4567-8901', '1992-10-08', 'http://example.com/oliviahall.jpg', 3),
('Henry', 'Irwin', 'henry_irwin', 'henrypass', '101 Pine St', 1, 1, 'Male', 'henry.irwin@example.com', 107, '3344556677', 'Trainer', '555-7654', NULL, '1234-5678-9012-3456', '1986-06-20', 'http://example.com/henryirwin.jpg', 1),
('Sophia', 'Johnson', 'sophia_johnson', 'sophiapass', '202 Oak St', 2, 1, 'Female', 'sophia.johnson@example.com', NULL, '1122334455', NULL, '555-8765', 208, '4567-8901-2345-6789', '1994-04-02', 'http://example.com/sophiajohnson.jpg', 2),
('Ethan', 'King', 'ethan_king', 'ethanpass', '303 Birch St', 1, 0, 'Male', 'ethan.king@example.com', 108, '2233445566', 'Assistant', '555-9876', NULL, '7890-1234-5678-9012', '1997-12-12', 'http://example.com/ethanking.jpg', 3);


INSERT INTO class (coach, max_students, sports_id)
VALUES
('Alex Smith', 20, 1),  
('Emily Johnson', 15, 2),
('Daniel Martinez', 10, 3),
('Sophia Brown', 18, 4),
('Matthew Taylor', 25, 5),
('Olivia White', 12, 6),
('David Anderson', 15, 7),
('Emma Davis', 10, 8),
('Christopher Wilson', 20, 9),
('Ava Thompson', 15, 10);

INSERT INTO federation (name, region, num_members, type_sport_federation)
VALUES
('World Boxing Federation', 'International', 100, 'Boxing'),
('International Judo Federation', 'International', 500, 'Judo'),
('World Karate Federation', 'International', 200, 'Karate'),
('International Muay Thai Federation', 'International', 300, 'Muay Thai'),
('International Wrestling Federation', 'International', 150, 'Wrestling'),
('World Kickboxing Federation', 'International', 400, 'Kickboxing'),
('World Taekwondo Federation', 'International', 2500, 'Taekwondo'),
('International Mixed Martial Arts Federation (IMMAF)', 'International', 1800, 'Mixed Martial Arts (MMA)'),
('International Sumo Federation', 'International', 1200, 'Sumo'),
('World Wushu Federation', 'International', 800, 'Wushu');

INSERT INTO sports_has_federation (sports_id, federation_id)
VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5),
(6, 6),
(7, 7),
(8, 8),
(9, 9),
(10, 10);

INSERT INTO federation_rol (rol, federation_id) VALUES
('President', 1),
('Secretary', 1),
('Treasurer', 1),
('Coordinator', 2),
('Supervisor', 2),
('Event Organizer', 3),
('Member Liaison', 3),
('Public Relations Officer', 4),
('Financial Manager', 4),
('Head Coach', 5),
('Sports Coordinator', 5);

INSERT INTO gym_has_user (gym_id, user_id)
VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5),
(1, 6),
(2, 7),
(3, 8),
(4, 9),
(5, 10);




