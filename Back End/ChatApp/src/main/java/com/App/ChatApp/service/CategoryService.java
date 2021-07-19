package com.App.ChatApp.service;

import com.App.ChatApp.dao.CategoryRepository;
import com.App.ChatApp.entity.Category;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CategoryService {


    @Autowired
    private CategoryRepository categoryRepository;

    public Iterable <Category> findAllCategoies(){

        return categoryRepository.findAll();

    }


    public Iterable <Category> findAllCategoryByName(String name){

        return categoryRepository.findAllByName(name);


    }


    public Optional<Category> findCategoryById(Long id) {

        System.out.println("id = "+id);
        return categoryRepository.findById(id);
    }
}
