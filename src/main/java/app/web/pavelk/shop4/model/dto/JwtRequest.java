package app.web.pavelk.shop4.model.dto;

import lombok.Data;

@Data
public class JwtRequest {
    private String username;
    private String password;
}
