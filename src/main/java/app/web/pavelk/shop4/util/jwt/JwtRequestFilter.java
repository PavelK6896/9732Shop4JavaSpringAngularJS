package app.web.pavelk.shop4.util.jwt;


import app.web.pavelk.shop4.exceptions.JwtAuthenticationException;
import app.web.pavelk.shop4.service.UserDetailsServiceImpl;
import io.jsonwebtoken.ExpiredJwtException;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Profile;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Component
public class JwtRequestFilter extends OncePerRequestFilter {
    private  UserDetailsServiceImpl userDetailsService;
    private  JwtTokenProvider jwtTokenProvider;

    @Autowired
    public void setUserDetailsService(UserDetailsServiceImpl userDetailsService) {
        this.userDetailsService = userDetailsService;
    }

    @Autowired
    public void setJwtTokenProvider(JwtTokenProvider jwtTokenProvider) {
        this.jwtTokenProvider = jwtTokenProvider;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request,
                                    HttpServletResponse response,
                                    FilterChain filterChain) throws ServletException, IOException {

        String authHeader = request.getHeader("Authorization");

        String username = null;
        String jwt = null;
        if (authHeader != null && authHeader.startsWith("Bearer ")) {
            jwt = authHeader.substring(7);
            try {
                username = jwtTokenProvider.getUsername(jwt);
            } catch (ExpiredJwtException ex) {
                System.out.println("Token is invalid: " + ex.getMessage());
                response.sendError(HttpServletResponse.SC_UNAUTHORIZED, "{ msg: The token is expired }");
                return;
            }
            if (username != null && SecurityContextHolder.getContext().getAuthentication() == null) {
                try {
                    Authentication authentication = jwtTokenProvider.getAuthentication(jwt);
                    if (authentication != null) {
                        SecurityContextHolder.getContext().setAuthentication(authentication);
                    }
                } catch (JwtAuthenticationException e) {
                    SecurityContextHolder.clearContext();
                    response.sendError(e.getHttpStatus().value());
                    throw new JwtAuthenticationException("JWT token is expired or invalid");
                }
            }
        }
        filterChain.doFilter(request, response);
    }


}



























