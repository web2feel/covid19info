import React from 'react'
import useInfo from '../util/UseInfo'
export default function Stats({url}) {
    const info = useInfo(url)
    if(!info) return <p>Loading...</p>   
    let date = new Date(info.lastUpdate)
    let time = date.toTimeString()
    return(
        <div>
            <div className="card">
            <h5 className="card-header text-center">Global Stats</h5>
            <div className="card-body">
                
                <div className="row">
                    <div className="col-sm-4 text-center">
                        <div className="global-info">
                        <h2> <span className="text-warning"> Confirmed </span>{info.confirmed.value} </h2>
                        </div>
                        
                    </div>
                    <div className="col-sm-4 text-center">
                        <div className="global-info">
                        <h2> <span className="text-danger"> Deaths </span>{info.deaths.value} </h2>
                        </div>
                    </div>
                    <div className="col-sm-4 text-center">
                        <div className="global-info">
                        <h2> <span className="text-success"> Recovered </span>{info.recovered.value} </h2>
                        </div>
                    </div>
                  
                </div>
                <div className="row"> 
                    <div className="col-sm-12 text-center text-grey">
                                <small> Last Updated - {time} </small>                      
                                
                    </div>
                </div>
                
            </div>
            </div>
 
        </div>
    )
}