import { readFile } from "fs/promises";

async function getStudent() {
  try {
    const [movieJSONData, actorJSONData, cinemaJSONData] = await Promise.all([
      readFile("movie.json"),
      readFile("actor.json"),
      readFile("cinema.json"),
    ]);
  
    const [movie, actor, cinema] =[
      JSON.parse(movieJSONData),
      JSON.parse(actorJSONData),
      JSON.parse(cinemaJSONData),
    ]; 
    
    console.log(`Movie: ${movie.name}`);
    console.log(`Actors: ${actor.length}`);
    console.log(`cinema: ${cinema.length}`);
  
  } catch (error) {
    console.error(error.message)
  }
 
}

getStudent();