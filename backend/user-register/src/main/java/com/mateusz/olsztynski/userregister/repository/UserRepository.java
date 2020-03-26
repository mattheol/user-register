package com.mateusz.olsztynski.userregister.repository;

import com.mateusz.olsztynski.userregister.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface UserRepository extends JpaRepository<User,Integer> {
    @Query(value = "select * from users where username=?1",nativeQuery = true)
    public User findByUsername(String username);

    @Query(value = "select * from users where email=?1",nativeQuery = true)
    public User findByEmail(String email);
}
