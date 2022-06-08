import React, { useEffect, useState } from 'react'
import { ApiDelete, ApiGet, ApiPatch, ApiPost } from '../../helper/API/ApiData'

export const Resume = () => {
      const [data, setData] = useState({
            name: "",
            phone: "",
            email: "",
            linkedIn: "",
            skype: "",
            helpUs: "",
            salary: 0,
            prefReachOut: "",
            resumeDoc: "",
            id: ""
      })

      const [resumData, setResumData] = useState([])
      const [toggle, setToggle] = useState(false)

      const onChange = (e: any) => {
            const formData: any = { ...data }
            if (e.target.id === 'resumeDoc') {
                  formData[e.target.id] = e.target.files[0]
            }
            else {
                  formData[e.target.id] = e.target.value
            }

            setData(formData)
      }

      const resumInformation = () => {
            ApiGet(`resume?rpp=10&pg=0&fromDate=2022-05-01&toDate=2022-06-04`)
                  .then((res: any) => {
                        setResumData(res[0].result)
                        console.log(res[0].result);
                        console.log("hhh", resumData);


                  })
      }

      useEffect(() => {
            resumInformation()

      }, [])

      const submitData = () => {
            let formData: any = new FormData();

            formData.append('name', data.name);
            formData.append('phone', data.phone);

            formData.append('email', data.email);
            formData.append('linkedIn', data.linkedIn);
            formData.append('skype', data.skype);
            formData.append('helpUs', data.helpUs);

            formData.append('salary', data.salary);

            formData.append('prefReachOut', data.prefReachOut);
            formData.append('resumeDoc', data.resumeDoc);



            ApiPost(`resume`, formData)
                  .then((res: any) => {
                        resumInformation()
                  })
            // console.log("data", data);

      }

      const Deletedata = (id: any) => {
            ApiDelete(`resume/${id}`)
                  .then((res) => {
                        resumInformation()
                  })
      }

      // const editeData = (editeData: any) => {
      //       setToggle(true)
      //       setData({
      //             ...data,
      //             name: editeData.name,
      //             phone: editeData.phone,
      //             email: editeData.email,
      //             linkedIn: editeData.linkedIn,
      //             skype: editeData.skype,
      //             helpUs: editeData.helpUs,
      //             salary: editeData.salary,
      //             prefReachOut: editeData.prefReachOut,
      //             resumeDoc: editeData.resumeDoc,
      //             id: editeData._id
      //       })
      // }

      // const upadateData = () => {
      //       setToggle(false)
      //       ApiPatch(`resume/${data.id}`, data)
      //             .then((res) => {
      //                   resumInformation()
      //             })
      // }
      return (
            <div>
                  <span>name :</span>
                  <input type='text' placeholder='name' id='name' value={data.name} onChange={onChange} />
                  <br></br>


                  <span>phone :</span>
                  <input type='number' placeholder='phone' id='phone' value={data.phone} onChange={onChange} />
                  <br></br>

                  <span>email :</span>
                  <input type='text' placeholder='email' id='email' value={data.email} onChange={onChange} />
                  <br></br>

                  <span>linkedIn :</span>
                  <input type='text' placeholder='linkedIn' id='linkedIn' value={data.linkedIn} onChange={onChange} />
                  <br></br>

                  <span>skype :</span>
                  <input type='text' placeholder='skype' id='skype' value={data.skype} onChange={onChange} />
                  <br></br>

                  <span>helpUs :</span>
                  <input type='text' placeholder='helpUs' id='helpUs' value={data.helpUs} onChange={onChange} />
                  <br></br>

                  <span>salary :</span>
                  <input type='number' placeholder='salary' id='salary' value={data.salary} onChange={onChange} />
                  <br></br>

                  <span>prefReachOut :</span>
                  <select placeholder='prefReachOut' id='prefReachOut' value={data.prefReachOut} onChange={onChange} >
                        <option value='email'>email</option>
                        <option value='phoneCall'>phoneCall</option>
                        <option value='skype'>skype</option>
                        <option value='linkdIn'>linkdIn</option>

                  </select>
                  <br></br>

                  <span>resumeDoc :</span>
                  <input type='file' placeholder='resumeDoc' id='resumeDoc' onChange={onChange} />
                  <br></br>
                  {toggle ?
                        // <button onClick={upadateData}>Upadate</button>
                        ""
                        :
                        <button onClick={submitData}>Submit</button>
                  }


                  {
                        resumData.map((resumData: any) => {
                              return (
                                    <>
                                          <table style={{ border: "1px solid black" }}>
                                                <tr style={{ border: "1px solid black" }}>
                                                      <th>Name</th>
                                                      <td style={{ border: "1px solid black" }}>{resumData.name}</td>
                                                </tr>
                                                <tr style={{ border: "1px solid black" }}>
                                                      <th>phone</th>
                                                      <td style={{ border: "1px solid black" }}>{resumData.phone}</td>
                                                </tr>
                                                <tr style={{ border: "1px solid black" }}>
                                                      <th>email</th>
                                                      <td style={{ border: "1px solid black" }}>{resumData.email}</td>
                                                </tr>
                                                <tr style={{ border: "1px solid black" }}>
                                                      <th>linkedIn</th>
                                                      <td style={{ border: "1px solid black" }}>{resumData.linkedIn}</td>
                                                </tr>
                                                <tr style={{ border: "1px solid black" }}>
                                                      <th>skype</th>
                                                      <td style={{ border: "1px solid black" }}>{resumData.skype}</td>
                                                </tr>
                                                <tr style={{ border: "1px solid black" }}>
                                                      <th>helpUs</th>
                                                      <td style={{ border: "1px solid black" }}>{resumData.helpUs}</td>
                                                </tr>
                                                <tr style={{ border: "1px solid black" }}>
                                                      <th>salary</th>
                                                      <td style={{ border: "1px solid black" }}>{resumData.salary}</td>
                                                </tr>
                                                <tr style={{ border: "1px solid black" }}>
                                                      <th>prefReachOut</th>
                                                      <td style={{ border: "1px solid black" }}>{resumData.prefReachOut}</td>
                                                </tr>

                                                <tr style={{ border: "1px solid black" }}>
                                                      <th>resumeDoc</th>
                                                      <td style={{ border: "1px solid black" }}>{resumData.resumeDoc}</td>
                                                </tr>
                                          </table>
                                          {/* <button onClick={() => editeData(resumData)}>Edite</button> */}
                                          <button onClick={() => Deletedata(resumData._id)}>Delete</button>

                                    </>
                              )
                        }
                        )
                  }
            </div>
      )
}
