import React from 'react';
import Image5 from '../Image/Rectangle 26.png';
import Image6 from '../Image/Rectangle 27.png';
import Image7 from '../Image/Rectangle 28.png';
import Icon from '../Icon/star_1_.png';
// import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
const hotelStyle = {
    display: 'grid'
   

}
const PlaceDetails = () => {
    return (
        <div style={hotelStyle}>
            <h1>Stay comfort in those hotels</h1>
            <div>
                <img src={Image5} alt="" />
            </div>
            <div>
                <h4>Light bright airy stylish apt & safe peaceful stay</h4>
                <p>4 guest 2 bedroom 2 beds 2 baths wif Air condition kitchen cancellation flexibility available </p>
                <img src={Icon} alt="" /><p>4.09(20)  $34/night</p>
            </div>
            <div>
                <img src={Image6} alt="" />
            </div>
            <div>
                <h4>Apartment in lost Panorama</h4>
                <p>4 guest 2 bedroom 2 beds 2 baths wif Air condition kitchen cancellation flexibility available</p>
                <img src={Icon} alt="" /><p >4.09(20)  $52/night</p>
            </div>
            <div>
                <img src={Image7} alt="" />
            </div>
            <div>
                <h4>AR Lounge & Pool (r&r b&b)</h4>
                <p>4 guest 2 bedroom 2 beds 2 baths wif Air condition kitchen cancellation flexibility available </p>
                <img src={Icon} alt="" /><p>4.09(20)  $44/night</p>
            </div>
            <div>
                {/* <Map google={this.props.google} zoom={14}>

                    <Marker onClick={this.onMarkerClick}
                        name={'Current location'} />

                    <InfoWindow onClose={this.onInfoWindowClose}>
                         
                    </InfoWindow>
                </Map> */}
            </div>
        </div>
    );
};

 export default PlaceDetails;
// export default GoogleApiWrapper({
//     apiKey: ("AIzaSyBzd84xVQ5Z6O_hDhiTVl1pY7cUqL9x8C4")
//   })(PlaceDetails)