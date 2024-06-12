package org.example.biblenetbackend.jpa;

import org.example.biblenetbackend.verse.Folder;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FolderRepository extends JpaRepository<Folder, Integer> {

}
