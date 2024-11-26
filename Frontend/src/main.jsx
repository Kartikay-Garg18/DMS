import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import FundRaiserForm from './components/FundRaiserForm.jsx'

import Events from './components/Events'
import Profile from './components/Profile'

import { store } from './store/store.js';

const obj={
  AccName:"Hema",
  BankAcc: "324935722232",
  BankName: "canara",
  MainCause: "Money for Heart Transplant",
  PhoneNo:"0903480231",
  about: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat, aut minus iure alias culpa repellat maxime sapiente rerum at, quasi aspernatur obcaecati accusamus ipsum, aliquam temporibus ullam corrupti id! Fugit iusto impedit omnis, molestias nemo hic dolores velit facilis nesciunt repudiandae voluptas cupiditate pariatur ea fuga sunt numquam saepe corrupti delectus explicabo? Porro ea voluptatum sunt ducimus neque iure quas magni ratione, enim aut odio error nihil ad expedita. Sint aperiam iusto corporis et possimus ",
  amount: "999998",
  beneficiaryImage:{name: 'https://kettocdn.gumlet.io/media/campaigns/957000/957508/image/XRgpLMfG4y1XJtA5noYqtMCJfE6r9mrFhVJvJkrZ.jpg?w=768&dpr=1.3', 
                    lastModified: 1701874283488, 
                    lastModifiedDate: 'Wed Dec 06 2023 20:21:23 GMT+0530 (India Standard Time)',
                     webkitRelativePath: '', size: 492716,},
  category: "HealthCare",
  city: "Agra",
  country: "India",
  email: "ishika.goyal_cs22@gla.ac.in",
  endDate: "2024-11-30",
  firstName: "Hema",
  ifsc: "RATN0VAAPIS", 
  lastName: "Sharma",
  postal_code: "",
  qrImage:{name: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/330px-QR_code_for_mobile_English_Wikipedia.svg.png', 
            lastModified: 1689939088826, 
            lastModifiedDate: 'Fri Jul 21 2023 17:01:28 GMT+0530 (India Standard Time)',
            webkitRelativePath: '', size: 110187,},
  startDate: "2024-11-26",
  state: "Uttar Pradesh",
  street_address: "sector-3 , Ranjeet Nagar",
  upi: "hema@upi",
  username: "Ishika Goyal"
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children:[
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/login',
        element: (
          // <AuthLayout authentication={false}>
              <Login />
          // </AuthLayout>
        )
      },
      {
        path: '/register',
        element: (
          // <AuthLayout authentication={false}>
              <Register />
          // </AuthLayout>
        )
      },
      {
        path: '/events',
        element: (
              <Events/>  
        )
      },
      {
        path: '/new-campaign',
        element: (
          // <AuthLayout authentication={false}>
            <FundRaiserForm/>
          // </AuthLayout>
        )
      },
      {
        path: '/campaign',
        element: (
          // <AuthLayout authentication={false}>
            <Campaign {...obj}></Campaign>
          // </AuthLayout>
        )
      },
      {
        path: '/profile',
        element: (
              <Profile/>  
        )
      },
    ]
  }
])



import { ThemeProvider } from "@material-tailwind/react";
import Campaign from './components/Campaign.jsx'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </Provider>
)
