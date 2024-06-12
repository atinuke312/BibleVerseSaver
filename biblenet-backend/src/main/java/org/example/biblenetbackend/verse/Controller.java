package org.example.biblenetbackend.verse;

import org.example.biblenetbackend.jpa.FolderRepository;
import org.example.biblenetbackend.jpa.VerseRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class Controller {
    private VerseRepository verseRepository;
    private FolderRepository folderRepository;
    public Controller(VerseRepository verseRepository, FolderRepository folderRepository) {
        this.verseRepository = verseRepository;
        this.folderRepository = folderRepository;
    }





}
