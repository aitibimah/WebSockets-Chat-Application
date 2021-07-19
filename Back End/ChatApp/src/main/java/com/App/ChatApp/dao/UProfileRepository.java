package com.App.ChatApp.dao;

import com.App.ChatApp.entity.UProfile;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;


@Repository
public interface UProfileRepository extends CrudRepository<UProfile, Long> {

    @Override
    Optional<UProfile> findById(Long aLong);
}
