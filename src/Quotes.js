import React, { useContext } from 'react';
import QuoteContext from './QuoteContext';

const Qoutes = () => {
    const {quote} = useContext(QuoteContext);

    if(!quote.length){
        return <p>Loading ....</p>;
    }
    return (
        <div>
            <h1>quotes</h1>
            <ul>
                {
                    quote.map((q) => (
                        <li key = {q.id}>
                            <p>"{q.quote} - {q.author}"</p>
                        </li>
                    ))
                }
            </ul>
             {/* <p>"{quote}"</p> */}
        </div>
    )
}

export default Qoutes;