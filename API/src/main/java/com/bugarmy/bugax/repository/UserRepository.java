package com.bugarmy.bugax.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bugarmy.bugax.model.User;

public interface UserRepository extends JpaRepository<User, Long>{

}
