package app.web.pavelk.shop4.model;

import app.web.pavelk.shop4.model.user.Role;
import app.web.pavelk.shop4.model.user.Status;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Data
@NoArgsConstructor
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "phone")
    private String phone;

    @Column(name = "password")
    private String password;

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    @Column(name = "email")
    private String email;

    @Enumerated(value = EnumType.STRING)
    @Column(name = "role1")
    private Role role;

    @Enumerated(value = EnumType.STRING)
    @Column(name = "status")
    private Status status;

//    @Embedded
//    @AttributeOverrides({//переопределяем имя
//            @AttributeOverride( name = "created_at", column = @Column(name = "created_at")),
//            @AttributeOverride( name = "updated_at", column = @Column(name = "updated_at"))
//    })
//    private DataTime dataTime;

    public String getFullName() {
        return String.format("%s %s", firstName, lastName);
    }
}
