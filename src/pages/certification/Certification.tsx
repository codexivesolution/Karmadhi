// import React from 'react'
import React, { useState } from 'react'
import { ApiGet, ApiPost, ApiDelete, ApiPatch } from '../../helper/API/ApiData'
import { useEffect } from 'react'

export const Certification = () => {
	const [data, setData] = useState({
		name: "",
		description: "",
		// id: ""
	})

	const [errorMsg, setErrorMsg] = useState({
		name: "",
		description: "",



	})

	const [certificationData, setCertificationData] = useState([])
	const [id, setId] = useState("")
	const [toggle, setToggle] = useState(true)
	const certificatData = () => {
		ApiGet(`master-certification?rpp=13&pg=0`)
			.then((res: any) => {
				console.log("jjjjjjjjjjjj", res);
				setCertificationData(res[0].result)

			})
	}

	useEffect(() => {

		certificatData()
	}, [])
	const onChange = (e: any) => {
		const formData: any = { ...data }
		formData[e.target.id] = e.target.value
		setData(formData)
	}
	const addCertificatData = () => {
		setData({

			name: data.name,
			description: data.description,



		})

		ApiPost(`master-certification`, data


		)
			.then((res) => {
				certificatData()
			})
	}

	const certificatDataDelete = (id: any) => {
		ApiDelete(`master-certification/${id}`)
			.then((res: any) => {
				certificatData()
			})
	}

	const certificatDataEdite = (techanologyData: any) => {

		setToggle(false)
		setData({
			...data,
			name: techanologyData.name,
			// id: techanologyData._id
		})

		setId(techanologyData._id)

	}

	const UpadatecertificatData = () => {
		setToggle(true)
		ApiPatch(`master-certification/${id}`, data)
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
					<button onClick={addCertificatData}>Add certificationData</button><br></br>
				</>
				:
				<>
					<span>Name</span>  <input type='text' id='name' value={data.name} onChange={onChange} /><br></br>
					{/* <span>Description</span>  <input type='text' id='description' value={data.description} onChange={onChange} /><br></br> */}
					<button onClick={() => UpadatecertificatData()}>Upadate certificationData</button><br></br>
				</>
			}

			<>
				<h1>Certificat Name</h1>
				{
					certificationData.map((certificationData: any) => (
						<>
							<h2>{certificationData.name}</h2>
							<button onClick={() => certificatDataEdite(certificationData)}>Edite</button>
							<button onClick={() => certificatDataDelete(certificationData._id)}>Delete</button>

						</>
					))
				}
			</>
		</div>
	)
}
