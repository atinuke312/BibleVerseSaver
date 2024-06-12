package org.example.biblenetbackend.verse;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;

import java.util.List;

@Entity
public class Folder {

    private @Id
    @GeneratedValue Integer id;

    private String name;

    @ManyToMany
    private List<Verse> verse;

    protected Folder(){}

    public Folder(Integer id, String name, List<Verse> verse) {
        this.id = id;
        this.name = name;
        this.verse = verse;
    }

}
