package org.example.biblenetbackend.verse;

import jakarta.persistence.*;

import java.util.List;

@Entity
public class Folder {

    private @Id
    @GeneratedValue Integer id;

    private String name;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "folder")
    private List<Verse> verse;

    protected Folder(){}

    public Folder(Integer id, String name, List<Verse> verse) {
        super();
        this.id = id;
        this.name = name;
        this.verse = verse;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Verse> getVerse() {
        return verse;
    }

    public void setVerse(List<Verse> verse) {
        this.verse = verse;
    }
}
