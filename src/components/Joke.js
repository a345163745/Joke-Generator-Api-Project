import React,{useState} from "react"
import axios from "axios"
const options = {
    method: 'GET',
    url: 'https://dad-jokes.p.rapidapi.com/random/joke',
    headers: {
      'X-RapidAPI-Key': '463a485356msh669da8755eb8bdbp18cda9jsn4a5b2c27908b',
      'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com'
    }
  };
export default function Joke(){
    const [joke,setJoke] = useState("")
    const [punchLine, setPunchLine] = useState("")
    const GetJoke = async ()=>{
        /* This is the regular promise way using then and catch
        axios.request(options).then(function (response) {
            setJoke(response.data.body[0].setup);
            setPunchLine(response.data.body[0].punchline);
        }).catch(function (error) {
            console.error(error);
        });*/
        /* This is the most clean way using async write readable code and not nested*/
        const res = await axios.request(options).catch(err => console.error(err));
        
        const [joke,punchline] = [await res.data.body[0].setup, await res.data.body[0].punchline]
        setJoke(joke);
        setPunchLine(punchline);
        
    }
    return(
    <div className="inner-box">
        <h1 className="title">Joke Generator</h1>
        <h2 className="jokeFont">{joke}</h2>
        <h2 className="jokeFont">{punchLine}</h2>
        <button onClick={GetJoke}>Another Joke</button>
        </div>
    )
}