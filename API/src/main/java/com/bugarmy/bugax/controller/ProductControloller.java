package com.bugarmy.bugax.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bugarmy.bugax.model.Product;
import com.bugarmy.bugax.service.ProductService;
@RequestMapping("/product")
@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class ProductControloller {
	@Autowired
	private ProductService productService;
	
	@PostMapping
	public void createProduct(@RequestBody Product product) {
		productService.ceateProduct(product);
	}
	
	@GetMapping("get")
	public List<Product> getAllProducts() {
		return productService.getAllProduct();
		
	}
}
	


