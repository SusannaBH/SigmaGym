package com.backend.services;

import java.util.Iterator;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.backend.entities.ClassEntity;
import com.backend.entities.GymEntity;
import com.backend.entities.UserEntity;
import com.backend.repository.ClassRepository;
import com.backend.repository.GymRepository;
import com.backend.repository.UserRepository;

@Service
public class ClassService {
	private final ClassRepository classRepository;

	public ClassService(ClassRepository classRepository) {
		this.classRepository = classRepository;
	}

	/**
	 * @author Fernando Alaejos
	 * @param none
	 * @return list of gymentity
	 */
	public List<ClassEntity> findAllClasses() {
		return classRepository.findAll();
	}

	public Optional<ClassEntity> findClassById(Integer id) {
		return classRepository.findById(id);
	}

	// Esta función hay que retocarla
	public boolean addClass(@RequestBody ClassEntity classEntity) {
		// guardamos la lista de usuarios
		List<ClassEntity> listClasses = findAllClasses();
		boolean isValidClass = true;

		// Miramos si hay algun usuario con el mismo dni o username
		// en ese caso no es valido el usuario introducido
		for (ClassEntity classe : listClasses) {
			if (classEntity.getId() == classe.getId()) {
				isValidClass = false;
				return isValidClass;
			}
		}

		classRepository.save(classEntity);
		return isValidClass;
	}

	/**
	 * @author Fernando Alaejos Garcia
	 * @param id it's thSe primary key for the register
	 * @return true = deleted or false = not found
	 */
	public boolean deleteClass(Integer id) {
		Optional<ClassEntity> checkIfExistClass = findClassById(id);
		classRepository.deleteById(id);
		return checkIfExistClass.isPresent();
	}

	// Creamos dos tres metodos para modificar el numero de personas is

	// inscritas a una una classe y el numero maximo permitido
	public Integer numberMaxOfStudentsById(Integer id) {
		List<ClassEntity> classes = findAllClasses();
		Integer max =0;

		for (ClassEntity classe : classes) {
			if(classe.getId() == id) {
				max = classe.getMax_students();
			}
			
		}
		return max;
	}
}
