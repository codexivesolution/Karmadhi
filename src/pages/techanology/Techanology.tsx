import React, { useState } from 'react'
import { ApiGet, ApiPost, ApiDelete, ApiPatch } from '../../helper/API/ApiData'
import { useEffect } from 'react'

export const Techanology = () => {
      const [data, setData] = useState({
            name: "",
            description: "",
            // id: ""
      })

      const [errorMsg, setErrorMsg] = useState({
            name: "",

            description: "",


      })

      const [techanologyData, setTechanologyData] = useState([])
      const [id, setId] = useState("")
      const [toggle, setToggle] = useState(true)
      const techanologiData = () => {
            ApiGet(`master-technology?rpp=10&pg=1`)
                  .then((res: any) => {
                        // console.log("jjjjjjjjjjjj", res);
                        setTechanologyData(res[0].result)

                  })
      }

      useEffect(() => {

            techanologiData()
      }, [])
      const onChange = (e: any) => {
            const formData: any = { ...data }
            formData[e.target.id] = e.target.value
            setData(formData)
      }
      const addTechanologyData = () => {
            setErrorMsg(
                  {
                        ...errorMsg,
                        name: !data.name ? "enter name" : "",
                        description: !data.description ? "enter description" : ""



                  }
            )

            ApiPost(`master-technology`, data


            )
                  .then((res) => {
                        techanologiData()
                  })
      }

      const techanologyDataDelete = (id: any) => {
            ApiDelete(`master-technology/${id}`)
                  .then((res: any) => {
                        techanologiData()
                  })
      }

      const techanologyDataEdite = (techanologyData: any) => {

            setToggle(false)
            setData({
                  ...data,
                  name: techanologyData.name,
                  // id: techanologyData._id
            })

            setId(techanologyData._id)

      }

      const UpadateTechanologyData = () => {
            setToggle(true)
            ApiPatch(`master-technology/${id}`, data)
                  .then((res) => {

                  })

      }
      return (
            <div>
                  {toggle ?
                        <>
                              <span>Name</span>  <input type='text' id='name' value={data.name} onChange={onChange} />
                              {errorMsg.name && <span>{errorMsg.name}</span>}

                              <br></br>
                              <span>Description</span>  <input type='text' id='description' value={data.description} onChange={onChange} />
                              {errorMsg.description && <span>{errorMsg.description}</span>}

                              <br></br>
                              <button onClick={addTechanologyData}>Add TechanologyData</button><br></br>
                        </>
                        :
                        <>
                              <span>Name</span>  <input type='text' id='name' value={data.name} onChange={onChange} /><br></br>
                              {/* <span>Description</span>  <input type='text' id='description' value={data.description} onChange={onChange} /><br></br> */}
                              <button onClick={() => UpadateTechanologyData()}>Upadate TechanologyData</button><br></br>
                        </>
                  }

                  <>
                        <h1>Techanology Name</h1>
                        {
                              techanologyData.map((techanologyData: any) => (
                                    <>
                                          <h2>{techanologyData.name}</h2>
                                          <button onClick={() => techanologyDataEdite(techanologyData)}>Edite</button>
                                          <button onClick={() => techanologyDataDelete(techanologyData._id)}>Delete</button>

                                    </>
                              ))
                        }
                  </>
            </div>
      )
}
