import React , {useEffect, useState , Fragment} from 'react';
import { getEvents } from '../../../../store/Events/Events';
import { useSelector , useDispatch } from 'react-redux';
import { PopEvent } from '../../../Pages/Pop';

const Events = () => {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getEvents())
    },[])

    const {Event} = useSelector(state => state)
    const showEvent = () => {
        return Event.isLoading ? (
            <div className='titleEvent'>
                <h1 style={{color: 'red'}}>Loading...</h1>
            </div>
        ) : (
            Event.isError ? (
                <div className='titleEvent'>
                    <h1 style={{color: 'red'}}>
                    An error occurred while connecting to the server. 
                    The problem will be fixed as soon as possible</h1>
                </div>
            ) : (
                Event.Events.map(item => {
                    return(
                        <div className='titleEvent' key={item.id}>
                            <span onClick={() => showHadler(item)}>{item.time}</span>
                        </div>
                    )
                })
            )
        )
    }
    const [show,setShow] = useState([])
    const showHadler = (item) => {
        setShow([item])
    }

    const showDetailsEvent = () => {
        return show.length ? (
                show.map(item => {
                    return(
                        <div className='event-1' key={item.id}>
                            <div className='contentEvent'>
                                <div className='Paragraph'>
                                    <p className='paragraph1'>{item.time}</p>
                                    <h1>{item.title}</h1>
                                    <p className='paragraph2'>{item.description}</p>
                                    <span onClick={() => changeShowPop(item)}>view more</span>
                                </div>
                                <div className='image'>
                                    <img src={item.image} style={{width: '50%'}}/>
                                </div>
                            </div>
                        </div>
                    )
                })
        ) : null
    }

    const [showPop,setShowPop] = useState(false)
    const [pop,setPop] = useState([])
    const changeShowPop = (item) => {
        setShowPop(!showPop)
        setPop([item])
        }

    return(
        <main>
            <section className='Section-1'>
                <div className='header'>
                    <h1>Upcoming Events</h1>
                    <p className='line'></p>
                </div>
                <div className='Allevent'>
                    {showEvent()}
                </div>
                <Fragment >
                    {showDetailsEvent()}
                </Fragment>
                <div>
                    {showPop ? PopEvent(pop,changeShowPop) : null}
                </div>
            </section>
        </main>
    )
}
export default Events;