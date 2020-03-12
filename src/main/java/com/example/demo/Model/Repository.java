package com.example.demo.Model;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface Repository extends CrudRepository<GameUser, Long> {

        @Query("select u from GameUser u where u.username = ?1")
        List<GameUser> findByUsername(String firstname);
}
