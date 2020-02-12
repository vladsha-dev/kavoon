import Head from 'next/head'
import ReactMapboxGl, { Marker } from 'react-mapbox-gl';

const MapGL = ReactMapboxGl({
  accessToken:
    'pk.eyJ1Ijoia2lsbGV2MTEyMyIsImEiOiJjazFxbzd2YW4wMzZ2M2NsZXpkMXFxczB5In0.XJVy74eh9v8u0pD7K8Df7g'
});

//const icons = ["building", "castle", "church", "kostel", "tower"]

const Map = ({ objects, selected, select }) => {
  return (<>
    <Head>
      <script src="https://api.mapbox.com/mapbox-gl-js/v1.7.0/mapbox-gl.js"></script>
      <link href="https://api.mapbox.com/mapbox-gl-js/v1.7.0/mapbox-gl.css" rel="stylesheet" />
    </Head>
    <MapGL
      style="mapbox://styles/mapbox/streets-v9"
      containerStyle={{
        height: '100%',
        width: '100%',
        //overflow: 'hidden',
        //borderRadius: '15px'
      }}
      center={selected.location}
      onError={(error) => console.log(error)}
      onStyleLoad={(map, _) => map.flyTo({ center: selected.location, zoom: 13 })}
    >
      {objects
        .map(place => <Marker key={place.id}
          coordinates={place.location}
          anchor="bottom"
          onClick={() => select(place)}>
          <img src={place === selected ? '/img/map-icons/building-active.svg' : '/img/map-icons/building.svg'} />
        </Marker>
        )}
    </MapGL>
  </>)
}

export default Map