import React, { useState } from 'react'
import Option from 'react-select/src/components/Option'

export const Jobs = () => {
      const [data, setData] = useState({
            title: "",
            shortDescription: "",
            intro: "",
            responsibilities: [],
            requirements: [],
            location: "",
            urgent: "",
            contract: "",
            englishSpeaking: "",
            period: "",
            remoteWork: ""
      })

      const onChange = (e: any) => {
            const formData: any = { ...data }
            if (e.target.id === 'englishSpeaking' || e.target.id === 'remoteWork' || e.target.id === 'urgent') {
                  formData[e.target.id] = Boolean(e.target.value)
            }

            else if (e.target.id === "responsibilities") {

            }
            else {
                  formData[e.target.id] = e.target.value
            }
            setData(formData)
      }

      console.log("data", data);

      return (
            <div>
                  <span>Title :</span>  <input type='text' placeholder='title' id='title' value={data.title} onChange={onChange} /><br></br>

                  <span>ShortDescription :</span> <input type='text' placeholder='shortDescription' id='shortDescription' value={data.shortDescription} onChange={onChange} /><br></br>

                  <span>Intro :</span> <input type='text' placeholder='intro' id='intro' value={data.intro} onChange={onChange} /><br></br>

                  <span>Location :</span> <input type='text' placeholder='location' id='location' value={data.location} onChange={onChange} /><br></br>

                  <span>Contract :</span> <input type='text' placeholder='contract' id='contract' value={data.contract} onChange={onChange} /><br></br>

                  <span>Period :</span> <input type='text' placeholder='period' id='period' value={data.period} onChange={onChange} /><br></br>

                  <span>EnglishSpeaking :</span>  <span>Yes :</span> <input type='radio' id='englishSpeaking' name='englishSpeaking' value='true' onChange={onChange} />
                  <span>No :</span>  <input type='radio' id='englishSpeaking' name='englishSpeaking' value='false' onChange={onChange} /><br></br>

                  <span>urgent :</span>  <span>Yes :</span> <input type='radio' id='urgent' name='urgent' value='true' onChange={onChange} />
                  <span>No :</span>  <input type='radio' id='urgent' name='urgent' value='false' onChange={onChange} /><br></br>

                  <span>remoteWork :</span>  <span>Yes :</span> <input type='radio' id='remoteWork' name='remoteWork' value='true' onChange={onChange} />
                  <span>No :</span>  <input type='radio' id='remoteWork' name='remoteWork' value='false' onChange={onChange} /><br></br>


                  <span>Responsibilities :</span> <input type='text' placeholder='Responsibilities' id='responsibilities' value={data.responsibilities} onChange={onChange} /><br></br>



                  {/* <select id='urgent' value={data.englishSpeaking} onChange={onChange}>
                        <option value="true">yes</option>
                  </select>
                  <select id='urgent' value={data.englishSpeaking} onChange={onChange}>
                        <option value="true">yes</option>
                  </select>
                   <select id='urgent' value={data.englishSpeaking} onChange={onChange}>
                        <option value="true">yes</option>
                  </select> */}

            </div>

      )
}
