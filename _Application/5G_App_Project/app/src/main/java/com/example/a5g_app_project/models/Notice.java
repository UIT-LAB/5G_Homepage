package com.example.a5g_app_project.models;

import com.google.firebase.firestore.ServerTimestamp;
import java.util.Date;

public class Notice {

    private String documentId;
    private String name;
    private String title;
    private String contents;
    @ServerTimestamp
    private Date date;

    public Notice() {
    }

    public Notice(String documentId, String name, String title, String contents) {
        this.documentId = documentId;
        this.name = name;
        this.title = title;
        this.contents = contents;
    }

    public String getDocumentId() {
        return documentId;
    }

    public void setDocumentId(String documentId) {
        this.documentId = documentId;
    }

    public String getNicname() {
        return name;
    }

    public void setNicname(String nicname) {
        this.name = nicname;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContents() {
        return contents;
    }

    public void setContents(String contents) {
        this.contents = contents;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    @Override
    public String toString() {
        return "Notice{" +
                "documentId='" + documentId + '\'' +
                ", nicname='" + name + '\'' +
                ", title='" + title + '\'' +
                ", contents='" + contents + '\'' +
                ", date=" + date +
                '}';
    }
}
