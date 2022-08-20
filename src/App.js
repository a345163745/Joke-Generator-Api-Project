import React,{useEffect,useState} from "react"
import "./style.css"
import axios from "axios"
const options = {
    method: 'GET',
    url: 'https://dad-jokes.p.rapidapi.com/random/joke',
    headers: {
      'X-RapidAPI-Key': '463a485356msh669da8755eb8bdbp18cda9jsn4a5b2c27908b',
      'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com'
    }
  };
export default function App(){
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
        
        const joke = await res.data.body[0].setup
        const punchline = await res.data.body[0].punchline
        setJoke(joke);
        setPunchLine(punchline);
        
    }
    return (
        <> 
        {` ${joke} -> ${punchLine} `}
        <button onClick={GetJoke}>Get a New Joke</button>
        </>
    )
}