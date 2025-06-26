import { useState } from "react"

function App() {
  const [ lat, set_lat ] = useState()
  const [ lon, set_lon ]= useState()
  const [ accuracy, set_acc ] = useState()

  navigator.geolocation.getCurrentPosition((position) => {
    const lat0 = position.coords.latitude;
    const lon0 = position.coords.longitude;
    const accuracy0 = position.coords.accuracy;

    set_lat(lat0)
    set_lon(lon0)
    set_acc(accuracy0)

  })

  return (
    <div>
      위도:{lat} <br />
      경도:{lon} <br />
      정확도:{accuracy} <br />
    </div>
  )
}

export default App
