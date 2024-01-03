//Express :

const express = require('express')
const app = express()
const path = require('path')
const PORT  = process.env.PORT || 3003



// app.get('^/$|/index(.html)?',(req,res)=>{
//     res.sendFile(path.join(__dirname,'index.html'));
//     console.log('Take done')
// })
app.get('/make_peace(.html)?',(req,res)=>{
    res.sendFile(path.join(__dirname, 'new-post.html'))
    console.log('trying to load ')
})
// app.get('/peace(.html)?',(req, res) => {
//     res.redirect(300, 'index.html');
//     console.log('tried to load ')
// })



app.get('/new-post(.html)?',(req,res)=>{
    res.sendFile(path.join(__dirname,'new-post.html'));
    console.log('nrepage load new post')
})

app.get('/oldpost',(req, res) => {
    res.redirect(302, 'new-post.html')
})

app.get('^/$|/index(.html)?',(req, res)=>{
    res.sendFile(path.join(__dirname,'index.html'));
    console.log('Loading...')
})
app.get('/people(.html)?',(req, res) => {
    res.redirect(302, 'index.html')
});

const one = (req, res, next) => {
    console.log('First person')
    next()
}
const two = (req, res, next) => {
   console.log('Second person')
   next()
}
const three = (req, res) => {
    console.log('Third person') 
    res.send('Hey Buddy')  
}
app.get('/contain(.html)?',[one, two, three])
app.listen(PORT,()=> console.log(`server running on port ${PORT}`))