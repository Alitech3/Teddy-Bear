import data from '../../../data/patients.json';

export default function Home() {

  data.forEach(d => {
    console.log(d)
  })

  return (
    <>
      <h1>Provider view</h1>
    </>
  )
}