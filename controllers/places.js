const router = require('express').Router()

//SHOW
router.get('/', (req, res) => {
    let places = [
        {
            name: '76 diner',
            city: 'ottawa',
            state: 'Kansas',
            cuisines: 'diner',
            pic: ''
        },
        {
            name: 'prime time grill',
            city: 'ottawa',
            state: 'Kansas',
            cuisines: 'pub & grill',
            pic: ''
        }
    ]
    res.render('places/index', {places})

})
//SHOW
router.get('/new', (req, res) => {
    res.render('places/new')
})

//CREATE
router.post('/', (req, res) => {
    console.log(req.body)
    res.send('POST /places')
})


module.exports = router