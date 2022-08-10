import React , {useState} from 'react';
import Header from '../About/Header/Header';
import dataMore from './dataMore'

const More = () => {

    const [data,setData] = useState()
    const [show,setShow] = useState(false)

    const addData = (e) => {
        setData([e])
        setShow(true)
    }

    const getData = () => {
        return dataMore.map(i => {
            return(
                <div className='text' key={i.Title}>
                    <h1 onClick={() => addData(i)}>{i.Title}</h1>
                    {/* <p>Hi my name is Mahmoud Qandeel</p> */}
                </div>
            )
        })
    }

    const showData = () =>{
        return data.map(i => {
            return(
                <div className='text' key={i.Title}>
                    {/* <h1 onClick={() => addData(i)}>{i.Title}</h1> */}
                    <p>{i.Paragraph}</p>
                </div>
            )
        })
    }


    return(
        <div>
            <div>
                {<Header />}
            </div>
            <div className='Main'>
                <div className='title'>
                    <h1>More</h1>
                </div>
                <div className='Content'>
                    {/* <div className='text'>
                        <h1>Mahmoud Qandeel</h1>
                        <p>Hi my name is Mahmoud Qandeel</p>
                    </div> */}
                    <div className='text'>
                        {getData()}
                        {show?showData():null}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default More;