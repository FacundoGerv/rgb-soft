package com.bugarmy.bugax.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bugarmy.bugax.model.Product;
import com.bugarmy.bugax.repository.ProductRepository;

@Service
public class ProductService {
	@Autowired
	private ProductRepository productRepository;
	
	
	public Product ceateProduct(Product product) {
		return productRepository.save(product);
	}
	
	public List<Product> getAllProduct(){
		return productRepository.findAll();
	}

}
