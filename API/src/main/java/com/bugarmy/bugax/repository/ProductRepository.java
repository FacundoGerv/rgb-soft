package com.bugarmy.bugax.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bugarmy.bugax.model.Product;

public interface ProductRepository extends JpaRepository<Product, Long>{
	

}