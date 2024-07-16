const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3000;


const size = 12;
const baseurl = 'http://20.244.56.144/test/';


let numberWindow = [];

async function fetch(type) {
    const response = await axios.get(`${baseurl}${type}`, { timeout: 500 });
     return response.data.numbers;
}

function avgcalculate(numbers) {
    if (numbers.length === 0) 
        return 0;
    const sum = numbers.reduce((ac, num) => ac + num, 0);
    return sum / numbers.length;
}

app.get('/numbers/:numberId', async (req, res) => {
    const numberId = req.params.numberId;
    const typeMap = {
        'p': 'primes',
        'f': 'fibo',
        'e': 'even',
        'r': 'random'
    };

    if (!typeMap[numberId]) {
        return res.status(400);
    }

    const prevstate = [...numberWindow];
    const newnum = await fetch(typeMap[numberId]);

    newnum.forEach(num => {
        if (!numberWindow.includes(num)) {
            numberWindow.push(num);
            if (numberWindow.length > size) {
                numberWindow.shift(); 
            }
        }
    });

    const currentState = [...numberWindow];
    const avg = avgcalculate(numberWindow);

    res.json({
        windowPrevState: prevstate,
        windowCurrState: currentState,
        numbers: newnum,
        avg: avg
    });
});

