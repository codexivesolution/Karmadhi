import React, { useState } from 'react'
import { ApiGet, ApiPost, ApiDelete, ApiPatch } from '../../helper/API/ApiData'
import { useEffect } from 'react'


export const Position = () => {
      const [data, setData] = useState({
            name: "",
            description: "",
            responsibilites: []
            // id: ""
      })

      const [errorMsg, setErrorMsg] = useState({
            name: "",
            description: "",


      })

      const [positionDatas, setPositionDatas] = useState([])
      const [count, setCount] = useState(0)
      const [id, setId] = useState("")
      const [toggle, setToggle] = useState(true)
      const positionData = () => {
            ApiGet(`master-position?rpp=12&pg=0`)
                  .then((res: any) => {
                        console.log("jjjjjjjjjjjj", res);
                        setPositionDatas(res[0].result)

                  })
      }

      useEffect(() => {

            positionData()
      }, [])
      const onChange = (e: any) => {
            const formData: any = { ...data }
            formData[e.target.id] = e.target.value
            setData(formData)
      }
      const handelChange = () => {
            const formData: any = { ...data }

            // const temp = formData.responsibilites.map((i: any) => {

            //       if (index === i) {
            //             formData.e.target.id[i] = e.target.value
            //       }


            // })
            // setData({ ...formData, responsibilites: temp })
      }

      const addpositionData = () => {

            setErrorMsg(
                  {
                        ...errorMsg,
                        name: !data.name ? "enter name" : "",
                        description: !data.description ? "enter description" : ""



                  }
            )
            ApiPost(`master-position`, data


            )
                  .then((res) => {
                        positionData()
                  })
      }

      const positionDataDelete = (id: any) => {
            ApiDelete(`master-position/${id}`)
                  .then((res: any) => {
                        positionData()
                  })
      }

      const positionDataEdite = (techanologyData: any) => {

            setToggle(false)
            setData({
                  ...data,
                  name: techanologyData.name,
                  description: techanologyData.description
                  // id: techanologyData._id
            })

            setId(techanologyData._id)

      }

      const UpadateposionData = () => {
            setToggle(true)
            ApiPatch(`master-position/${id}`, data)
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
                              {/* {data.responsibilites.length > 0 &&
                                    data.responsibilites.map((responsibilitesdata: any, index: any) => (
                                          <>
                                                <h1>{responsibilitesdata}</h1>
                                                <span>responsibilites</span>  <input type='text' id='description' value={responsibilitesdata} onChange={(e) => handelChange(e, index)} /><br></br>

                                          </>
                                    ))
                                    // <span>responsibilites</span>  <input type='text' id='description' value={data.responsibilites} onChange={onChange} /><br></br>
                              } */}

                              <span>responsibilites</span>  <input type='text' id='responsibilites' value={data.responsibilites} onChange={onChange} /><br></br>
                              <button
                              >Add Responsibilites</button><br></br>

                              <button onClick={addpositionData}>Add positionData</button><br></br>
                        </>
                        :
                        <>
                              <span>Name</span>  <input type='text' id='name' value={data.name} onChange={onChange} /><br></br>
                              {/* <span>Description</span>  <input type='text' id='description' value={data.description} onChange={onChange} /><br></br> */}
                              <button onClick={() => UpadateposionData()}>Upadate positionDatas</button><br></br>
                        </>
                  }

                  <>
                        <h1>positionDatas Name</h1>
                        {
                              positionDatas.map((positionDatas: any) => (
                                    <>
                                          <span>Position Name:</span>    <h2>{positionDatas.name}</h2>
                                          <span>Position description:</span>   <h2>{positionDatas.description}</h2>

                                          <button onClick={() => positionDataEdite(positionDatas)}>Edite</button>
                                          <button onClick={() => positionDataDelete(positionDatas._id)}>Delete</button><br></br>

                                    </>
                              ))
                        }
                  </>
            </div>
      )
}
