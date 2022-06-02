import React, { useEffect, useState } from 'react'
import { ApiGet, ApiPost, ApiDelete, ApiPatch } from '../../helper/API/ApiData'
export const Service = () => {
      const [data, setData] = useState({
            name: "",
            shortDesc: "",
            description: "",
            id: ""

      })

      const [errorMsg, setErrorMsg] = useState({
            name: "",
            shortDesc: "",
            description: "",


      })

      const [toggle, setToggle] = useState(true)
      const [ServiceData, setServiceData] = useState([])
      const onChange = (e: any) => {
            const formData: any = { ...data }

            formData[e.target.id] = e.target.value


            setData(formData)
      }

      const servicInformation = () => {
            setErrorMsg(
                  {
                        ...errorMsg,
                        name: !data.name ? "enter name" : "",
                        shortDesc: !data.shortDesc ? "enter shortDesc" : "",
                        description: !data.description ? "enter description" : ""



                  }
            )

            ApiPost(`service`, data)
                  .then((res: any) => {
                        // contectInformation()

                  })
      }

      const serviceInformation = () => {
            ApiGet(`service?rpp=10&pg=0`)
                  .then((res: any) => {
                        console.log("servicedata", res);

                        setServiceData(res[0].result)
                  })
      }

      useEffect(() => {
            serviceInformation()
      }, [])

      const deleteData = (id: string) => {
            ApiDelete(`service/${id}`)
                  .then((res: any) => {
                        serviceInformation()
                  })
      }

      const editeData = (editedata: any) => {
            setToggle(false)
            setData({

                  name: editedata.name,
                  shortDesc: editedata.shortDesc,
                  description: editedata.description,
                  id: editedata._id


            })
      }

      const upadateData = () => {
            setToggle(true)
            ApiPatch(`service/${data.id}`, data)
                  .then((res: any) => {
                        serviceInformation()
                  })
            setData({
                  name: "",
                  shortDesc: "",
                  description: "",
                  id: ""

            })

      }
      return (
            <div>
                  <span>Name:</span>   <input type='text' id='name' value={data.name} onChange={onChange} />
                  {errorMsg.name && <span>{errorMsg.name}</span>}
                  <br></br>
                  <span>shortDesc:</span>   <input type='text' id='shortDesc' value={data.shortDesc} onChange={onChange} />
                  {errorMsg.shortDesc && <span>{errorMsg.shortDesc}</span>}
                  <br></br>
                  <span>description:</span>   <input type='text' id='description' value={data.description} onChange={onChange} />
                  {errorMsg.description && <span>{errorMsg.description}</span>}
                  <br></br>
                  {toggle ?
                        <button onClick={servicInformation}>Add</button>
                        :
                        <button onClick={upadateData}>Upadate</button>


                  }
                  <>
                        <table>
                              <tr style={{ border: "1px solid black" }}>
                                    <th style={{ border: "1px solid black" }}>Name</th>
                                    <th style={{ border: "1px solid black" }}>ShortDesc</th>
                                    <th style={{ border: "1px solid black" }}>Description</th>
                              </tr>
                              {
                                    ServiceData.map((data: any) => (
                                          <>
                                                <tr style={{ border: "1px solid black" }}>
                                                      <td style={{ border: "1px solid black" }}>{data.name}</td>
                                                      <td style={{ border: "1px solid black" }}>{data.shortDesc}</td>

                                                      <td style={{ border: "1px solid black" }}>{data.description}</td>

                                                      <button onClick={() => { deleteData(data._id) }}>Delete</button>
                                                      <button onClick={() => { editeData(data) }}>Edite</button>

                                                </tr>
                                          </>
                                    ))
                              }

                        </table>
                  </>


            </div>
      )
}
