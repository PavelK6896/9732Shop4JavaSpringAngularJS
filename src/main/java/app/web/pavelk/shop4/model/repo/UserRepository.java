package app.web.pavelk.shop4.model.repo;


import app.web.pavelk.shop4.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
//    <T> T findByPhone(String phone, Class<T> type);
    Optional<User> findByPhone(String phone);
}
