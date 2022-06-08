import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap/lib/InputGroup'
import Option from 'react-select/src/components/Option'
import { ApiDelete, ApiGet, ApiPatch, ApiPost } from '../../helper/API/ApiData'
import { bool } from '../../helper/utils'

export const Jobs = () => {
      const [data, setData] = useState({
            title: "",
            shortDescription: "",
            intro: "",

            location: "",
            urgent: "",
            contract: "",
            englishSpeaking: "",
            period: "",
            remoteWork: "",
            id: ""
      })
      const [toggle, setToggle] = useState(false)
      const [jobInformation, setJobInformation] = useState([])
      const [responsibilities, setResponsibilities] = useState([''])
      const [requirements, setRequirements] = useState([''])
      const jobsData = () => {
            ApiGet(`jobs?rpp=10&pg=0`)
                  .then((res: any) => {
                        console.log("res", res[0].result);
                        setJobInformation(res[0].result)
                  })

      }
      useEffect(() => {
            jobsData()
      }, [])
      const onChange = (e: any) => {
            const formData: any = { ...data }
            if (e.target.id === 'englishSpeaking' || e.target.id === 'remoteWork' || e.target.id === 'urgent') {
                  formData[e.target.id] = bool(e.target.value);
            }

            // else if (e.target.id === "responsibilities") {
            //       formData.e.target.id.push(e.target.value)
            // }
            else {
                  formData[e.target.id] = e.target.value
            }
            setData(formData)
      }

      const addData = () => {
            setResponsibilities([...responsibilities, ' '])
      }

      const handelChange = (e: any, index: any) => {
            let temp = responsibilities.map((responsibilitiesData, i) => {
                  if (i == index) {
                        return e.target.value;
                  }
                  return responsibilitiesData
            })

            setResponsibilities(temp);
      }
      const handelChangedata = (e: any, index: any) => {
            let temp = requirements.map((requirementsData, i) => {
                  if (i == index) {
                        return e.target.value;
                  }
                  return requirementsData
            })

            setRequirements(temp);
      }
      const addrequirementsData = () => {
            setRequirements([...requirements, ''])
      }
      console.log("data", data);

      const submitdata = () => {
            ApiPost(`jobs`, {
                  title: data.title,
                  shortDescription: data.shortDescription,
                  intro: data.intro,

                  location: data.location,
                  urgent: data.urgent,
                  contract: data.contract,
                  englishSpeaking: data.englishSpeaking,
                  period: data.period,
                  remoteWork: data.remoteWork,
                  responsibilities: responsibilities,
                  requirements: requirements
            })
                  .then((res: any) => {
                        jobsData()
                  })
      }

      const deleteData = (id: any) => {
            ApiDelete(`jobs/${id}`)
                  .then((res) => {
                        jobsData()
                  })
      }

      const editData = (jobInformation: any) => {
            setToggle(true)

            setData({
                  ...data,
                  title: jobInformation.title,
                  shortDescription: jobInformation.shortDescription,
                  intro: jobInformation.intro,
                  location: jobInformation.location,
                  urgent: jobInformation.urgent,
                  contract: jobInformation.contract,
                  englishSpeaking: jobInformation.englishSpeaking,
                  period: jobInformation.period,
                  remoteWork: jobInformation.remoteWork,
                  id: jobInformation._id

            })
            setResponsibilities(jobInformation.responsibilities)
            setRequirements(jobInformation.requirements)
      }

      const updatedata = () => {
            ApiPatch(`jobs/${data.id}`, {
                  title: data.title,
                  shortDescription: data.shortDescription,
                  intro: data.intro,

                  location: data.location,
                  urgent: data.urgent,
                  contract: data.contract,
                  englishSpeaking: data.englishSpeaking,
                  period: data.period,
                  remoteWork: data.remoteWork,
                  responsibilities: responsibilities,
                  requirements: requirements
            })
                  .then((res) => {
                        jobsData()
                  })
            setToggle(false)
      }

      return (
            <div>
                  <span>Title :</span>
                  <input type='text' placeholder='title' id='title' value={data.title} onChange={onChange} />
                  <br></br>


                  <span>ShortDescription :</span>
                  <input type='text' placeholder='shortDescription' id='shortDescription' value={data.shortDescription} onChange={onChange} />
                  <br></br>


                  <span>Intro :</span>
                  <input type='text' placeholder='intro' id='intro' value={data.intro} onChange={onChange} />
                  <br></br>


                  <span>Location :</span>
                  <input type='text' placeholder='location' id='location' value={data.location} onChange={onChange} />
                  <br></br>

                  <span>Contract :</span>
                  <input type='text' placeholder='contract' id='contract' value={data.contract} onChange={onChange} />
                  <br></br>

                  <span>Period :</span>
                  <input type='text' placeholder='period' id='period' value={data.period} onChange={onChange} />
                  <br></br>

                  <span>EnglishSpeaking :</span>
                  <span>Yes :</span>
                  <input type='radio' id='englishSpeaking' name='englishSpeaking' value='true'
                        {...(toggle ? { checked: Boolean(data.englishSpeaking) === true } : {})}
                        onChange={onChange} />

                  <span>No :</span>
                  <input type='radio' id='englishSpeaking' name='englishSpeaking'
                        {...(toggle ? { checked: Boolean(data.englishSpeaking) === false } : {})}
                        value='false' onChange={onChange} /><br></br>

                  <span>urgent :</span>
                  <span>Yes :</span> <input type='radio' id='urgent' name='urgent'
                        {...(toggle ? { checked: Boolean(data.urgent) === true } : {})} value='true' onChange={onChange} />

                  <span>No :</span>
                  <input type='radio' id='urgent' name='urgent'
                        {...(toggle ? { checked: Boolean(data.urgent) === false } : {})} value='false' onChange={onChange} />
                  <br></br>

                  <span>remoteWork :</span>
                  <span>Yes :</span> <input type='radio' id='remoteWork' name='remoteWork'
                        {...(toggle ? { checked: Boolean(data.remoteWork) === true } : {})} value='true' onChange={onChange} />


                  <span>No :</span>
                  <input type='radio' id='remoteWork' name='remoteWork'
                        {...(toggle ? { checked: Boolean(data.remoteWork) === false } : {})}
                        value='false' onChange={onChange} /><br></br>


                  <span>Responsibilities :</span>
                  {
                        responsibilities.map((responsibilities, index) => (
                              <>
                                    <input type='text' placeholder='Responsibilities' id='responsibilities' value={responsibilities} onChange={(e) => handelChange(e, index)} /><br></br>
                              </>
                        ))


                  }


                  <button onClick={addData}>add</button><br></br>

                  <span>requirements :</span>
                  {
                        requirements.map((requirements, index) => (
                              <>
                                    <input type='text' placeholder='Requirements' id='requirements' value={requirements}
                                          onChange={(e) => handelChangedata(e, index)} /><br></br>
                              </>
                        ))


                  }
                  <button onClick={addrequirementsData}>add</button>
                  <br></br>
                  {toggle ?

                        <button onClick={updatedata}>Upadate</button> :
                        <button onClick={submitdata}>Submit</button>
                  }



                  {
                        jobInformation.map((jobInformation: any) => {
                              return (
                                    <>
                                          <table style={{ border: "1px solid black" }}>
                                                <tr style={{ border: "1px solid black" }}>
                                                      <th style={{ border: "1px solid black" }}>EnglishSpeaking</th>
                                                      {jobInformation.englishSpeaking == true ? <th>yes</th>
                                                            : <th>No</th>}

                                                </tr>
                                                <tr style={{ border: "1px solid black" }}>
                                                      <th style={{ border: "1px solid black" }}>remoteWork</th>
                                                      {jobInformation.remoteWork == true ? <th>yes</th>
                                                            : <th>No</th>}

                                                </tr>
                                                <tr style={{ border: "1px solid black" }}>
                                                      <th style={{ border: "1px solid black" }}>urgent</th>
                                                      {jobInformation.urgent == true ? <th>yes</th>
                                                            : <th>No</th>}

                                                </tr>
                                                <tr style={{ border: "1px solid black" }}>
                                                      <th style={{ border: "1px solid black" }}>intro</th>
                                                      <th>{jobInformation.intro}</th>

                                                </tr>
                                                <tr style={{ border: "1px solid black" }}>
                                                      <th style={{ border: "1px solid black" }}>location</th>
                                                      <th>{jobInformation.location}</th>

                                                </tr>
                                                <tr style={{ border: "1px solid black" }}>
                                                      <th style={{ border: "1px solid black" }}>period</th>
                                                      <th>{jobInformation.period}</th>

                                                </tr>
                                                <tr style={{ border: "1px solid black" }}>
                                                      <th style={{ border: "1px solid black" }}>shortDescription</th>
                                                      <th>{jobInformation.shortDescription}</th>

                                                </tr>
                                                <tr style={{ border: "1px solid black" }}>
                                                      <th style={{ border: "1px solid black" }}>title</th>
                                                      <th>{jobInformation.title}</th>

                                                </tr>
                                                <tr style={{ border: "1px solid black" }}>
                                                      <th style={{ border: "1px solid black" }}>Requirements</th>
                                                      {
                                                            jobInformation.requirements.map((requirements: any) =>
                                                                  <th>{requirements}</th>
                                                            )
                                                      }
                                                </tr>
                                                <tr style={{ border: "1px solid black" }}>
                                                      <th style={{ border: "1px solid black" }}>Responsibilities</th>
                                                      {
                                                            jobInformation.responsibilities.map((responsibilities: any) =>
                                                                  <th>{responsibilities}</th>
                                                            )
                                                      }
                                                </tr>
                                          </table>
                                          <button onClick={() => { editData(jobInformation) }}>Edit</button>
                                          <button onClick={() => deleteData(jobInformation._id)}>Delete</button>
                                    </>
                              )
                        })
                  }





            </div>

      )
}
