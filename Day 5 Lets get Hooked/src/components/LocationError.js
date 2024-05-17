const LocationError = ()=>{
    return(
        <div className="location-error">
            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_476,h_476/portal/m/location_unserviceable.png"></img>
            <h3>Location Unserviceable</h3>
            <p>We don’t have any services here till now. Try changing location.</p>
        </div>
    )
}

export default LocationError;