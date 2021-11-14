// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const Celebrity= require("../models/Celebrity.model")
const router = require("express").Router();

router.get('/create', (req,res,next)=> res.render('celebrities/new-celebrity'))

//el ejer pone que en este post sea '/celebrities/create'
router.post('/create', (req,res,next)=>{
    Celebrity.create({//instancio la clase
        name:req.body.name,
        occupation: req.body.occupation,
        catchPhrase: req.body.catchphrase,
    })
    .then(celebrity =>{
        res.redirect("celebrities")
    })
    .catch (err => {
        res.render("celebrities/new-celebrity",{err})
    })
})



router.get('/', (req,res,next)=> {
    Celebrity.find()
    .then(allCelebrities =>{
        res.render('celebrities/celebrities',{allCelebrities})
    })
   .catch(err => {
       res.render("celebrities/celebrities", {err})
   })
})




module.exports = router;
