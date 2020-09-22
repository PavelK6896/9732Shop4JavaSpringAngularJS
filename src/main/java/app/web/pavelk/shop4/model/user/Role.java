package app.web.pavelk.shop4.model.user;

import org.springframework.security.core.authority.SimpleGrantedAuthority;

import java.util.Set;
import java.util.stream.Collectors;

public enum Role {
    USER(Set.of(Authority.READ)),
    ADMIN(Set.of(Authority.READ, Authority.WRITE));

    private final Set<Authority> permissions;

    Role(Set<Authority> permissions) {
        this.permissions = permissions;
    }

    public Set<Authority> getPermissions() {
        return permissions;
    }

    public Set<SimpleGrantedAuthority> getAuthorities() {
        return getPermissions().stream()
                .map(permission -> new SimpleGrantedAuthority(permission.getPermission()))
                .collect(Collectors.toSet());
    }
}
