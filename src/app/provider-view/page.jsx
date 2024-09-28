import data from '../../../data/patients.json'
import Header from '@/components/Header'
import PatientCard from '@/components/PatientCard'

export default function Home() {

  return (
    <>
      <Header />
      <h1>Your Patients</h1>
      <div className="flex flex-row flex-wrap gap-10">
        {data.map((d, index) => (
          <PatientCard key={index} patient={d} />
        ))}
      </div>
    </>

  )
}