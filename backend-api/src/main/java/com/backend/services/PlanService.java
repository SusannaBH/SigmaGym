package com.backend.services;

import java.util.Iterator;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.backend.entities.FederacionEntity;
import com.backend.entities.GymEntity;
import com.backend.entities.PlanEntity;
import com.backend.entities.UserEntity;
import com.backend.repository.FederacionRepository;
import com.backend.repository.GymRepository;
import com.backend.repository.PlanRepository;
import com.backend.repository.UserRepository;

@Service
public class PlanService {
    private final PlanRepository planRepository;

    public PlanService(PlanRepository planRepository) {
        this.planRepository = planRepository;
    }
    
    /**
     * @author Fernando Alaejos
     * @param  none 
     * @return list of gymentity
     */
    public List<PlanEntity> findAllPlans() {
        return planRepository.findAll();
    }
    
    
    public Optional<PlanEntity> findPlanById(Integer id) {
    	return  planRepository.findById(id);
    }

}
