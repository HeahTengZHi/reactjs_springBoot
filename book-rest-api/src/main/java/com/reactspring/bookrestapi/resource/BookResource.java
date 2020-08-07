package com.reactspring.bookrestapi.resource;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.reactspring.bookrestapi.domain.Book;
import com.reactspring.bookrestapi.service.BookService;

@RestController
@RequestMapping("/books")
public class BookResource implements Resource {

	@Autowired
	private BookService bookService;
	
	@Override
	public ResponseEntity<Collection<Book>> findAll(){
		return new ResponseEntity<>(bookService.findAll(),HttpStatus.OK);
	}
	
	
	@Override
	public ResponseEntity<Book> findByID(@PathVariable Long id) {
		return new ResponseEntity<>(bookService.findByID(id),HttpStatus.OK);
	}

	@Override
	public ResponseEntity<Book> deleteByID(@PathVariable Long id) {
		return new ResponseEntity<>(bookService.deleteByID(id),HttpStatus.OK);
	}

	@Override
	public ResponseEntity<Book> save(Book book) {
		return new ResponseEntity<>(bookService.save(book),HttpStatus.CREATED);
	}

	@Override
	public ResponseEntity<Book> update(Book book) {
		return new ResponseEntity<>(bookService.update(book),HttpStatus.OK);
	}
	
	
}
