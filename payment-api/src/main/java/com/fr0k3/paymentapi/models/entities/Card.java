package com.fr0k3.paymentapi.models.entities;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.time.YearMonth;

@Data
@AllArgsConstructor
public class Card {
    private String cardholder;
    private String cardNumber;
    private YearMonth expiryDate;
    private int cvv;
}
