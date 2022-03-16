const React = require('react')
const Def = require('../default')

function new_comment ({place}) {
    return(
        <Def>
            <h1>Add a Comment for!</h1>
            <form method='POST' action='' >
                <div className='p-2'>
                    <label htmlFor='author'>Username : </label>
                    <input id='author' name='author'/>
                </div>
                <div className='p-2'>
                    <label htmlFor='content'>Comment : </label>
                    <textarea id='content' name='content' rows="4" cols='50'/>
                </div>
                <div className='p-2'>
                    <label htmlFor='stars'>Star Rating : </label>
                    <input type='number' id='stars' name='stars' step='.5' min='0' max='5'/>
                </div>
                <div className='p-2'>
                    <label htmlFor='rant'>Rant? </label>
                    <input type='checkbox' />
                </div>
                <input className='btn btn-primary' type='submit' value='Add Comment' />
            </form>
        </Def>
    )
}

module.exports = new_comment