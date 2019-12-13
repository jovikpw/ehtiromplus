
import React from 'react'
import ReactMapGL from 'react-map-gl';
import './About.css';


export default function About() {
    const [viewport, setViewport] = React.useState ({
        latitude: 40.55398,
        longitude: 70.9342406,
        width: "100vw",
        height: "100vh",
        zoom:18
    });
    return (
        <div>
            <ReactMapGL
                {...viewport}
                mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                mapStyle="mapbox://styles/jovik27/ck407u8dz2mze1co7hwch42o2"
                onViewportChange={viewport => {
                        setViewport(viewport);
                    }}
            >
            </ReactMapGL>
        </div>
        
    );
}
