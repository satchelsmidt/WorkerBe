import express from 'express';

const app = express();

app.get('/', (req, res)=>{
    res.send('Heyooo!')
});

// const server = app.listen(3000, ()=>{
//    const {address, port} = server.address();
//    console.log(`listening at http://${address}:${port}`)
// });

app.listen(port, () => {
    console.log(`Server is running at http://${port}`)
})