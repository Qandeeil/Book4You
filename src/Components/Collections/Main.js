import React , {useState,useEffect} from 'react';
import { useSelector , useDispatch } from 'react-redux';
import { getBook } from '../../store/Books/Books';
import { PopBook } from '../Pages/Pop';

const Main = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getBook())
    },[])

    const {Books} = useSelector(state => state)
    const [show,setShow] = useState(false)
    const [content,setContent] = useState([])
    const [pop,setPop] = useState([])
    const [showPop,setShowPop] = useState(false)

    const popHandler = (e) => {
        setPop([e])
        setShowPop(!showPop)
    }
    
    const allData = () => {
        return Books.Book.map(i => {
            return (
                <div className='image' key={i.id}>
                    <img src={i.image}/>
                    <h1>{i.name}</h1>
                    <span onClick={() => popHandler(i)}>View More</span>
                </div>
            )
        })
    }
    
    const [search,setSearch] = useState([])
    const searchHandler = (e) => {
        const Se = Books.Book.filter(i => i.name.includes(e.target.value))
        return Se ? setSearch(Se) : null
    }

    const Ma = () => {
        return search.length ? (
            search.map(i => {
                return (
                    <div className='image' key={i.id}>
                        <img src={i.image}/>
                        <h1>{i.name}</h1>
                        <span onClick={() => popHandler(i)}>View More</span>
                    </div>
                )
            })
        ) : (allData())
    }

    const Data = (content) => {
        setShow(true)
        return Books.Book.map(i => {
                return i.content === content ? (i) : (null)
        })
    }

    const showData = () => {
        return content ? (
                content.map(i => {
                    return i ? (
                            <div className='image' key={i.id}>
                                <img src={i.image}/>
                                <h1>{i.name}</h1>
                                <span>View More</span>
                            </div>
                    ) : (null)
                })
            ) : (null)
        }

    return(
        <div className='Main'>
            <div className='Header'>
                <h1>Our Collections</h1>
                <p>“Books give soul to the universe, 
                wings to the mind, flight to the imagination,
                and life to everything”</p>
            </div>
            <div className='search'>
                <input  onChange={(e) => searchHandler(e)} type='search' placeholder='Searching for a book'/>
            </div>
            <div className='MainContent'>
                <div className='optionLeft'>
                    <ul>
                        <li onClick={() => setShow(false)}>All</li>
                        <li onClick={() => setContent(Data("Fatasy"))}>Fatasy</li>
                        <li onClick={() => setContent(Data("Mystery"))}>Mystery</li>
                        <li onClick={() => setContent(Data("Nonfiction"))}>Nonfiction</li>
                        <li onClick={() => setContent(Data("Contemporary romance"))}>Contemporary romance</li>
                        <li onClick={() => setContent(Data("Scince fiction"))}>Scince fiction</li>
                        <li onClick={() => setContent(Data("Urban fantasy"))}>Urban fantasy</li>
                        <li onClick={() => setContent(Data("Paranormal romance"))}>Paranormal romance</li>
                        <li onClick={() => setContent(Data("Humor"))}>Humor</li>
                        <li onClick={() => setContent(Data("Music"))}>Music</li>
                        <li onClick={() => setContent(Data("Horror"))}>Horror</li>
                        <li onClick={() => setContent(Data("Historical fiction"))}>Historical fiction</li>
                        <li onClick={() => setContent(Data("Historical romance"))}>Historical romance</li>
                        <li onClick={() => setContent(Data("Adult"))}>Adult</li>
                        <li onClick={() => setContent(Data("Children"))}>Children</li>
                        <li onClick={() => setContent(Data("Learning & Research"))}>Learning & Research</li>
                        <li onClick={() => setContent(Data("Magazines"))}>Magazines</li>
                        <li onClick={() => setContent(Data("EBooks"))}>EBooks</li>
                        <li onClick={() => setContent(Data("Movies"))}>Movies</li>
                    </ul>
                </div>
                <div className='optionRight'>
                    {Books.isError ? (
                    <h1 style={{color: 'red',textAlign: 'center',width: '100%'}}>
                    An error occurred while connecting to the server. 
                    The problem will be fixed as soon as possible</h1>
                ) : Books.isLoading ? (<h1 style={{color: 'red',textAlign: 'left',width: '100%'}}>Loading...</h1>) : show ? showData() : Ma()}
                </div>
            </div>
            <div>
                {showPop ? PopBook(pop,popHandler) : null}
            </div>
        </div>
    )
}
export default Main;