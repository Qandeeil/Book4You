import React, { useState , useEffect } from 'react';
import { useSelector , useDispatch } from 'react-redux';
import { getBook } from '../../../../store/Books/Books';
import { showBook } from '../../../Pages/showBook';
import { PopBook } from '../../../Pages/Pop';

const LittleOnes = () => {

    const [data,setData] = useState([])
    const [showData,setShowData] = useState(false)
    const Show = (e) => {
        setData([e])
        setShowData(!showData)
    }
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getBook())
    },[])
    const {Books} = useSelector(state => state)
    return(
        <section style={{marginTop: '0%',backgroundColor: '#fff'}} className='Section-2'>
            <div className='title'>
                <h1>The Best for Little Ones</h1>
                <p className='line'></p>
            </div>
            <div className='allBook' style={{width: '75%'}}>
                    {Books.isError ? (
                    <h1 style={{color: 'red',textAlign: 'center',width: '100%'}}>
                    An error occurred while connecting to the server. 
                    The problem will be fixed as soon as possible</h1>
                ) : (
                    Books.isLoading ? (<h1 style={{color: 'red',textAlign: 'center',width: '100%'}}>Loading...</h1>) : (
                    showBook(Books.Book,'Little Ones',Show)
                )
                )}
            </div>
            <div>
                {showData ? PopBook(data,Show) : null}
            </div>
        </section>
    )
}
export default LittleOnes;