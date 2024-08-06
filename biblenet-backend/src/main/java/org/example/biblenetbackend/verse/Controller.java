package org.example.biblenetbackend.verse;

import org.example.biblenetbackend.jpa.FolderRepository;
import org.example.biblenetbackend.jpa.VerseRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class Controller {
    private VerseRepository verseRepository;
    private FolderRepository folderRepository;
    public Controller(VerseRepository verseRepository, FolderRepository folderRepository) {
        this.verseRepository = verseRepository;
        this.folderRepository = folderRepository;
    }

@GetMapping("/users/{username}/folders")
    public List<Folder>retrieveAllFolders(){
        return folderRepository.findAll();
}
    @PostMapping("/users/{username}/folders")
    public Folder addNewFolder(@PathVariable String username,@RequestBody Folder folder){
        return folderRepository.save(folder);
    }
    @GetMapping("/users/{username}/folders/{id}")
    public Folder retrieveFolder(@PathVariable String username, @PathVariable int id){
        return folderRepository.findById(id).get();
    }



//@PostMapping("/folders/${id}/verses")
//public Verse addVerses(@PathVariable String name, @RequestBody Verse verse, @RequestBody Folder folder){
//    Optional<Folder> folder = folderRepository.findById(id);
//    return verseRepository.save(verse);
//}



}
