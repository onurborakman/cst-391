package com.milestone.project.services.data;

import com.milestone.project.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
//JPA Repository that extends to the JPA Repository for the built-in functions
@Repository
public interface UserDAO extends JpaRepository<User, Long> { }
