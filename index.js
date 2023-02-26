const express = require('express');
const configuration = new Configuration({
  apiKey: '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',
});
const openai = new OpenAIApi(configuration);
  
  const app = express();
  const port = 3080;
  
  callApi()
  
  api.post('/', async (req,res)=>{
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: "call me the greatest",
      temperature: 0,
      max_tokens: 7,
    });
    console.log(response.data.choices[0].text)
    res.json({
      data
    })
  })