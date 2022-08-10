import React from 'react';
import Events from './UpcomingEvents/Events';
import NewMaterials from './NewMaterials/NewMaterials'
import HistoryDay from './HistoryDay/HistoryDay'
import OurCategory from './OurCategory/OurCategory';
import PageToScreen from './PageToScreen/PageToScreen';
import LittleOnes from './LittleOnes/LittleOnes';
import LatestNews from './LatestNews/LatestNews';
import Newsletter from './Newsletter/Newsletter';

const Main = () => {
    return(
        <div >
            <Events />
            <NewMaterials />
            <HistoryDay />
            <OurCategory />
            <PageToScreen />
            <LittleOnes />
            <LatestNews />
            <Newsletter />
        </div>
    )
}
export default Main;