const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
            <div className='card mt-5' >
                <img className='card-img-top' src={data.place.pic} alt='Thai Restaurant' />
                <div className='card-body'>
                    <h5 className='card-title'>{data.place.name} 
                        <br/>
                        Located in {data.place.city}, {data.place.state} 
                    </h5>
                    <hr></hr>
                    <h6 className='card-title'>Ratings</h6>
                    <p className='card-text'>No Ratings Yet!</p>
                    <h6 className='card-title'>Comments</h6>
                    <p className='card-text'>Leave a comment!</p>
                    <a href={`/places/${data.id}/edit`} className='btn btn-warning'>Edit</a>
                    <form method='POST' action={`/places/${data.id}?_method=DELETE`}>
                        <button type='submit' className='btn btn-danger mt-1'>
                            Delete
                        </button>
                    </form>
                </div>
            </div>
          </main>
        </Def>
    )
}

module.exports = show