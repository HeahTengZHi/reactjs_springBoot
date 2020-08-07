package com.reactspring.bookrestapi.service;

import java.util.Collection;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

import org.springframework.stereotype.Service;

import com.reactspring.bookrestapi.domain.Book;


@Service
public class BookServiceImpl implements BookService {

	private Long bookId=100L;
	
	private Map<Long,Book> bookMap=new ConcurrentHashMap<>();
	
	{
		Book book=new Book();
		book.setId(bookId);
		book.setTitle("Spring Boot Reactjs");
		book.setAuthor("Almighty Java");
		book.setCoverPhotoURL(null);
		book.setIsbnNumber(1617293989L);
		book.setPrice(22.22);
		book.setLanguage("English");
		bookMap.put(book.getId(), book);
	}
	
	@Override
	public Collection<Book> findAll() {
		// TODO Auto-generated method stub
		return bookMap.values();
	}

	@Override
	public Book findByID(Long id) {
		// TODO Auto-generated method stub
		return bookMap.get(id);
	}

	@Override
	public Book deleteByID(Long id) {
		if(bookMap.get(id)!=null) {
			return bookMap.remove(id);
		}
		return null;
	}

	@Override
	public Book save(Book book) {
		Long newBookId=++bookId;
		book.setId(newBookId);
		bookMap.put(book.getId(),book);
		return bookMap.get(newBookId);
	}

	@Override
	public Book update(Book book) {
		bookId=book.getId();
		if(bookMap.get(bookId)!=null) {
			bookMap.put(bookId, book);
			return bookMap.get(bookId);
		}
		return null;
	}

}
