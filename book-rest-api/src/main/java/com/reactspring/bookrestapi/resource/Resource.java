package com.reactspring.bookrestapi.resource;

import java.util.Collection;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;

import com.reactspring.bookrestapi.domain.Book;

public interface Resource <T> {

	@GetMapping
	public ResponseEntity<Collection<T>> findAll();
	
	@GetMapping("{id}")
	public ResponseEntity<T> findByID(@PathVariable Long id);
	
	@DeleteMapping("{id}")
	public ResponseEntity<T> deleteByID(@PathVariable Long id);
	
	@PostMapping (consumes=MediaType.APPLICATION_JSON_UTF8_VALUE)
	public ResponseEntity<T> save(Book book);
	
	@PutMapping (consumes=MediaType.APPLICATION_JSON_UTF8_VALUE)
	public ResponseEntity<T> update(Book book);
	
}
