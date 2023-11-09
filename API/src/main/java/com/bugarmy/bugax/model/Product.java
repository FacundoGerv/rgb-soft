package com.bugarmy.bugax.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity(name = "product")
@Table(name = "product")
public class Product {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

    @Column
	private String title;
    
    @Column
    private String category;
    
    @Column
    private String memoryRam;
    
    @Column
    private String color;
    
    @Column
    private String camera;
    
    @Column
    private String screen;
   
    @Column
    private String batery;
    
    @Column
    private String cpu;
    
    @Column
    private String image;
    
    @Column
	private String desciption;
    
    @Column
	private float price;

	public long getId() {
		return id;
	}

	public String getTitle() {
		return title;
	}

	public String getCategory() {
		return category;
	}

	public String getMemoryRam() {
		return memoryRam;
	}

	public String getColor() {
		return color;
	}

	public String getCamera() {
		return camera;
	}

	public String getScreen() {
		return screen;
	}

	public String getBatery() {
		return batery;
	}

	public String getCpu() {
		return cpu;
	}

	public String getImage() {
		return image;
	}

	public String getDesciption() {
		return desciption;
	}

	public float getPrice() {
		return price;
	}
	
}
