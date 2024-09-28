import data from '../../../../data/patients.json';
import visitData from '../../../../data/visit_history.json';
import PatientLayout from "@/components/PatientLayout";

export default function Home() {
  const patient = data[27]
  const myVisits = visitData.slice(0, patient.visit_history)
  return (
    <>
      <PatientLayout>
      <h2>Medical History</h2>
      {myVisits.length > 0 ? (
          <table>
            <th>
              <td>Date</td>
              <td>Provider</td>
              <td>Reason</td>
            </th>
            {myVisits.map((visit, index) => (
              <tr key={index}>
                <td>{visit.date}</td>
                <td>{visit.provider_first_name} {visit.provider_last_name}</td>
                <td>{visit.reason}</td>
              </tr>
            ))}
          </table>
        ) : (
          <p>Make your first appointment today!</p>
        )}
      </PatientLayout>
      
    </>
  );
}
