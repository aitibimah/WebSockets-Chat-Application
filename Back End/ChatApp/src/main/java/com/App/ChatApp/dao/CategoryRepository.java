package com.App.ChatApp.dao;

import com.App.ChatApp.entity.Category;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;


@Repository
public interface CategoryRepository  extends CrudRepository<Category, Long> {


    Iterable <Category> findAllByName(String name);


    @Override
    Optional<Category> findById(Long id);
}
