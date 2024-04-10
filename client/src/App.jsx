import {BrowserRouter,Routes, Route} from 'react-router-dom'
import CreatePage from './pages/createPage'
import ShowAllPage from './pages/ShowAllPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/listShow' element={<ShowAllPage/>}/>
        <Route path='/createPage' element={<CreatePage/>}/>
      </Routes>
    </BrowserRouter>
  )
}
export default App