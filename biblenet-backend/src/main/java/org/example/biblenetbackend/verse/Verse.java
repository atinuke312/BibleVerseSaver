package org.example.biblenetbackend.verse;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;

import java.util.List;

@Entity
public class Verse {

    private @Id @GeneratedValue Integer id;

    private String text;

    private String bookName;



    private Integer chapter;

    private Integer verse;
    @ManyToMany
    private List<Folder> folder;
protected Verse(){}
    public Verse(Integer id, String text, String bookName, Integer chapter, Integer verse, List<Folder> folder) {
        this.id = id;
        this.text = text;
        this.bookName = bookName;
        this.chapter = chapter;
        this.verse = verse;
        this.folder = folder;
    }

    @Override
    public String toString() {
        return "Verse{" +
                "id=" + id +
                ", text='" + text + '\'' +
                ", bookName='" + bookName + '\'' +
                ", chapter=" + chapter +
                ", verse=" + verse +
                ", folder=" + folder +
                '}';
    }

}
