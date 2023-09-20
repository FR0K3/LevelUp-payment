package com.fr0k3.paymentapi.models.dtos;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.validation.constraints.FutureOrPresent;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import lombok.Data;
import org.hibernate.validator.constraints.Length;

import java.time.YearMonth;

@Data
public class CardDTO {
    @NotEmpty(message = "Card holder is required")
    private String cardholder;

    @NotEmpty(message = "PAN (card number) is required")
    private String cardNumber;

    @NotNull(message = "Expiry date is required")
    @FutureOrPresent(message = "Expiry date must be after present time")
    private YearMonth expiryDate;

    @NotNull(message = "CVV is required")
    private int cvv;
}
