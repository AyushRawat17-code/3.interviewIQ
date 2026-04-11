import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"
import { ServerUrl } from '../App';
import Step3Report from '../components/Step3Report';

function InterviewReport() {
  const {id} = useParams()
  const [report, setReport] = useState(null);

  useEffect(() => {
    const fetchReport = async () => {
      try {
        const token = localStorage.getItem("token")  // ✅ get token
        const result = await axios.get(ServerUrl + "/api/interview/report/" + id, {
          headers: { Authorization: `Bearer ${token}` }  // ✅ send token
        })
        console.log(result.data)
        setReport(result.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchReport()
  }, [])

  if (!report) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500 text-lg">Loading Report...</p>
      </div>
    );
  }

  return <Step3Report report={report} />
}

export default InterviewReport
