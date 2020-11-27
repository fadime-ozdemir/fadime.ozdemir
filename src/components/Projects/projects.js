import tinaZita from "./images/tinaZita.PNG";
import noBarriers from "./images/noBarriers.PNG";
import myMemo from "./images/myMemo.PNG";
import madlibs from "./images/madlibs.PNG";
import moviePlayer from "./images/moviePlayer.PNG";

const projectsList = [
    {name: "Tina Zita's Inventory",
    image: tinaZita,
    id:"tina",
     github:"https://github.com/fadime-ozdemir/tina-zita.v2", 
     live:"https://my-inventory.netlify.app/",
     description: "Responsive Web app for managing Tina Zita's food inventory.",
     stack: "React, Ant Design, firebase, i18next, sentry.io"},
     {name: "No Barriers",
     image: noBarriers,
     id:"NBarr",
      github:"https://github.com/ReCoded-Org/capstone-istanbul-no_barriers", 
      live:"https://no-barriers.netlify.app/",
      description: "No barriers helps refugees and people in need to connect with NGOs in Turkey.",
      stack: "React, React-Bootstrap, firebase, i18next"},
      {name: "My Memories",
      image: myMemo,
     id:"memm",
      github:"https://github.com/fadime-ozdemir/my-memories", 
      live:"https://fadime-ozdemir.github.io/my-memories/",
      description: "Website for saving personal photos and videos.",
      stack: "React, Material UI, firebase"},
      {name: "Movie Player",
      image: moviePlayer,
     id:"mov",
      github:"https://github.com/fadime-ozdemir/oop-movie", 
      live:"https://fadime-ozdemir.github.io/oop-movie/",
      description: "Movie Player shows movies and casts. It is build according to object-oriented programming",
      stack: "Javascript, Bootstrap, OOP" },
      {name: "Madlibs",
      image: madlibs,
     id:"mmad",
      github:"https://github.com/fadime-ozdemir/recoded-mad-libz-1", 
      live:"https://ihab-sensei.github.io/recoded-mad-libz/",
      description: "Funny madlib game",
      stack: "Javascript, Bootstrap 5, RegEx" }
]

export default projectsList;