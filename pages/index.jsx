
import React ,{useState}from 'react'
import Register from '../component/Register'

const Index = () => {
  const [login, setlogin] = useState(false)
  return (
    <>
    <Register/>
    </>
  )
}

export default Index