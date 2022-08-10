import React , {useState,useEffect} from 'react';
import { useSelector , useDispatch } from 'react-redux';
import { getBook } from '../../../../store/Books/Books';
import { PopBook } from '../../../Pages/Pop';
import { showBook } from '../../../Pages/showBook';

const PageToScreen = () => {

    const [DataBook,setDataBook] = useState([])
    const [show,setShow] = useState(false)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getBook())
    },[])
    const {Books} = useSelector(state => state)
    const showData = (e) => {
        setDataBook([e])
        setShow(!show)
    } 
    return(
        <section style={{marginTop: '-4%'}} className='Section-2'>
            <div className='title' style={{marginTop: '-2%'}}>
                <h1>Page to Screen</h1>
                <p className='line'></p>
            </div>
            <div className='allBook' style={{width: '75%',marginTop: '-2%'}}>
                {Books.isError ? (
                    <h1 style={{color: 'red',textAlign: 'center',width: '100%'}}>
                    An error occurred while connecting to the server. 
                    The problem will be fixed as soon as possible</h1>
                ) : (
                    Books.isLoading ? (<h1 style={{color: 'red',textAlign: 'center',width: '100%'}}>Loading...</h1>) : (
                    showBook(Books.Book,'screen',showData)
                )
                )}
            </div>
            <div>
                {show?PopBook(DataBook,showData):null}
            </div>
        </section>
    )
}
export default PageToScreen;