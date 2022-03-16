const React = require('react')
const Def = require('../default.jsx')

function edit_form (data) {
    return (
        <Def>
          <main>
            <h1>Edit {data.place.name}</h1>
            <form method='POST' action={`/places/${data.place.id}?_method=PUT`} >
            <div className='d-block text-center mt-5'>
                <div className='p-2'>
                    <label htmlFor='name'>Place Name : </label>
                    <input id='name' name='name' required defaultValue={data.place.name}/>
                </div>
                <div className='p-2'>
                    <label htmlFor='pic'>Place Picture(URL) : </label>
                    <input type='url' id='pic' name='pic' />
                </div>
                <div className='p-2'>
                    <label htmlFor='city'>City : </label>
                    <input id='city' name='city' />
                </div>
                <div className='p-2'>
                    <label htmlFor='state'>State : </label>
                    <input id='state' name='state' />
                </div>
                <div className='p-2'>
                    <label htmlFor='cuisines'>Cuisines : </label>
                    <input id='cuisines' name='cuisines' required/>
                </div>          
                <input className='btn btn-primary' type='submit' value='Edit Place' />
            </div>
            </form>
          </main>
        </Def>
    )
}

module.exports = edit_form