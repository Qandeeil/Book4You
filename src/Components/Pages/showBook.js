export const showBook = (satte,page,change) => {
    return satte.map(item => {
        return item.page === page ? (
            (
                <div className='book' key={item.id}>
                    <img src={item.image} width='270px'/>
                    <h1>{item.name}</h1>
                    <span onClick={() => change(item)}>More info</span>
                </div>
            )
        ) : (
            item.type === page ? (
                (
                    <div className='book' key={item.id}>
                        <img src={item.image} width='270px'/>
                        <h1>{item.name}</h1>
                        <span onClick={() => change(item)}>More info</span>
                    </div>
                )
            ) : null
        )
    })
}
