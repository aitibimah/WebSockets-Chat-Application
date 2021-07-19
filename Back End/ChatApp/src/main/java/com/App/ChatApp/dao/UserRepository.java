package com.App.ChatApp.dao;

import com.App.ChatApp.entity.UProfile;
import com.App.ChatApp.entity.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import javax.validation.constraints.NotBlank;
import java.util.Optional;


@Repository
public interface UserRepository extends CrudRepository<User, Long> {

    Optional<User> findByProfile(UProfile profile);


    User findUserById(Long aLong);

    @Override
    Iterable<User> findAll();



    User findByUsername(String username);

    User getById(Long id);

    Iterable<User> findByProfileFirstNameLikeOrProfile_LastNameLike(String profile_firstName, String profile_lastName);



}
