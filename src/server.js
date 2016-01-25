import express from 'express';

const app = express();

function get() {

   return new Promise((resolve, reject) => {
      var start = Date.now();

      setTimeout(() => {
         var end = Date.now();
         resolve({
            data: "Siema",
            elapsedTime: end - start
         });
      }, 1000);
   });
}

app.get('/', async function (req, res) {
   var result = await get();

   res.send(result);
});

app.listen(3000, () => {
   console.log("Listening on localhost:3000");
});
