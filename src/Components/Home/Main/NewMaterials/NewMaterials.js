import React , {useState,useEffect} from 'react';
import { getBook } from '../../../../store/Books/Books';
import { useSelector , useDispatch } from 'react-redux';
import { PopBook } from '../../../Pages/Pop';
import { showBook } from '../../../Pages/showBook';

const NewMaterials = () => {
    
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getBook())
    },[])

    const {Books} = useSelector(state => state)
    const [book,setBook] = useState([])
    const [show,setShow] = useState(false)
    const showHandler = (item) => {
        setBook([item])
        setShow(!show)
    }

    return(
        <section className='Section-2'>
            <div className='title'>
                <h1>New Materials</h1>
                <p className='line'></p>
            </div>
            <div className='allBook'>
                {Books.isError ? (
                    <h1 style={{color: 'red',textAlign: 'center',width: '100%'}}>
                    An error occurred while connecting to the server. 
                    The problem will be fixed as soon as possible</h1>
                ) : (
                    Books.isLoading ? (<h1 style={{color: 'red',textAlign: 'center',width: '100%'}}>Loading...</h1>) : (
                    showBook(Books.Book,'new',showHandler)
                )
                )}
            </div>
            <div>
                {show ? PopBook(book,showHandler) : null}
            </div>
        </section>
    )
}
export default NewMaterials;