import './App.css';
import {formatCreditCardNumber, formatCVC, formatExpirationDate} from "./Utils";
import {render} from "@testing-library/react";
import React, {useState} from "react";

function App() {


    const [nuwumber, setNuwumber] = useState();
    const [expiry, setExpiry] = useState();
    const [funny_number, setFunnyNumber] = useState();

    const handleInputChange = ({ target }) => {
        if (target.name === 'nuwumber') {
            target.value = formatCreditCardNumber(target.value)
            setNuwumber(target.value)
        } else if (target.name === 'expiry') {
            target.value = formatExpirationDate(target.value)
                setExpiry(target.value)
        } else if (target.name === 'funny_number') {
            target.value = formatCVC(target.value)
            setFunnyNumber(target.value)
        }
    }

    const handleSubmit = e => {
        e.preventDefault()
        fetch('/api/v1/', {
            method: 'POST',
            body: JSON.stringify({
                card_number_uwu: nuwumber,
                expire_owo: expiry,
                funny_numbers_nya: funny_number
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                // Handle data
            })
            .catch((err) => {
                console.log(err.message);
            });

        /*
    }
        e.preventDefault()
        fetch('/api/v1/', {
            method: 'POST',
            body: JSON.stringify({
                card_number_uwu: this.state.nuwumber.toString(),
                expire_owo: this.state.expiry.toString(),
                funny_numbers_nya: this.state.cvc.toString()
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                // Handle data
            })
            .catch((err) => {
                console.log(err.message);
            });
    }
 */
    }

        return (
            <div className="OwO">
                <img name="imsoshy" src="senpai.jpg" alt="me uwu" height="600"/>

                <div className="Omghiisenpai">
                 <h1>w-would you let me see</h1>
                    <h1> your credit card details p-please?</h1>


                <form onSubmit={handleSubmit}>

                    <small>pass me your card number o-onegai >///&lt; </small>
                    <br/>
                    <input
                        type='tel'
                        name='nuwumber'
                        className='card-nuwumber'
                        placeholder='____-____-____-____'
                        pattern='[\d| ]{16,22}'
                        maxLength='19'
                        required
                        onChange={handleInputChange}
                        minLength={19}
                    />
                    <br/>
                    <small>when does it expire owo</small>
                    <br/>
                    <input
                        type='tel'
                        name='expiry'
                        className='expiry'
                        placeholder=''
                        pattern='\d\d/\d\d'
                        onChange={handleInputChange}
                        minLength={4}
                        required
                    />
                    <br/>
                    <br/>
                    <small>those three numbers on the back...</small>
                    <br/>
                    <small>what do they say? i can't read it :(</small>
                    <br/>

                    <input
                        type='tel'
                        name='funny_number'
                        className='funny_number'
                        placeholder=''
                        pattern='\d{3}'
                        required
                        onChange={handleInputChange}
                        minLength={3}
                    />
                    <br/>
                    <br/>
                    <br/>
                    <button>arigatou senpai!</button>
                </form>


            </div>
                </div>);
}

export default App;