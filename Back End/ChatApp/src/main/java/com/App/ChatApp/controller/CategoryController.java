package com.App.ChatApp.controller;


import com.App.ChatApp.entity.Category;
import com.App.ChatApp.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/category")
@CrossOrigin
public class CategoryController {


    @Autowired
    private CategoryService categoryService;


    @GetMapping("/all")
    public Iterable<Category> getAllcategories(){

        return categoryService.findAllCategoies();

    }


    @GetMapping("/name={name}")
    public Iterable<Category> getCategoryById(@PathVariable String name){

        return categoryService.findAllCategoryByName(name);
    }




    @GetMapping("/{id}")
    public ResponseEntity<?> getCategoryById(@PathVariable Long id){

        Category cat = categoryService.findCategoryById(id).get();

        return new ResponseEntity<Category>(cat, HttpStatus.OK) ;

    }

}
