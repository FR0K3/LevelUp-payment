import { createContext, useState } from 'react'
import { toast } from 'react-toastify';
import axios from 'axios';

const CardContext = createContext();

const CardProvider = ({ children }) => {
    const [cardholder, setCardholder] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [expiryDate, setExpiryDate] = useState("");
    const [cvv, setCvv] = useState("");
    const [focus, setFocus] = useState("");

    // Handlers for changing form fields
    const handleCardholder = (e) => {
        setCardholder(e.target.value);
    }

    const handleCardNumber = (e) => {
        let value = e.target.value;

        // Not more than 19 characters
        if (value.replace(/\s/g, '').length > 19) return;

        // Format number with spaces every 4 digits 
        const formattedValue = value.replace(/[^0-9]/g, '').replace(/([0-9]{4})/g, '$1 ').trim();

        setCardNumber(formattedValue);
    }

    const handleExpiryDate = (e) => {
        let value = e.target.value;
        const formattedValue = value.replace(/[^0-9]/g, '').replace(/^(\d{2})(\d)/, '$1/$2').substring(0, 5);

        setExpiryDate(formattedValue);
    }

    const handleCvv = (e) => {
        let value = e.target.value;

        // CVV validation to allow only numbers and not to have more than 4 digits
        const formattedValue = value.replace(/[^0-9]/g, '').substring(0, 4);

        setCvv(formattedValue);
    }

    const handleFocus = (e) => {
        setFocus(e.target.name);
    }

    // Submit function
    const handleSubmit = async (e) => {
        e.preventDefault();

        if ([cardNumber, cardholder, expiryDate, cvv].includes("")) {
            toast.error("All fields are required");
            return;
        }

        try {
            const url = "http://localhost:8080/api/card";
            const [month, year] = expiryDate.split('/');

            const { data } = await axios.post(url, {
                cardholder,
                cardNumber: cardNumber.replace(/\s/g, ''),
                expiryDate: `20${year}-${month}`,
                cvv
            });

            toast.success(data.message);

        } catch (err) {
            toast.error(err.response.data.message);
        }
    }

    return (
        <CardContext.Provider
            value={{
                cardholder,
                handleCardholder,
                cardNumber,
                handleCardNumber,
                expiryDate,
                handleExpiryDate,
                cvv,
                handleCvv,
                focus,
                handleFocus,
                handleSubmit
            }}
        >
            {children}
        </CardContext.Provider>
    )
}

export {
    CardProvider
}

export default CardContext 