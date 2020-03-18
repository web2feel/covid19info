import React from 'react'
import Stats from './Stats'
import CountrySelector from './CountrySelector'
import Footer from './Footer'

function GlobalStats() {
    return (
        <div>

            <Stats url='https://covid19.mathdro.id/api'/>
            
            <CountrySelector/>
            <Footer />
        </div>
    )
}

export default GlobalStats