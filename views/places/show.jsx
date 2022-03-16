const React = require('react')
const Def = require('../default')

function show (data) {
    let comments = (
        <h3 className="inactive">
          No comments yet!
        </h3>
      )
      if (data.place.comments.length) {
        comments = data.place.comments.map(c => {
          return (
            <div className="border">
              <h2 className="rant">{c.rant ? 'Rant! 😡' : 'Rave! 😻'}</h2>
              <h4>{c.content}</h4>
              <h3>
                <stong>- {c.author}</stong>
              </h3>
              <h4>Rating: {c.stars}</h4>
            </div>
          )
        })
      }
    return (
        <Def>
          <main>
            <div className='card mt-5' >
                <img className='card-img-top mx-auto d-block' src={data.place.pic} alt='Restaurant Picture' />
                <div className='card-body'>
                    <h5 className='card-title'>{data.place.name} 
                        <br/>
                        Located in {data.place.city}, {data.place.state} 
                    </h5>
                    <h2>Description</h2>
                    <h3>{data.place.showEstablished()}</h3>
                    <br></br>
                    <h4>Serving {data.place.cuisines}</h4>
                    <hr></hr>
                    <h6 className='card-title'>Ratings</h6>
                    <p className='card-text'>No Ratings Yet!</p>
                    <h6 className='card-title'>Comments</h6>
                    <p className='card-text'>{comments}</p>
                    <hr />
                    <h2>Comment here!</h2>
                    <form action={`/places/${data.place.id}/comment`} method='POST'>
                        <div className='row'>
                          <div className='form-group col-sm-12'>
                            <label htmlFor="content">Content</label>
                            <textarea name="content" id="content" className='form-control'></textarea>
                          </div>
                        </div>
                        <div className='row'>
                          <div className='form-group col-sm-4'>
                            <label htmlFor="author">User</label>
                            <input id='author' name='author' className='form-control' />
                          </div>
                          <div className='form-group col-sm-4'>
                            <label htmlFor="stars">Star Rating</label>
                            <input type="range" step="0.5" min="1" max="5" name="stars" id="stars" className='form-control' />
                          </div>
                          <div className='form-group col-sm-2'>
                            <label htmlFor="rant">Rant?</label>
                            <input type="checkbox" id='rant' name='rant' className='form-control' />
                          </div>
                        </div>
                      <input type="submit" name="btn btn-primary" value="Add Comment!" />
                    </form>
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
