package org.example.biblenetbackend.jpa;

import org.example.biblenetbackend.verse.Verse;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VerseRepository extends JpaRepository <Verse, Integer> {
}
