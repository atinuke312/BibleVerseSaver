package org.example.biblenetbackend.jwt;

public record JwtTokenRequest(String username,
                              String password) {
}
