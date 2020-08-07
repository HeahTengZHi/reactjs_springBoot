package com.reactspring.bookrestapi.service;

import java.util.Collection;

import com.reactspring.bookrestapi.domain.Book;

public interface BookService {
	
	
	Collection<Book> findAll();
	
	Book findByID(Long id);
	
	Book deleteByID(Long id);
	Book save(Book book);
	Book update(Book book);
	
}
