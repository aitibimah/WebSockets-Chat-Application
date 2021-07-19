package com.App.ChatApp.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import java.util.Collection;
import java.util.Date;
import java.util.List;


@Entity
@Table(name="user")
public class User implements UserDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "profile_id", referencedColumnName = "id")
    private UProfile profile;

    @Email(message = "Username needs to be an email")
    @NotBlank(message = "username is required")
    @Column(unique = true)
    private String username;


    @NotBlank(message = "Password field is required")
    private String password;


    @Transient
    private String confirmPassword;

    @Column(name = "verified")
    private boolean verified;

    @Column(name = "isActive")
    private boolean isActive;


    private Date create_At;
    private Date update_At;



    //@JsonIgnore
    //@OneToMany(targetEntity = Contact.class, mappedBy = "UserOner", cascade = CascadeType.ALL)
    //private List<Contact> contactList;


    @JsonIgnore
    @ManyToMany
    @JoinTable( name = "T_Users_Contact_Associations",
            joinColumns = @JoinColumn( name = "idUser" ),
            inverseJoinColumns = @JoinColumn( name = "idContact" ) )
    private List<Contact> contactList;




    @JsonIgnore
    @OneToMany(targetEntity = ChatGroup.class, mappedBy = "owner", cascade = CascadeType.ALL)
    private List<ChatGroup> ownerGroups;

    @JsonIgnore
    @OneToMany(targetEntity = Conversation.class, mappedBy = "id", cascade = CascadeType.ALL)
    private List<Conversation> conversationList;


    @JsonIgnore
    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable( name = "T_Users_Group_Associations",
            joinColumns = @JoinColumn( name = "idUser" ),
            inverseJoinColumns = @JoinColumn( name = "idGroup" ) )
    private List<ChatGroup> groupsList ;


    public User() {
    }

    @PrePersist
    protected void onCreate(){
        this.create_At = new Date();
    }

    @PreUpdate
    protected void onUpdate(){
        this.update_At = new Date();
    }

    /*
    UserDetails interface methods
     */

    @Override
    @JsonIgnore
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return null;
    }

    @Override
    @JsonIgnore
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    @JsonIgnore
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    @JsonIgnore
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    @JsonIgnore
    public boolean isEnabled() {
        return isActive;
    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public UProfile getProfile() {
        return profile;
    }

    public void setProfile(UProfile profile) {
        this.profile = profile;
    }

    @Override
    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    @Override
    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getConfirmPassword() {
        return confirmPassword;
    }

    public void setConfirmPassword(String confirmPassword) {
        this.confirmPassword = confirmPassword;
    }

    public boolean isVerified() {
        return verified;
    }

    public void setVerified(boolean verified) {
        this.verified = verified;
    }

    public boolean isActive() {
        return isActive;
    }

    public void setActive(boolean active) {
        isActive = active;
    }

    public Date getCreate_At() {
        return create_At;
    }

    public void setCreate_At(Date create_At) {
        this.create_At = create_At;
    }

    public Date getUpdate_At() {
        return update_At;
    }

    public void setUpdate_At(Date update_At) {
        this.update_At = update_At;
    }

    public List<Contact> getContactList() {
        return contactList;
    }

    public void setContactList(List<Contact> contactList) {
        this.contactList = contactList;
    }

    public List<ChatGroup> getOwnerGroups() {
        return ownerGroups;
    }

    public void setOwnerGroups(List<ChatGroup> ownerGroups) {
        this.ownerGroups = ownerGroups;
    }

    public List<Conversation> getConversationList() {
        return conversationList;
    }

    public void setConversationList(List<Conversation> conversationList) {
        this.conversationList = conversationList;
    }

    public List<ChatGroup> getGroupsList() {
        return groupsList;
    }

    public void setGroupsList(List<ChatGroup> groupsList) {
        this.groupsList = groupsList;
    }



    public List<Contact> addContact(Contact c){
        this.getContactList().add(c);
        return this.getContactList();
    }
}
