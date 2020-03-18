import React, { useState } from 'react'
import CountryStats from './CountryStats'

import { v4 as uuidv4 } from 'uuid';

import useInfo from '../util/UseInfo'
function CountrySelector() {
    const countries = useInfo('https://covid19.mathdro.id/api/countries')
    const[selectedCountry,setSelectedCountry] = useState('IN')
    if(!countries) return <p> Loading... </p>
    console.log(selectedCountry)
 
    return (

        <div className="my-4">
            <div className="card">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <h5 className="navbar-brand my-0">Country Stats</h5>
                  <div className="navbar-collapse" id="navbarSupportedContent">    
                  <div className="ml-auto">
                    <select value={selectedCountry} className="form-control" name="countries" id="countries" onChange = { e => setSelectedCountry(e.target.value) }>
                        {Object.entries(countries.countries).map(([country,code]) => (
                            <option key={uuidv4()} value={code}>{country}</option>
                        ))}
                    </select>           
                    </div>
                   </div>
            </nav>
            <div className="card-body border-top">
                <CountryStats url={`https://covid19.mathdro.id/api/countries/${selectedCountry}`} country={selectedCountry}/>
            </div>
            </div>
        </div>





    )
}

export default CountrySelector
