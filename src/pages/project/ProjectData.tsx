import { data } from 'jquery';
import _ from 'lodash';
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap/lib/InputGroup';
import { API } from '../../config/API/api.config';
import { ApiGet } from '../../helper/API/ApiData'
import { ApiDelete, ApiPatch } from '../../helper/API/ApiData';
import ScrollIntoView from 'react-scroll-into-view'
// import { hostUrl } from '../../config/API/api-local';



export interface ServicesListData {
      devlopers: any;
      technologies: any;
      collaborations: any;
      _id: any;
      name: string;
      shortDescription: string;
      tags: any;
      about: string;
      challenge: string;
      solution: string;
      projectImgs: any;
      id: string;
      main_service: string,
      sub_services: string,
      title: string,
      description: string,
      image: string,
      title_second: string,
      description_second: string,
      image_second: string
}

const url = "project"

export const ProjectData = () => {
      const [serviceData, setServiceData] = useState<ServicesListData[]>([])

      const [totalSize, setTotalSize] = useState<number>(0);


      const [updateData, setUpdateData] = useState({
            _id: "",
            name: "",
            shortDescription: "",
            tags: "",
            about: "",
            challenge: "",
            solution: "",
            devlopers: [{
                  _id: "",

            }],
            technologies: [{
                  _id: "",

            }],
            // collaborations: [{
            //       _id:""
            //       // name: "",
            //       // logoImg: ""
            // }],
            // projectImgs: []
      })

      const [toggle, setToggle] = useState(false)

      const getCategoryListData = () => {

            // ApiGet(`api/v1/project?rpp=${rpp}&pg=${pg}'`)
            ApiGet(`project?rpp=10&pg=0`)


                  .then((res: any) => {
                        setServiceData(res.result)
                        console.log("ddddddddddd", res.result);
                        // console.log("mmmmm", serviceData);



                  })
      }

      useEffect(() => {
            getCategoryListData()
            console.log("mmmmm", serviceData);


      }, [])

      const projectDataEdit = (id: any) => {
            setToggle(true)
            const editData = serviceData.filter((data: any) =>

                  data._id === id
            )


            const temp = editData[0].devlopers.map((item: any) =>

                  item._id
            )

            const technologiesId = editData[0].technologies.map((item: any) =>

                  item._id
            )

            console.log("kkkkkk", temp);




            console.log("ppppppppppp", updateData);

            // if (editData) {
            console.log("rrrrrrrrrrrr", serviceData[0].description);

            setUpdateData({
                  _id: editData[0]._id,
                  name: editData[0].name,
                  shortDescription: editData[0].shortDescription,
                  tags: editData[0].tags,
                  about: editData[0].about,
                  challenge: editData[0].challenge,
                  solution: editData[0].solution,
                  devlopers: temp,
                  technologies: technologiesId,
                  // collaborations: editData[0].collaborations,
                  // projectImgs: editData[0].projectImgs
            })




            // }

            console.log("llllllll", serviceData);


      }


      const projectDataDelete = (id: any) => {
            ApiDelete(`project/${id}`, serviceData)
                  .then((res) => {
                        getCategoryListData()
                  }).catch((error) => {
                        console.log(error.response.data.message)
                  });

      }

      const onChange = (e: any) => {
            const _formData: any = { ...updateData };
            if (e.target.id === "Developer Name") {

            }
            _formData[e.target.id] = e.target.value;

            setUpdateData(_formData)

      }

      const onChanged = () => {


            const temp = [...updateData.devlopers]
            temp.pop()

            setUpdateData({ ...updateData, devlopers: temp })

      }

      const onChangedTech = () => {
            // let temp = [...updateData.technologies].map((player, index) => {
            //       if (i === index) {
            //             if (e.target.id === "name") {
            //                   player.name = e.target.value
            //             }
            //       }
            //       return player
            // })
            // setUpdateData({ ...updateData, technologies: temp })
            const temp = [...updateData.technologies]
            temp.pop()

            setUpdateData({ ...updateData, technologies: temp })
      }




      const upadateInformation = (id: any) => {
            console.log("kkkk", updateData);



            // debugger
            ApiPatch(`project/${id}`, updateData)
                  .then((res) => {
                        // getCategoryListData()
                  })
            // .catch((error) => {
            //       console.log(error.response.data.message)
            // });
      }

      return (
            <div>
                  <div id="footer">

                        {toggle ?
                              <>
                                    <span>Name:</span>   <input type='text' placeholder='Name' id='name' value={updateData.name} onChange={onChange} /><br></br>
                                    <span>shortDescription:</span>  <input type='text' placeholder='shortDescription' id='shortDescription' value={updateData.shortDescription} onChange={onChange} /><br></br>
                                    <span>tags:</span>  <input type='text' placeholder='tags' id='tags' value={updateData.tags} onChange={onChange} /><br></br>
                                    <span>about:</span>  <input type='text' placeholder='about' id='about' value={updateData.about} onChange={onChange} /><br></br>
                                    <span>challenge:</span> <input type='text' placeholder='challenge' id='challenge' value={updateData.challenge} onChange={onChange} />  <br></br>
                                    <span>solution:</span> <input type='text' placeholder='solution' id='solution' value={updateData.solution} onChange={onChange} /><br></br>

                                    {
                                          updateData.devlopers.map((developerData: any, index: any) => {
                                                return (
                                                      <>
                                                            {/* <span>Developer Name:</span><input type='text' placeholder='Developer Name' id='name' value={developerData.name} onChange={(e) => { onChanged(e, index) }} /> */}

                                                            <span>Developer id:</span><input type='text' placeholder='Developer id' id='_id' value={developerData} /><br></br>



                                                      </>
                                                )

                                          })

                                    }
                                    <button onClick={onChanged}>--</button><br></br>

                                    {
                                          updateData.technologies.map((technologiesData: any, index: any) => {
                                                return (
                                                      <>
                                                            <span>technologies id:</span><input type='text' placeholder='technologies id' id='_id' value={technologiesData
                                                            } /><br></br>



                                                      </>
                                                )
                                          })
                                    }

                                    <button onClick={onChangedTech}>--</button><br></br>



                                    <button onClick={() => { upadateInformation(updateData._id) }}>Upadate</button>
                              </>
                              : ""}
                  </div>

                  {
                        serviceData.map((item: any) => {
                              return (
                                    <>

                                          <table style={{ border: "1px solid black" }} >

                                                <thead style={{ border: "1px solid black" }}>
                                                      <tr>
                                                            <th>about</th>
                                                            <td style={{ border: "1px solid black" }}>{item.about}</td>
                                                      </tr>
                                                      <tr style={{ border: "1px solid black" }}>
                                                            <th>challenge</th>
                                                            <td style={{ border: "1px solid black" }}>{item.challenge}</td>
                                                      </tr>

                                                </thead>

                                                <tbody style={{ border: "1px solid black" }}>
                                                      <tr>
                                                            <th>Collaborations Name</th>
                                                            {item.collaborations.map((collaborationsdata: any) =>
                                                                  <tr>

                                                                        <td style={{ border: "1px solid black" }}>{collaborationsdata.name}</td>
                                                                  </tr>

                                                            )}
                                                      </tr>
                                                </tbody>



                                                {item.devlopers.map((devlopersdata: any) => {
                                                      return (
                                                            <>
                                                                  <tbody style={{ border: "1px solid black" }}>
                                                                        <tr>
                                                                              <th>Devlopers Name</th>
                                                                              <td style={{ border: "1px solid black" }}>{devlopersdata.name}</td>

                                                                        </tr>
                                                                        <tr>
                                                                              <th>Devlopers Gender</th>
                                                                              <td style={{ border: "1px solid black" }}>{devlopersdata.gender}</td>
                                                                        </tr>
                                                                        <tr>
                                                                              <th>Devlopers position</th>
                                                                              <td style={{ border: "1px solid black" }}>{devlopersdata.position}</td>
                                                                        </tr>
                                                                  </tbody>
                                                            </>
                                                      )
                                                }

                                                )}


                                                <tr style={{ border: "1px solid black" }}>
                                                      <th>Name</th>
                                                      <td style={{ border: "1px solid black" }}>{item.name}</td>
                                                </tr>

                                                <tr style={{ border: "1px solid black" }}>
                                                      <th>shortDescription</th>
                                                      <td style={{ border: "1px solid black" }}>{item.shortDescription}</td>
                                                </tr>

                                                <tr style={{ border: "1px solid black" }}>
                                                      <th>solution</th>
                                                      <td style={{ border: "1px solid black" }}>{item.solution}</td>
                                                </tr>

                                                <tr style={{ border: "1px solid black" }}>
                                                      <th>tags</th>
                                                      <td style={{ border: "1px solid black" }}>{item.tags}</td>
                                                </tr>

                                                <tr>
                                                      <th>Technologies Name</th>


                                                      {item.technologies.map((technologiesdata: any) =>
                                                            <tr>
                                                                  <td style={{ border: "1px solid black" }}>{technologiesdata.name}</td>
                                                            </tr>

                                                      )}
                                                </tr>
                                                {/* </tbody> */}


                                                {/* {item.projectImgs.map((data: any) =>

                                                      <tr>
                                                            <td>
                                                                  <img src={data} alt='' />
                                                            </td>

                                                      </tr>

                                                )} */}



                                                <tr style={{ border: "1px solid black" }}>
                                                      <th>Project Image</th>
                                                      {item.projectImgs.map((data: any) =>
                                                            <td style={{ border: "1px solid black" }}>

                                                                  {


                                                                        <img src={`${API.hostUrl}project/${data}`} alt='' />
                                                                  }
                                                            </td>
                                                      )}
                                                </tr>




                                          </table>
                                          <ScrollIntoView selector="#footer">
                                                <button onClick={() => { projectDataEdit(item._id) }}>Edit</button>
                                          </ScrollIntoView>
                                          <button onClick={() => { projectDataDelete(item._id) }}>Delete</button>





                                    </>

                              )
                        })
                  }

            </div>
      )
}
