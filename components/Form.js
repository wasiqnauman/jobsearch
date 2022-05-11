import React from 'react'
import { useRouter } from "next/dist/client/router";

function PageWithJSbasedForm() {
    const router = useRouter();
    // Handles the submit event on form submit.
    const handleSubmit = async (event) => {
      // Stop the form from submitting and refreshing the page.
      event.preventDefault()
  
      // Get data from the form.
      const data = {
          title: event.target.title.value,
          description: event.target.description.value,
          ratings:3.9,
          wage: event.target.wage.value,
          numHrs: event.target.numHrs.value,
          tags: event.target.tags.value,
          longitude:-0.0022275, 
          latitude: 51.5421655,
          img: "https://links.papareact.com/xqj",
          location: event.target.location.value
      }
  
      // Send the data to the server in JSON format.

      const JSONdata = JSON.stringify(data)
      console.log(data)
      // API endpoint where we send form data.
      const endpoint = 'http://127.0.0.1:5000/addJob'
  
      // Form the request for sending data to the server.
      const options = {
        // The method is POST because we are sending data.
        method: 'POST',
        // Tell the server we're sending JSON.
        headers: {
          'Content-Type': 'application/json',
        },
        // Body of the request is the JSON data we created above.
        body: JSONdata,
        // mode:'no-cors'
      }
  
      // Send the form data to our forms API on Vercel and get a response.
      const response = await fetch(endpoint, options)
      router.push('list')
      // Get the response data from server as JSON.
      // If server returns the name submitted, that means the form works.
    //   const result = await response.json()
    //   console.log(`Is this your full name: ${result.data}`)
    }
    return (
      // We pass the event to the handleSubmit() function on submit.
      <div className="flex flex-col flex-grow md:-mt-15 lg:-mt-20 justify-center h-screen items-center">
        <h1 className="md:text-xl lg:text-3xl font-semibold text-center md:mb-10">Post a new job</h1>
        <form onSubmit={handleSubmit} className="w-full max-w-lg">
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                    Title
                </label>
                <input 
                required 
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="title" 
                type="text" 
                placeholder="Title" />
                </div>
                <div className="w-full md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                    Description
                </label>
                <input 
                required 
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                id="description" 
                type="text" 
                placeholder="Description" />
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                    Tags
                </label>
                <input 
                required 
                id="tags"
                type="text" 
                placeholder="Comma seperated tags"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  />
                </div>
            </div>
            
            <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-city">
                    Wage
                </label>
                <input 
                required
                id="wage" 
                type="text" 
                placeholder="$/hr"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  />
                </div>
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-zip">
                Number of Hours
                </label>
                <input 
                required
                id="numHrs" 
                type="text" 
                placeholder=""
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" />
                </div>
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
                        Location
                    </label>
                    <input 
                required
                id="location" 
                type="text" 
                placeholder="location"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" />
                </div>
                <div className="flex flex-grow justify-center mt-5 space-x-5">
                <button 
                type="submit"
                className="text-gray-500 bg-gray-100 px-5 py-3 shadow-md rounded-full font-semibold my-3 hover:shadow-lg hover:bg-green-300 active:scale-90 transition transform duration-300 ease-in-out">Post a job</button>
                <button 
                type="button" onClick={() => router.back()}
                className="text-gray-500 bg-gray-100 px-8 py-3 shadow-md rounded-full font-semibold my-3 hover:shadow-lg hover:bg-red-300 active:scale-90 transition transform duration-300 ease-in-out">Back</button>
                </div>
            </div>
        </form>
    </div>
    )
  }

  export default PageWithJSbasedForm