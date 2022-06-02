// import React from 'react'
import { useState } from 'react'
import { ApiPost } from '../../helper/API/ApiData'
export const Login = () => {

      const [data, setData] = useState({
            username: "",
            password: ""
            // id: ""

      })

      const onChange = (e: any) => {
            const formData: any = { ...data }

            formData[e.target.id] = e.target.value


            setData(formData)
      }

      const submitData = () => {
            debugger
            ApiPost(`login`, data)
                  .then((res: any) => {

                  })
      }
      return (
            <div>
                  {/* <h1>hhhhh</h1> */}
                  <span>username:</span>   <input type='text' id='username' value={data.username} onChange={onChange} /><br></br>
                  <span>password:</span>   <input type='password' id='password' value={data.password} onChange={onChange} /><br></br>
                  <button onClick={submitData}>Submit</button>
            </div>
      )
}
