import { useEffect } from 'react';
import {fetchData} from './utils/api'
import { useSelector, useDispatch } from 'react-redux';
import { getApiConfigurations,getGeneres } from './store/homeSlice';

import {  Home, Error, Details, SearchResult, Explore  } from './pages';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import { Header, Footer } from './componants';

function App() {

  const dispatch = useDispatch();
  const {url} = useSelector((state)=> state.home)
  
  const fetchApiConfig = () => {
    fetchData("/configuration").then((res)=>{
      
      const url = {
        backdrop: res.images.secure_base_url + "original",
        poster: res.images.secure_base_url + "original",
        profile: res.images.secure_base_url + "original",
      }

         dispatch(getApiConfigurations(url));
    })
  }


  useEffect(()=>{
        fetchApiConfig();
        genresCall()
  },[])

  const genresCall = async () => {
    let promises = [];
    let endPoints = ['tv', 'movie']
    let allGenres = {}
    
    endPoints.forEach((url)=> {
      promises.push(fetchData(`/genre/${url}/list`))
    })

    const data = await Promise.all(promises)

    data.map(({genres})=> {
        return genres.map((item)=> {
          return (
            allGenres[item.id] = item
          )
        })
    })

   dispatch(getGeneres(allGenres));

  }


  return (
    <BrowserRouter >
    <Header />
      <Routes >
        <Route path='/' element={<Home />}/>

        <Route path='/:mediaType/:id' element={<Details />}/>
        <Route path='/search/:query' element={<SearchResult />} />
        <Route path='/explore/:mediaType' element={<Explore />}/>

        <Route path='*' element={<Error />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
