const express=require('express');
const router=express.Router();
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
    id:1
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
    id:2
  }
];
id=3;
router.get('/',(req,res)=>{
  res.render("index", {messages: messages});
});
router.get('/new',(req,res)=>{
  res.render("new");
});
router.post('/new',(req,res)=>{
    messages.push({ text: req.body.text, user: req.body.user, added: new Date(), id:id++ });
    res.redirect('/');
});
router.get('/:id',(req,res)=>{
  const {id}=req.params;
  res.render("message", {id: id, messages:messages});
});
module.exports = router;