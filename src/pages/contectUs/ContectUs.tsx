import React, { useEffect, useState } from 'react'
import { ApiPost, ApiGet, ApiDelete } from '../../helper/API/ApiData'

export const ContectUs = () => {
      const [contectData, setcontectData] = useState(
            {
                  name: "",
                  email: "",
                  phoneNumber: "",
                  message: ""
            }
      )

      const [errorMsg, setErrorMsg] = useState({
            name: "",
            email: "",
            phoneNumber: "",
            message: ""


      })

      const [data, setData] = useState([])
      const [StartDate, setStartDate] = useState("")
      const [andDate, setAndDate] = useState("")


      const contectInformation = () => {
            ApiGet(`contactus?rpp=10&pg=0&fromDate=${StartDate}&toDate=${andDate}`)
                  .then((res: any) => {
                        console.log("data", res);

                        setData(res[0].result)
                  })
      }

      useEffect(() => {
            // contectInformation()
      }, [])

      const onChange = (e: any) => {
            const formData: any = { ...contectData }
            if (e.target.id === "phoneNumber") {
                  formData[e.target.id] = parseInt(e.target.value)
            }
            else {
                  formData[e.target.id] = e.target.value

            }
            setcontectData(formData)
      }

      const submitData = () => {

            setErrorMsg(
                  {
                        ...errorMsg,
                        name: !contectData.name ? "enter name" : "",
                        email: !contectData.email ? "enter email" : "",
                        phoneNumber: !contectData.phoneNumber ? "enter phoneNumber" : "",
                        message: !contectData.message ? "enter message" : ""




                  }
            )
            console.log("kkk", errorMsg.message);

            ApiPost(`contactus`, contectData)
                  .then((res: any) => {
                        contectInformation()

                  })
      }

      const deleteData = (id: string) => {
            ApiDelete(`contactus/${id}`)
                  .then((res: any) => {
                        contectInformation()
                  })
      }
      return (
            <div>
                  <span>Name:</span>   <input type='text' id='name' value={contectData.name} onChange={onChange} />
                  {errorMsg.name && <span>{errorMsg.name}</span>}

                  <br></br>
                  <span>Email:</span>   <input type='text' id='email' value={contectData.email} onChange={onChange} />
                  {errorMsg.email && <span>{errorMsg.email}</span>}

                  <br></br>
                  <span>PhoneNumber:</span>    <input type='number' id='phoneNumber' value={contectData.phoneNumber} onChange={onChange} />
                  {errorMsg.phoneNumber && <span>{errorMsg.phoneNumber}</span>}

                  <br></br>
                  <span>Message:</span>  <input type='text' id='message' value={contectData.message} onChange={onChange} />
                  {errorMsg.message && <span>{errorMsg.message}</span>}

                  <br></br>
                  <button onClick={submitData}>Submit</button><hr></hr>
                  <span>Contect Information:</span>  <span>from:</span> <input type='date' id='name' value={StartDate} onChange={(e) => { setStartDate(e.target.value) }} />
                  <span>to:</span>   <input type='date' id='name' value={andDate} onChange={(e) => { setAndDate(e.target.value) }} />
                  <button onClick={contectInformation}>Add</button>
                  <>
                        {data.length > 1 &&
                              <table>
                                    <tr style={{ border: "1px solid black" }}>
                                          <th style={{ border: "1px solid black" }}>Name</th>
                                          <th style={{ border: "1px solid black" }}>Email</th>
                                          <th style={{ border: "1px solid black" }}>PhoneNumber</th>
                                          <th style={{ border: "1px solid black" }}>Message</th>
                                    </tr>
                                    {
                                          data.map((data: any) => (
                                                <>
                                                      <tr style={{ border: "1px solid black" }}>
                                                            <td style={{ border: "1px solid black" }}>{data.name}</td>
                                                            <td style={{ border: "1px solid black" }}>{data.email}</td>

                                                            <td style={{ border: "1px solid black" }}>{data.phoneNumber}</td>

                                                            <td style={{ border: "1px solid black" }}>{data.message}</td>
                                                            <button onClick={() => { deleteData(data._id) }}>Delete</button>
                                                      </tr>
                                                </>
                                          ))
                                    }

                              </table>
                        }
                  </>

            </div>
      )
}
