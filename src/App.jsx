import './App.css'
import Banner from './components/Banner.jsx'
import Nav from './components/Nav.jsx'
import Row from './components/Row.jsx'
import requests from './requests.js'





function App() {
 

  return (
    <>   
       <Nav/>
      <Banner fetchUrl={requests.fetchNetflixOriginals}/>
      <Row isPoster='true' title='Trending' fetchUrl={requests.fetchTrending}/>  
      <Row  title='Netflix originals' fetchUrl={requests.fetchNetflixOriginals}/> 
      <Row  title='Top rated' fetchUrl={requests. fetchTopRated}/>
      <Row title='Action' fetchUrl={requests.fetchActionMovies}/>
      <Row title='Comedy' fetchUrl={requests.fetchComedyMovies}/>
      <Row title='Horror' fetchUrl={requests. fetchHorrorMovies}/>
      <Row title='Romance' fetchUrl={requests.fetchRomanceMovies}/>
      <Row title='Documentaries' fetchUrl={requests.fetchDocumentaries}/>
        
    </>
  )
}

export default App
