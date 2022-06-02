import React, { useEffect, useState } from 'react'
import { ApiDelete, ApiGet, ApiPatch, ApiPost } from '../../helper/API/ApiData'

export const Blog = () => {
      const [data, setData] = useState({
            title: "",
            subTitle: "",
            content: "",
            id: ""

      })

      const [errorMsg, setErrorMsg] = useState({
            title: "",
            subTitle: "",
            content: "",


      })
      const [toggle, setToggle] = useState(true)
      const [StartDate, setStartDate] = useState("")
      const [andDate, setAndDate] = useState("")
      const [blogData, setBlogData] = useState([])

      const onChange = (e: any) => {
            const formData: any = { ...data }

            formData[e.target.id] = e.target.value


            setData(formData)
      }

      const addInformation = () => {
            setErrorMsg(
                  {
                        ...errorMsg,
                        title: !data.title ? "enter title" : "",
                        subTitle: !data.subTitle ? "enter subTitle" : "",
                        content: !data.content ? "enter content" : ""



                  }
            )
            ApiPost(`blog`, data)
                  .then((res: any) => {

                  })
      }

      const blogDetail = () => {
            ApiGet(`blog?rpp=10&pg=0&fromDate=${StartDate}&toDate=${andDate}&updatedDate=false`)
                  .then((res: any) => {
                        setBlogData(res[0].result)
                  })
      }

      const deleteData = (id: string) => {
            ApiDelete(`blog/${id}`)
                  .then((res: any) => {
                        blogDetail()
                  })
      }

      const editeData = (blogdata: any) => {
            setToggle(false)
            setData({
                  title: blogdata.title,
                  subTitle: blogdata.subTitle,
                  content: blogdata.content,
                  id: blogdata._id
            })
      }

      const upadateData = () => {
            setToggle(true)
            ApiPatch(`blog/${data.id}`, data)
                  .then((res) => {
                        blogDetail()

                  })
      }
      return (
            <div>
                  <span>Title:</span>   <input type='text' id='title' value={data.title} onChange={onChange} />
                  {errorMsg.title && <span>{errorMsg.title}</span>}
                  <br></br>
                  <span>SubTitle:</span>   <input type='text' id='subTitle' value={data.subTitle} onChange={onChange} />
                  {errorMsg.subTitle && <span>{errorMsg.subTitle}</span>}

                  <br></br>
                  <span>Content:</span>   <input type='text' id='content' value={data.content} onChange={onChange} />
                  {errorMsg.content && <span>{errorMsg.content}</span>}

                  <br></br>
                  {toggle ? <>
                        <button onClick={addInformation}>Add</button><br></br>
                  </>
                        :
                        <>
                              <button onClick={upadateData}>Upadate</button><br></br>
                        </>



                  }
                  <span>Contect Information:</span>  <span>from:</span> <input type='date' id='name' value={StartDate} onChange={(e) => { setStartDate(e.target.value) }} />
                  <span>to:</span>   <input type='date' id='name' value={andDate} onChange={(e) => { setAndDate(e.target.value) }} />
                  <button onClick={blogDetail}>Submit</button>

                  <>
                        {blogData.length > 0 &&
                              <table>
                                    <tr style={{ border: "1px solid black" }}>
                                          <th style={{ border: "1px solid black" }}>Title</th>
                                          <th style={{ border: "1px solid black" }}>SubTitle</th>
                                          <th style={{ border: "1px solid black" }}>Content</th>
                                    </tr>
                                    {
                                          blogData.map((data: any) => (
                                                <>
                                                      <tr style={{ border: "1px solid black" }}>
                                                            <td style={{ border: "1px solid black" }}>{data.title}</td>
                                                            <td style={{ border: "1px solid black" }}>{data.subTitle}</td>

                                                            <td style={{ border: "1px solid black" }}>{data.content}</td>

                                                            <button onClick={() => { deleteData(data._id) }}>Delete</button>
                                                            <button onClick={() => { editeData(data) }}>Edite</button>

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
