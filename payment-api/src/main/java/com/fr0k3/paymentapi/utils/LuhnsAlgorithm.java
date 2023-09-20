package com.fr0k3.paymentapi.utils;

import org.springframework.stereotype.Component;

@Component
public class LuhnsAlgorithm {

    public boolean validateCardNumber(String cardNumber) {
        int result = 0;

        for (int i = cardNumber.length() - 1; i >= 0; i--) {

            // Select every single digit in the pan
            int d = Integer.parseInt(cardNumber.substring(i, i + 1));

            // If it's an even position it will multiply that digit by 2
            if ((cardNumber.length() - i) % 2 == 0) {
                d = d * 2;

                // But if the product is greater than 9, the digits of the product must be added
                if (d > 9)
                    d = Integer.parseInt(Integer.toString(d).substring(0, 1)) + Integer.parseInt(Integer.toString(d).substring(1, 2));
            }

            // All the digits must be added
            result += d;
        }

        // If result is module of 10 the card is valid
        return result % 10 == 0;
    }
}
