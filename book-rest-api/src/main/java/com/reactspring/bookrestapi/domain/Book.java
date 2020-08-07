package com.reactspring.bookrestapi.domain;

public class Book {

	private long id;
	private String title;
	private String author;
	private String coverPhotoURL;
	private long isbnNumber;
	private double price;
	private String language;
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getAuthor() {
		return author;
	}
	public void setAuthor(String author) {
		this.author = author;
	}
	public String getCoverPhotoURL() {
		return coverPhotoURL;
	}
	public void setCoverPhotoURL(String coverPhotoURL) {
		this.coverPhotoURL = coverPhotoURL;
	}
	public long getIsbnNumber() {
		return isbnNumber;
	}
	public void setIsbnNumber(long isbnNumber) {
		this.isbnNumber = isbnNumber;
	}
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	public String getLanguage() {
		return language;
	}
	public void setLanguage(String language) {
		this.language = language;
	}
	
}
