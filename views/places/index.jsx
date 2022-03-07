const React = require('react')
const Def = require('../default')

function index (data) {
    let placesFormatted = data.places.map((place) => {
      return (
        <div key={place.name} className='col-sm-6'>
          <h2>
            <a href={`/places/${place.id}`}>
            {place.name}
            </a>
          </h2>
          <img src={place.pic} alt={place.name}/>
        </div>
      )
    })
    return (
        <Def>
            <main>
                <h1>Rants or Raves!</h1>
                <div className='row'>
                {placesFormatted}
                </div>
            </main>
        </Def>
    )
  }
  
module.exports = index