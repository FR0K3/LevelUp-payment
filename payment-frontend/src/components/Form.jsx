import useCard from "../hooks/useCard";
import { BsCreditCard2BackFill, BsCalendarFill } from 'react-icons/bs'
import { BiSolidUser, BiSolidLockAlt } from 'react-icons/bi'


const Form = () => {
    const {
        handleCardholder,
        handleCardNumber,
        handleExpiryDate,
        handleCvv,
        handleFocus,
        cardholder,
        cardNumber,
        expiryDate,
        cvv,
        handleSubmit
    } = useCard();

    return (
        <form
            className="flex flex-col w-full gap-3 px-5 font-PublicSans text-lg"
            onSubmit={(e) => handleSubmit(e)}
        >
            <div className="flex flex-col">
                <label htmlFor="card-number" className="text-gray-600 uppercase text-sm font-semibold">
                    Card number
                </label>

                <div className="relative">
                    <BsCreditCard2BackFill
                        className="absolute text-gray-300 bottom-3 left-2"
                    />

                    <input
                        id="card-number"
                        placeholder="0000 0000 0000 0000"
                        type="text"
                        className="w-full border-2 border-gray-300 rounded-md p-1 pl-8 focus:outline-sky-600"
                        name="number"
                        onChange={(e) => handleCardNumber(e)}
                        onFocus={(e) => handleFocus(e)}
                        value={cardNumber}
                    />
                </div>
            </div>

            <div className="flex flex-col">
                <label htmlFor="name" className="text-gray-600 uppercase text-sm font-semibold">
                    Name
                </label>

                <div className="relative">
                    <BiSolidUser
                        className="absolute text-gray-300 bottom-3 left-2"
                    />

                    <input
                        id="name"
                        placeholder="John Doe"
                        type="text"
                        className="w-full border-2 border-gray-300 rounded-md p-1 pl-8 focus:outline-sky-600"
                        name="name"
                        onChange={(e) => handleCardholder(e)}
                        onFocus={(e) => handleFocus(e)}
                        value={cardholder}
                    />
                </div>
            </div>

            <div className="flex justify-between gap-20">
                <div className="flex flex-col">
                    <label htmlFor="month" className="text-gray-600 uppercase text-sm font-semibold">
                        Expires
                    </label>

                    <div className="relative">
                        <BsCalendarFill
                            className="absolute text-gray-300 bottom-3 left-2"
                        />
                        <input
                            id="expiry"
                            placeholder="MM/YY"
                            type="text"
                            className="w-full border-2 border-gray-300 rounded-md p-1 pl-8 focus:outline-sky-600"
                            name="expiry"
                            onChange={(e) => handleExpiryDate(e)}
                            onFocus={(e) => handleFocus(e)}
                            value={expiryDate}
                        />
                    </div>
                </div>

                <div className="flex flex-col">
                    <label htmlFor="cvc" className="text-gray-600 uppercase text-sm font-semibold">
                        CVV
                    </label>

                    <div className="relative">
                        <BiSolidLockAlt
                            className="absolute text-gray-300 bottom-3 left-2"
                        />

                        <input
                            id="cvc"
                            placeholder="***"
                            type="password"
                            className="w-full border-2 border-gray-300 rounded-md p-1 pl-8 focus:outline-sky-600"
                            name="cvc"
                            onChange={(e) => handleCvv(e)}
                            onFocus={(e) => handleFocus(e)}
                            value={cvv}
                        />
                    </div>
                </div>
            </div>

            <input
                type="submit"
                value="Proceed to payment"
                className="w-full font-semibold bg-sky-800 hover:bg-sky-900 cursor-pointer rounded-lg text-white p-2 mt-3"
            />
        </form>
    )
}

export default Form