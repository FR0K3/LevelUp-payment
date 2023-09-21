import 'react-credit-cards-2/dist/es/styles-compiled.css';
import Form from './components/Form'
import useCard from './hooks/useCard'
import ReactCreditCards from 'react-credit-cards-2';

function App() {
    const { cardholder, cardNumber, expiryDate, cvv, focus } = useCard();

    return (
        <main className="container mx-auto flex items-center h-screen font-PublicSans">

            <div className="w-11/12 lg:w-[65%] flex flex-col mx-auto bg-white rounded-2xl shadow-lg">

                <div className="border-b rounded-t-2xl p-5 bg-gradient-to-r from-sky-800 to-sky-700">
                    <h1 className="text-4xl font-bold text-white">Payment</h1>
                </div>

                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-10 px-5 py-10">
                    <ReactCreditCards
                        number={cardNumber}
                        expiry={expiryDate}
                        cvc={cvv}
                        name={cardholder}
                        focused={focus}
                    />

                    <Form />
                </div>
            </div>
        </main>
    )
}

export default App
