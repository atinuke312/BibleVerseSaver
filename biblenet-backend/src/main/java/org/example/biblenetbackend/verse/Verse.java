package org.example.biblenetbackend.verse;

import jakarta.persistence.*;

@Entity
public class Verse {

    private @Id @GeneratedValue Integer id;

    private String text;

    @Column(name = "bookname")private String bookName;



    private Integer chapter;

    private Integer verse;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="folder_id")
    private Folder folder;
protected Verse(){}
    public Verse(Integer id, String text, String bookName, Integer chapter, Integer verse, Folder folder) {
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

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public String getBookName() {
        return bookName;
    }

    public void setBookName(String bookName) {
        this.bookName = bookName;
    }

    public Integer getChapter() {
        return chapter;
    }

    public void setChapter(Integer chapter) {
        this.chapter = chapter;
    }

    public Integer getVerse() {
        return verse;
    }

    public void setVerse(Integer verse) {
        this.verse = verse;
    }

    public Folder getFolder() {
        return folder;
    }

    public void setFolder(Folder folder) {
        this.folder = folder;
    }
}
