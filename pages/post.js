import React from 'react'
import Header from '../components/Header'
import PostForm from '../components/PostForm'
import Form from '../components/Form'

function post() {
  return (
    <div>
        <Header />
        <div className="flex flex-col">
          
          <Form />
        </div>
        
    </div>
  )
}

export default post