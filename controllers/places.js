const router = require('express').Router()

router.get('/', (req, res) => {
    let places = [
        {
            name: '76 diner',
            city: 'ottawa',
            state: 'Kansas',
            cuisines: 'diner',
            pic: 'src = '
        },
        {
            name: 'prime time grill',
            city: 'ottawa',
            state: 'Kansas',
            cuisines: 'pub & grill',
            pic: 'src = '
        }
    ]
    res.render('places/index', {places})

})

router.get('/new', (req, res) => {
    res.render('places/new')
})


module.exports = router