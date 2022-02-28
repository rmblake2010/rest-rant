const React = require('react')
const Def = require('./default')

function home () {
    return (
      <Def>
          <main>
              <h1>REST Rant!</h1>
              <div  className='d-flex justify-content-around'>
                    <img src='/images/burger.jpg' alt='burger with knife in it'/>
                    <img src='/images/homePage.jpg' alt='kebabs on wooden plate' />
                    <img src="/images/sausage.jpg" alt="sausages and fruit" />
              </div>
              <a href='/places'>
                    <button className='btn-primary d-block mx-auto mt-2'>Come see our places!</button>
              </a>
          </main>
      </Def>
    )
  }
module.exports = home