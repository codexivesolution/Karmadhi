import React, { useEffect, useState } from 'react'
import { ApiGet, ApiPatch, ApiDelete, ApiPost } from '../../helper/API/ApiData'
import { API } from '../../config/API/api.config';
import { Certificate } from 'crypto';
import { UserType } from '../../helper/Constant';
import { add } from 'date-fns';

// interface data {
//       name: string,
//       gender: string,
//       position: string,
//       socialLinks: {
//             instagram: string,
//             linkedIn: string,
//             skype: string,
//             telegram: string,

//       },
//       technologies: [{
//             technologyId: string,
//             stars: any
//       }],
//       emailld: string,
//       certifictions: [{

//             certificateId: string,
//             complitionDate: string
//       }],
//       aboutMe: string,
// }



export const EmployesData = () => {

	const [data, setData] = useState([])
	const [toggle, setToggle] = useState(false)
	const [positionDatas, setPositionDatas] = useState([])
	const [certificationData, setCertificationData] = useState([])
	const [techanologyData, setTechanologyData] = useState([])


	const [employData, setEmployData] = useState({
		name: "",
		aboutMe: "",
		gender: "",
		position: "",
		emailId: "",
		id: ""
	})

	const [addData, setAddData] = useState<any>({
		name: "",
		gender: "",
		position: "",
		socialLinks: {
			instagram: "",
			linkedIn: "",
			skype: "",
			telegram: "",

		},
		technologies: [{
			technologyId: "",
			stars: null
		}],
		emailId: "",
		certifications: [{

			certificateId: "",
			complitionDate: ""
		}],
		aboutMe: "",
		// profilePic: "",
	})

	const [errorMsg, setErrorMsg] = useState({
		name: "",
		gender: "",
		position: "",
		emailId: "",
		aboutMe: "",

		socialLinks: {
			instagram: "",
			linkedIn: "",
			skype: "",
			telegram: "",

		},
	})
	const positionData = () => {
		ApiGet(`master-position?rpp=12&pg=0`)
			.then((res: any) => {
				console.log("jjjjjjjjjjjj", res);
				setPositionDatas(res[0].result)

			})
	}

	const employDetail = () => {

		ApiGet(`employee?rpp=10&pg=0`)

			.then((res: any) => {
				setData(res.result)
				console.log("ddddddddddd", res.result);
			})

	}

	const certificatData = () => {
		ApiGet(`master-certification?rpp=13&pg=0`)
			.then((res: any) => {
				console.log("jjjjjjjjjjjj", res);
				setCertificationData(res[0].result)

			})
	}

	const techanologiData = () => {
		ApiGet(`master-technology?rpp=10&pg=1`)
			.then((res: any) => {
				// console.log("jjjjjjjjjjjj", res);
				setTechanologyData(res[0].result)

			})
	}
	useEffect(() => {
		employDetail();
		certificatData();
		techanologiData();
		positionData();
	}, [])

	const EmployDataEdite = (EmployInformation: any) => {
		setToggle(true)
		setEmployData({
			...employData,
			name: EmployInformation.name,
			aboutMe: EmployInformation.aboutMe,
			gender: EmployInformation.gender,
			position: EmployInformation.positionId,
			emailId: EmployInformation.emailId,
			id: EmployInformation._id


		})

	}


	const onchange = (e: any) => {
		const formData: any = { ...employData }
		formData[e.target.id] = e.target.value
		setEmployData(formData)
	}

	const UpadateData = (id: any) => {
		console.log("fgfdg", employData);

		ApiPatch(`employee/${id}`, employData)
			.then((res) => {
				employDetail()
			})
			.catch((error) => {
				console.log(error.response.data.message)
			});
		setToggle(false)

	}

	const EmployDataDelete = (id: string) => {
		ApiDelete(`employee/${id}`)
			.then((res) => {
				employDetail()
			})
	}

	const handelChange = (e: any) => {
		const formData: any = { ...addData }
		if (e.target.id === 'instagram' || e.target.id === 'linkedIn' || e.target.id === 'skype'
			|| e.target.id === 'telegram') {
			formData.socialLinks[e.target.id] = e.target.value
		}
		else {
			formData[e.target.id] = e.target.value
		}
		setAddData(formData)
	}

	const handelChanged = (e: any, i: any) => {
		const formData: any = { ...addData }

		const temp = formData.technologies.map((technologiesdata: any, index: number) => {
			if (i === index) {
				if (e.target.id === "stars") {
					technologiesdata[e.target.id] = parseInt(e.target.value)
				}


				else {
					technologiesdata[e.target.id] = e.target.value
				}


			}

			return technologiesdata

		}
		)
		setAddData({ ...formData, technologies: temp })

	}

	// const handelChangedcertificatData = (e: any, i: any) => {
	// 	const formData: any = { ...addData }

	// 	const temp = formData.certifications.map((certifictionsdata: any, index: any) => {
	// 		if (i === index) {
	// 			certifictionsdata[e.target.id] = e.target.value




	// 		}

	// 		return certifictionsdata

	// 	}
	// 	)
	// 	setAddData({ ...formData, certifictions: temp })

	// }
	const handelChangedcertificatData = (e: any, i: any) => {
		const formData: any = { ...addData }

		const temp = formData.certifications.map((certificationsdata: any, index: number) => {
			if (i === index) {
				if (e.target.id === "certificateId") {
					certificationsdata[e.target.id] = e.target.value
				}


				else {
					certificationsdata[e.target.id] = e.target.value
				}


			}

			return certificationsdata

		}
		)
		setAddData({ ...formData, certifications: temp })

	}


	const addTechnologiesData = () => {
		setAddData({
			...addData, technologies: [
				...addData.technologies,
				{
					technologyId: "",
					stars: null
				}
			]
		})
	}

	const addCertifictionsData = () => {
		setAddData({
			...addData, certifications: [
				...addData.certifications,
				{
					certificateId: "",
					complitionDate: ""
				}
			]
		})
	}

	const addInformation = () => {




		// formData.append('addData', addData);

		// formData.append('name', addData.name);
		// formData.append('gender', addData.gender);

		// formData.append('position', addData.position);
		// formData.append('aboutMe', addData.aboutMe);
		// formData.append('emailId', addData.emailld);



		// for (var i = 0; i < addData.certifictions.length; i++) {
		// 	for (const [key, value] of Object.entries(addData.certifictions[i])) {
		// 		formData.append(`certifications[${i}][${key}]`, value);
		// 	}
		// }

		// for (var i = 0; i < addData.technologies.length; i++) {
		// 	for (const [key, value] of Object.entries(addData.technologies[i])) {
		// 		formData.append(`technologies[${i}][${key}]`, value);
		// 	}
		// }


		// formData.append('socialLinks', JSON.stringify(addData.socialLinks));




		console.log("addData", addData);

		setErrorMsg(
			{
				...errorMsg,
				name: !addData.name ? "enter name" : "",
				gender: !addData.gender ? "enter gender" : "",
				position: !addData.position ? "enter position" : "",
				aboutMe: !addData.aboutMe ? "enter aboutMe" : "",
				emailId: !addData.emailId ? "enter emailId" : "",
				// socialLinks.instagram:!socialLinks.instagram ? "enter instagram Link " : ""
				socialLinks: {
					instagram: !addData.socialLinks.instagram ? "enter instagram Link" : "",
					linkedIn: !addData.socialLinks.linkedIn ? "enter linkedIn Link" : "",
					skype: !addData.socialLinks.skype ? "enter skype Link" : "",
					telegram: !addData.socialLinks.telegram ? "enter telegram Link" : "",

				},
			}
		)

		let formData: any = new FormData();

		formData.append('name', addData.name);
		formData.append('gender', addData.gender);

		formData.append('position', addData.position);
		formData.append('aboutMe', addData.aboutMe);
		formData.append('emailId', addData.emailId);



		for (var i = 0; i < addData.certifications.length; i++) {
			for (const [key, value] of Object.entries(addData.certifications[i])) {
				formData.append(`certifications[${i}][${key}]`, value);
			}
		}

		for (var i = 0; i < addData.technologies.length; i++) {
			for (const [key, value] of Object.entries(addData.technologies[i])) {
				formData.append(`technologies[${i}][${key}]`, value);
			}
		}


		formData.append('socialLinks', JSON.stringify(addData.socialLinks));

		// for (var key in addData) {
		// 	formData.append(key, JSON.stringify(addData[key]))

		// 	// formData.append(key, Array.isArray(addData[key]) || typeof addData[key] === "object" ? JSON.stringify(addData[key]) : addData[key])
		// }

		for (var pair of formData.entries()) {
			console.log(pair);
		}

		ApiPost(`employee`, formData)
			.then((res) => {
				employDetail()
			})

	}



	// const upadateTechnologiesData = () => {
	//       ApiPost(`master-technology`, { name: addData.technologies[0].technologyName })
	//             .then((res) => {

	//             })
	// }

	// const upadateCertifictionsData = () => {
	//       ApiPost(`master-certification`,
	//             {
	//                   name: addData.certifictions[0].certificateName,
	//                   complitionDate: addData.certifictions[0].complitionDate,
	//             }

	//       )
	//             .then((res) => {

	//             })
	// }
	return (
		<div>
			{
				toggle ?
					<>
						<span>Name</span>   <input type='text' id='name' value={employData.name} onChange={onchange} />
						<br></br>
						<span>AboutMe</span>   <input type='text' id='aboutMe' value={employData.aboutMe} onChange={onchange} /><br></br>
						<span>Gender</span>   <input type='text' id='gender' value={employData.gender} onChange={onchange} /><br></br>
						{/* <span>Position</span> <input type='text' id='position' value={employData.position} onChange={onchange} /><br></br> */}

						{/* <br></br> */}
						<span>Position</span>  <select id='position' value={employData.position} onChange={onchange}>
							{
								positionDatas.map((positioninformation: any) => (

									<option value={positioninformation._id}>{positioninformation.name}</option>


								))
							}
						</select><br></br>

						<span>emailId</span>  <input type='text' id='emailId' value={employData.emailId} onChange={onchange} /><br></br>
						<button onClick={() => { UpadateData(employData.id) }}>UpaDate</button><br></br>
					</>
					:
					<>
						<span>Name</span>   <input type='text' id='name' value={addData.name} onChange={handelChange} />
						{errorMsg.name && <span>{errorMsg.name}</span>}

						<br></br>
						<span>AboutMe</span>   <input type='text' id='aboutMe' value={addData.aboutMe} onChange={handelChange} />
						{errorMsg.aboutMe && <span>{errorMsg.aboutMe}</span>}

						<br></br>
						<span>Gender</span>   <input type='radio' id='gender' value='male' name='gender' onChange={handelChange} /><span>Male</span>
						<input type='radio' id='gender' value='female' name='gender' onChange={handelChange} /><span>Female</span>
						<br></br>{errorMsg.gender && <span>{


							errorMsg.gender}</span>}

						<br></br>
						<span>Position</span>  <select id='position' value={employData.position} onChange={handelChange}>
							{
								certificationData.map((certificationData: any) => (

									<option value={certificationData._id}>{certificationData.name}</option>


								))
							}
						</select>
						{errorMsg.position && <span>{errorMsg.position}</span>}

						<br></br>
						<span>EmailId</span>  <input type='text' id='emailId' value={addData.emailId} onChange={handelChange} />
						{errorMsg.emailId && <span>{errorMsg.emailId}</span>}

						<br></br>

						<span>instagram</span>  <input type='text' id='instagram' value={addData.socialLinks.instagram} onChange={handelChange} />
						{errorMsg.socialLinks.instagram && <span>{errorMsg.socialLinks.instagram}</span>}

						<br></br>

						<span>linkedIn</span>  <input type='text' id='linkedIn' value={addData.socialLinks.linkedIn} onChange={handelChange} />
						{errorMsg.socialLinks.linkedIn && <span>{errorMsg.socialLinks.linkedIn}</span>}

						<br></br>

						<span>skype</span>  <input type='text' id='skype' value={addData.socialLinks.skype} onChange={handelChange} />
						{errorMsg.socialLinks.skype && <span>{errorMsg.socialLinks.skype}</span>}

						<br></br>

						<span>telegram</span>  <input type='text' id='telegram' value={addData.socialLinks.telegram} onChange={handelChange} />
						{errorMsg.socialLinks.telegram && <span>{errorMsg.socialLinks.telegram}</span>}

						<br></br>
						{
							addData.technologies.map((technologiesData: any, index: any) =>

							(
								<>
									{/* <span>technologyName</span>  <input type='text' id='technologyName' value={technologiesData.technologyName} onChange={(e) => { handelChanged(e, index) }} /><br></br> */}


									<span>technologyName</span>  <select id='technologyId' value={technologiesData.technologyId} onChange={(e) => { handelChanged(e, index) }} >
										{
											techanologyData.map((techanologyData: any) => (

												<option value={techanologyData._id}>{techanologyData.name}</option>


											))
										}

									</select>


									<br></br>

									<span>stars</span>  <input type='number' id='stars' value={technologiesData.stars} onChange={(e) => { handelChanged(e, index) }} /><br></br>

								</>
							)
							)
						}
						{/* <button onClick={upadateTechnologiesData}>Upadate TechnologiesData</button><br></br> */}

						<button onClick={addTechnologiesData}>Add TechnologiesData</button><br></br>

						{
							addData.certifications.map((certifictionsData: any, index: any) =>
							(
								<>
									{/* <span>certificateName</span>  <input type='text' id='certificateName' value={certifictionsData.certificateName} onChange={(e) => { handelChangedcertificatData(e, index) }} /><br></br> */}

									<span>certificateName</span>  <select id='certificateId' value={certifictionsData.certificateId} onChange={(e) => { handelChangedcertificatData(e, index) }} >
										{
											positionDatas.map((positioninformation: any) => (

												<option value={positioninformation._id}>{positioninformation.name}</option>


											))
										}
									</select>

									<br></br>

									<span>date</span>  <input type='date' id='complitionDate' value={certifictionsData.complitionDate} onChange={(e) => { handelChangedcertificatData(e, index) }} /> <br></br>
									<>
										{/* <input
                                                name=""
                                                value=""
                                                type="file"
                                                id='actual-btn'
                                                className='customInput'
                                                onChange={(e: any) => {


                                                      setAddData({ ...addData, profilePic: e.target.files[0] });
                                                }}
                                          />
                                          <label htmlFor='actual-btn' className='ChooseBtn'>
                                                <img src='./img/ChoseFile.svg' />
                                          </label> */}
									</>
									{/* <br></br> */}

								</>
							)
							)
						}
						{/* </form> */}
						{/* <button onClick={upadateCertifictionsData}>Upadate CertifictionsData</button><br></br> */}

						<button onClick={addCertifictionsData}>Add CertifictionsData</button><br></br>
						<button onClick={addInformation}>Add Data</button>
					</>

			}
			{/* <input type='date' /> */}

			{
				data.map((EmployInformation: any) => {
					return (
						<>
							<table style={{ border: "1px solid black" }}>
								<tr style={{ border: "1px solid black" }}>
									<td>
										AboutMe
									</td>
									<td style={{ border: "1px solid black" }}>
										{EmployInformation.aboutMe}
									</td>
								</tr>

								<tr style={{ border: "1px solid black" }}>
									<td>EmailId</td>
									<td style={{ border: "1px solid black" }}>{EmployInformation.emailId}</td>
								</tr>
								<tr style={{ border: "1px solid black" }}>
									<td>Gender</td>
									<td style={{ border: "1px solid black" }}>{EmployInformation.gender}</td>
								</tr>
								<tr style={{ border: "1px solid black" }}>
									<td>Name</td>
									<td style={{ border: "1px solid black" }}>{EmployInformation.name}</td>
								</tr>
								<tr style={{ border: "1px solid black" }}>
									<td>Position</td>
									<td style={{ border: "1px solid black" }}>{EmployInformation.position}</td>
								</tr>


								<tr style={{ border: "1px solid black" }}>
									<td>SocialLinks Instagram</td>
									<td style={{ border: "1px solid black" }}>{EmployInformation.socialLinks.instagram}</td>
								</tr>
								<tr style={{ border: "1px solid black" }}>
									<td>SocialLinks LinkedIn</td>
									<td style={{ border: "1px solid black" }}>{EmployInformation.socialLinks.linkedIn}</td>
								</tr>
								<tr style={{ border: "1px solid black" }}>
									<td>SocialLinks Skype</td>
									<td style={{ border: "1px solid black" }}>{EmployInformation.socialLinks.skype}</td>
								</tr>
								<tr style={{ border: "1px solid black" }}>
									<td>SocialLinks Telegram</td>
									<td style={{ border: "1px solid black" }}> {EmployInformation.socialLinks.telegram}</td>
								</tr>






								{EmployInformation.technologies.map((technologiesdata: any) =>
									<>
										<tr>
											<td style={{ border: "1px solid black" }}>Technologies Name</td>
											<td style={{ border: "1px solid black" }}>{technologiesdata.technologyName}</td>
										</tr>
										<tr>
											<td style={{ border: "1px solid black" }}>Technologies stars</td>
											<td style={{ border: "1px solid black" }}>{technologiesdata.stars}</td>
										</tr>
									</>
								)}

								{EmployInformation.certifications.map((certificationsdata: any) =>
									<>
										<tr>
											<td style={{ border: "1px solid black" }}>certificateName</td>
											<td style={{ border: "1px solid black" }}>{certificationsdata.certificateName}</td>
										</tr>
										<tr>
											<td style={{ border: "1px solid black" }}>complitionDate</td>
											<td style={{ border: "1px solid black" }}>{certificationsdata.complitionDate}</td>
										</tr>
									</>
								)}

								{EmployInformation.profilePic &&

									<tr>
										<td>ProfilePic</td>
										<td style={{ border: "1px solid black" }}>
											{

												< img src={`${API.hostUrl}employee/${EmployInformation.profilePic}`} alt='' style={{ width: "200px" }} />



											}
										</td>
									</tr>
								}
							</table>

							<button onClick={() => { EmployDataEdite(EmployInformation) }}>Edit</button>
							<button onClick={() => { EmployDataDelete(EmployInformation._id) }}>Delete</button>

						</>

					)
				})
			}



		</div>
	)
}
