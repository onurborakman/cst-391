package com.milestone.project.services.data;

import com.milestone.project.models.Note;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
//JPA Repository that extends to the JPA Repository for the built-in functions
@Repository
public interface NoteDAO extends JpaRepository<Note, Long>{ }
