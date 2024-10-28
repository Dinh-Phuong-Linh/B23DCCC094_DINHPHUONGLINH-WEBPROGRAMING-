const express = require('express');
const ontap = express();
const port = 3000;

ontap.use(express.json());

ontap.listen(port, () =>{
    console.log(`Server is running at http://localhost:${port}`);
});

ontap.get('/users', (req, res) =>{
    res.json([
        {id: 1,name:'John Done'},
        {id: 2,name:'Jane Smith'}
    ]);
});
ontap.put('/users/:id',(req, res) =>{
    const userId = req.params.id;
    const updateData = req.body;
    res.json({ message:'nguoi dung co id ${userId} da duoc cap nhat',updateData});
});
ontap.post('/users',(req,res) =>{
    const newUser = req.body;
    res.staus(201).json({message :'nguoi dung da dc tao',user: newUser});
});
ontap.delete('/users/:id', (req,res) =>{
    const userId= req.params.id;
    res.json({ message:'nguoi dung co id ${userId} da bi xoa'});
});