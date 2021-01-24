import React, {useEffect, useState} from 'react'
import {Link, Route} from 'react-router-dom'
import UserList from './UserList'
import Table from './Table'

const App = (props) => {
  
  const [file, setFile] = useState(null) 
  const [userData, setUserData] = useState([])
  const [isUploaded, setIsUploaded] = useState(false) 

  useEffect(() => {
    const result = JSON.parse(localStorage.getItem('students')) || []
    setUserData(result)
  }, [])
  
  useEffect(() => {
    localStorage.setItem('students',JSON.stringify(userData))
  }, [userData])

  const handleFile = (e) => {
    const result = e.target.files[0]
    const fileReader = new FileReader()
    fileReader.onload = function (e) {
      const fileContents = e.target.result
      setFile(fileContents)
    }

    fileReader.readAsText(result)

  }

  const handleSubmit = (e) => {
    e.preventDefault()

    let data = `${file}`
    data = data.split('\n')

    const newArray = []

    for(let i = 0; i < data.length; i++){
       let obj 
       if(data[i].length !== 0){
         obj = {
            time : `${data[i].slice(0, 8)}`,
            name : `${data[i].slice(15, data[i].includes('  To  Aniruddha SG(privately)') ? (data[i].indexOf('  To  Aniruddha SG(privately) ')) : (data[i].lastIndexOf(':') - 1))}`,
            message : `${data[i].slice((data[i].lastIndexOf(':') + 2))}`,
            private : data[i].includes('privately') ? true : false
        }
        newArray.push(obj)
      }
    }
    setUserData(newArray)
    setIsUploaded(true)

  }
  return (
    
    <div>
      <h1> Chat Section </h1>
      <p><button> <Link to="/"> home </Link></button>  <button> <Link to='/users' > Users List </Link> </button> </p>

      <h1>  File Upload </h1>
      <form onSubmit={handleSubmit}>
          <input type="file" name='file' onChange={handleFile} />
          <input type="submit" value="upload" />
      </form>   

      <Route path='/' exact={true} component={App} />   

      <Route path='/users'>
        <UserList userData={userData} />
      </Route>
      <Table userData={userData} isUploaded={isUploaded} />
    </div>
  )
}

export default App