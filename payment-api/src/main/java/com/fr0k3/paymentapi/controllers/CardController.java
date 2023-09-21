package com.fr0k3.paymentapi.controllers;

import com.fr0k3.paymentapi.models.dtos.CardDTO;
import com.fr0k3.paymentapi.models.dtos.MessageDTO;
import com.fr0k3.paymentapi.utils.ErrorHandler;
import com.fr0k3.paymentapi.utils.LuhnsAlgorithm;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.time.YearMonth;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class CardController {

    @Autowired
    ErrorHandler errorHandler;

    @Autowired
    LuhnsAlgorithm luhnsAlgorithm;

    @PostMapping("/card")
    public ResponseEntity<?> creditCard(@RequestBody @Valid CardDTO info, BindingResult validations) {

        if (validations.hasErrors())
            return new ResponseEntity<>(errorHandler.mapErrors(validations.getFieldErrors()), HttpStatus.BAD_REQUEST);

        // Get first and second digit in Card Number
        if (info.getCardNumber().substring(0, 2).equals("34")) {
            // American Express CVV validation (4 digits long)
            if (Integer.toString(info.getCvv()).length() != 4)
                return new ResponseEntity<>(new MessageDTO("CVV must contain 4 digits long"), HttpStatus.BAD_REQUEST);
        } else {
            // CVV validation (3 digits long)
            if (Integer.toString(info.getCvv()).length() != 3)
                return new ResponseEntity<>(new MessageDTO("CVV must contain 3 digits long"), HttpStatus.BAD_REQUEST);
        }

        // PAN (card number) digits long validation
        if (info.getCardNumber().length() < 16 || info.getCardNumber().length() > 19)
            return new ResponseEntity<>(new MessageDTO("PAN (card number) must be between 16 and 19 digits long"), HttpStatus.BAD_REQUEST);

        // Luhn's algorithm validation
        if (!luhnsAlgorithm.validateCardNumber(info.getCardNumber()))
            return new ResponseEntity<>(new MessageDTO("Invalid card :("), HttpStatus.BAD_REQUEST);

        return new ResponseEntity<>(new MessageDTO("Your card is valid :)"), HttpStatus.OK);
    }

}
