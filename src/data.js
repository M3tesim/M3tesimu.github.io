import myreads from './assets/myReads.png'
import wouldRather from './assets/wouldRather.png'
import scandiWeb from './assets/scandiweb.png'
import NLP from './assets/NLP.png'

const projects =[
    {
        name:"Would you rather-Game",
        image:wouldRather,
        discription:"this project is about a simple Questions game where users can choose between two option , create questions and compete between them in the leaderBoard page",
        github:"https://github.com/M3tesim/Would-rather-react-redux-app.git",
        live:"https://would-rather-react-redux-app.vercel.app/",

    }
,  {
    name:"React/Redux Ecommerce",
    image:scandiWeb,
    discription:"simple e-commerce app build with react and redux using apollo for graphQL , where user can view products by category , add items to the cart.",
    github:"https://github.com/M3tesim/React-Redux-E-commerce-App.git",
    live:null,

},  {
    name:"myreads -simple library",
    image:myreads,
    discription:"it is a single page app that allow you to categories your books to three section (my reading , want to read and read) you can search new books from a bookAPI and add new books to the shelfs",
    github:"https://github.com/M3tesim/reactnd-project-myreads.git",
    live:"https://reactnd-project-myreads-nine.vercel.app",

},  {
    name:"Evaluate News NLP",
    image:NLP,
    discription:"web tool that allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites. When a user submits a URL of an article, the web page then dispalys sentiment analysis, based on the contents of the article.",
    github:"https://github.com/M3tesim/evaluate-news-nlp.git",
    live:null,

}
]


export {projects};