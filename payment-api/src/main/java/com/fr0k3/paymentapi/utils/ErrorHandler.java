package com.fr0k3.paymentapi.utils;

import org.springframework.stereotype.Component;
import org.springframework.validation.FieldError;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Component
public class ErrorHandler {
    public Map<String, String> mapErrors(List<FieldError> fieldErrors) {
        Map<String, String> errors = new HashMap<>();

        fieldErrors.stream()
                .forEach(error -> {
                    errors.put("message", error.getDefaultMessage());
                });

        return errors;
    }

}
