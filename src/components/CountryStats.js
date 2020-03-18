import React from 'react'
import {countries} from 'country-data';
import useInfo from '../util/UseInfo'

function CountryStats({url,country}) {
    const countryInfo = useInfo(url)
    if(!countryInfo) return <p>Loading...</p> 
    let date = new Date(countryInfo.lastUpdate)
    let time = date.toTimeString()
    return (
        <div>
           
            <div className="row">
                <div className="col-sm-12">
                    <h3 className="text-center"> {countries[country].name} </h3>
                </div>
                
                    <div className="col-sm-4 text-center">
                        <div className="global-info">
                        <h2> <span className="text-warning"> Confirmed </span>{countryInfo.confirmed.value} </h2>
                        </div>
                        
                    </div>
                    <div className="col-sm-4 text-center">
                        <div className="global-info">
                        <h2> <span className="text-danger"> Deaths </span>{countryInfo.deaths.value} </h2>
                        </div>
                    </div>
                    <div className="col-sm-4 text-center">
                        <div className="global-info">
                        <h2> <span className="text-success"> Recovered </span>{countryInfo.recovered.value} </h2>
                        </div>
                    </div>
                  
            </div>
            <div className="row"> 
            <div className="col-sm-12 text-center text-grey">
                        <small> Last Updated - {time} </small>                       
                        
            </div>
            </div>

        </div>
    )
}

export default CountryStats
