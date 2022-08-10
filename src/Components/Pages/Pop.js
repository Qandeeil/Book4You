import close from '../Home/Main/UpcomingEvents/images/close.svg'

export const PopEvent = (state , handler) => {
    return state.map(({id,time,title,description,image}) => {
        return(
            <div className='pop' key={id}>
                <div className='boxPop'>
                    <div className='contentPop'>
                        <dev className='contentImage'>
                            <img src= {image}/>
                            <div className='text-Left'>
                                <h1>{title}</h1>
                                <span>{time}</span>
                                <p>{description}</p>
                            </div>
                        </dev>
                        <div className='text-Right'>
                            <div className='infoName'>
                                <h3>Author</h3>
                                <h3>Publishing Format</h3>
                                <h3>Number of pages</h3>
                                <h3>Year of issue</h3>
                                <h3>ISBN</h3>
                                <h3>Cover</h3>
                            </div>
                            <div className='infoRes'>
                                <h3>Test</h3>
                                <h3>Test</h3>
                                <h3>Test</h3>
                                <h3>Test</h3>
                                <h3>Test</h3>
                                <h3>Test</h3>
                            </div>
                        </div>
                    </div>
                    <img onClick={handler} className='Close' src={close}/>
                </div>
            </div>
        )
    })
}

export const PopBook = (state,handler)=>{
    return  state.map(({id,image,name,Author,PublishingFormat,
        NumberOfPages,YearOfIssue,ISBN,Cover,Discriptin}) => {
        return(
            <div className='pop' key={id}>
                <div className='boxPop'>
                    <div className='contentPop'>
                        <dev className='contentImage'>
                            <img src={image}/>
                        </dev>
                        <div className='text'>
                            <h1>{name}</h1>
                            <div className='allInfo'>
                                <div className='infoName'>
                                    <h3>Author</h3>
                                    <h3>Publishing Format</h3>
                                    <h3>Number of pages</h3>
                                    <h3>Year of issue</h3>
                                    <h3>ISBN</h3>
                                    <h3>Cover</h3>
                                </div>
                                <div className='infoRes'>
                                    <h3>{Author}</h3>
                                    <h3>{PublishingFormat}</h3>
                                    <h3>{NumberOfPages}</h3>
                                    <h3>{YearOfIssue}</h3>
                                    <h3>{ISBN}</h3>
                                    <h3>{Cover}</h3>
                                </div>
                            </div>
                            <p>{Discriptin}</p>
                        </div>
                    </div>
                    <img onClick={handler} className='Close' src={close}/>
                </div>
            </div>
        )
    })
}