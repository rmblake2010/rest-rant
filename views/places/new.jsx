const React = require('react')
const Def = require('../default')


function new_form () {
    return(
        <Def>
            <h1>Add a New Place!</h1>
            <form method='POST' action='/places' >
            <div className='d-block text-center mt-5'>
                <div className='p-2'>
                    <label htmlFor='name'>Place Name : </label>
                    <input id='name' name='name' required/>
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
                <div className="form-group">
                    <label htmlFor="founded">Founded Year</label>
                <input className="form-control" id="founded" name="founded" />
                </div>        
                <input className='btn btn-primary' type='submit' value='Add Place' />
            </div>
            </form>
        </Def>
    )
}

module.exports = new_form