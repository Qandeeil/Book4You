import React from 'react';

const Newsletter = () => {
    return (
        <section className='Section-5'>
            <div className='Content'>
                <h1>News letter</h1>
                <p>Subscribe to our mailing list and get interesting 
                news to your email inbox.</p>
                <input type='email' placeholder='Enter e-mail *'/>
                <button>Subscribe</button>
            </div>
        </section>
    )
}
export default Newsletter;