const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: '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',
});
const openai = OpenAIApi(configuration);

// const val = document.getElementById('SetVal').value;

async function GPT(){
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: 'I have a stomachache',
    temperature: 10,
    max_tokens: 7,
    });
  document.getElementById('MainChatArea').innerHTML = response  
  console.log(response.data.choices[0].text);
}


const findDoctor = () => {
  const cal = document.querySelector('form');
  if(cal.style.display == 'none'){
    cal.style.display = 'flex'
  }
  else{
    cal.style.display = 'none'
  }
}

