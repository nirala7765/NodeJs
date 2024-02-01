const express = require('express');
const { v4: uuidv4 } = require("uuid");

const app = express();
app.use(express.json());

//get book using get methods( api)

let  books = [
    {
        Name:'Startup-Guide',
        Author:'Nirala',
        Price:249,
        id:'dhfjsfhjdfh'
    },
    {
        Name:'Programing Journey',
        Author:'Arun',
        Price:1249,
        id:'dhfjsfhjutgdfh'
    },

    {
        Name:'Java Development',
        Author:'Rajesh',
        Price:249,
        id:'dhf345jsfhjdfh'
    },

    {
        Name:'Startup-Guide',
        Author:'Nirala',
        Price:2490,
        id:'dhfjsf234567hjdfh'

    },



]




app.get('/books',(req,res)=>{
    res.send({Response:books})

})



//create a new book details using Post method

app.post('/books',(req,res)=>{


    const newlyAddedBooks = req.body
    newlyAddedBooks["id"]=uuidv4();
    books.push(newlyAddedBooks);
    res.send({Response:"Books Added"})
})


// get book by id 

app.get('/books/:id',(req,res)=>{
    let  bookId = req.params.id;
    let fetchedBokks;

    fetchedBokks = books.find((b)=>{
        if(b.id==bookId){
            return b;
        }
        if(!fetchedBokks){
            return res.json({message:`Book not Found for ${bookId}`})
        }
        return res.json({message:'Books Found'})

    })

})


//Put request 


app.put('/books/:id',(req,res)=>{

    const bookid = req.params.id;
    const updatedprice = req.body.Price;

    console.log(bookid,updatedprice);

    let fetchedBokks;

    fetchedBokks = books.find((b)=>{
        if(b.id==bookid){
            return b;
        }
     
       

    })

    if(!fetchedBokks){
        return res.json({message:`price not updated as booid is not valid `})
    }

    fetchedBokks["Price"]=updatedprice;
    
    return res.json({message:'Price updated',book:books})
})

//Delete Api


app.delete('/books/:bookid',(req,res)=>{
    const bookid = req.params.id;
    

    console.log(bookid);

    let fetchedBokks;

    fetchedBokks = books.find((b)=>{
        if(b.id==bookid){
            return b;
        }
     
       

    })

    if(!fetchedBokks){
        return res.json({message:`Book can't be Deleted as bookid is not valid `})
    }

    books = books.filter((item)=>item.Name !== fetchedBokks.Name)

    return res.json({Message:"Given Book Id Deleted SucesFully!",book:books})

})


app.get('/',(req,res)=>{
    return res.json({message: 'Hello and Welcome to Api on server'})

})


app.listen(3000,(req,res)=>{
    console.log("listening on port 3000");
})