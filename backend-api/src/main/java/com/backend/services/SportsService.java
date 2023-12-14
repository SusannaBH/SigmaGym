package com.backend.services;

import java.util.Iterator;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.backend.entities.SportsEntity;
import com.backend.entities.UserEntity;
import com.backend.repository.SportsRepository;
import com.backend.repository.UserRepository;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class SportsService {
	private final SportsRepository sportsRepository;

	public SportsService(SportsRepository sportsRepository) {
		this.sportsRepository = sportsRepository;
	}

	/**
	 * @author Fernando Alaejos
	 * @param none
	 * @return list of userentity
	 */
	public List<SportsEntity> findAllSports() {
		return sportsRepository.findAll();
	}

	public Optional<SportsEntity> findSportsById(Integer id) {
		return sportsRepository.findById(id);
	}

	public boolean addSports(@RequestBody SportsEntity sportsEntity) {
		// guardamos la lista de usuarios
		List<SportsEntity> listSports = findAllSports();
		boolean isValidSports = true;

		// Miramos si hay algun usuario con el mismo dni o username
		// en ese caso no es valido el usuario introducido
		for (SportsEntity sport : listSports) {
			if (sportsEntity.getId().equals(sport.getId()) || sportsEntity.getName().equals(sport.getName())) {
				isValidSports = false;
				System.out.println(isValidSports);
				return isValidSports;
			}
		}

		sportsRepository.save(sportsEntity);
		return isValidSports;
	}


	public boolean deleteSport(Integer id) {
		Optional<SportsEntity> checkIfExistSport =sportsRepository.findById(id);
		sportsRepository.deleteById(id);
		return checkIfExistSport.isPresent();
	}

	
}
