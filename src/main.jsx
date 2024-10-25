import React , {useState}from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './Navbar'
import Page1 from './Page1'
import Jobs from './Jobs'
import Footeractual from './Footeractual'
import {createBrowserRouter , createRoutesFromElements ,
 RouterProvider,
 Route
} from 'react-router-dom'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Navbar></Navbar>}>
            <Route index path='Home' element={<Page1></Page1>}/>
            {/* <Route path='branches' element={}></Route> */}
            <Route path='jobs' element={<Jobs></Jobs>}/>
        </Route>
    )
)
ReactDOM.createRoot(document.getElementById('root')).render(
    
    <React.StrictMode>
    
    
    <RouterProvider router={router}></RouterProvider>
    <Footeractual></Footeractual>

    </React.StrictMode>
)
