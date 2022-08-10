import React from 'react';
import Data from './Data';

const OurCategory = () => {

    const AllData = () => {
        return Data.map(i => {
            return(
                <div className='book' key={i.Id}>
                    <img src={i.Img} width='270px'/>
                    <h1>{i.Name}</h1>
                </div>
            )
        })
    }  

    return(
        <section style={{marginTop: '0%',backgroundColor: '#fff'}} className='Section-2'>
            <div className='title'>
                <h1>Our Category</h1>
                <p className='line'></p>
            </div>
            <div className='allBook' style={{width: '75%'}}>
                {AllData()}
            </div>
        </section>
    )
}
export default OurCategory;