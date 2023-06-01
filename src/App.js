import { useEffect, useState } from 'react';
import { fetchStudentData, fetchSchoolData, fetchLegalguardianData } from './utils';
import './App.css';

function App() {

  const [studentsData, setStudentsData] = useState([]);
  const [loading, setLoading] = useState(true);

  const onStudentsPick = async (studentIds) => {
    
    let allDataRecord = []
    

    let i = 1;
    for (const studentId of studentIds) {
      getAllRecords(studentId, allDataRecord, studentIds.length, i )
      i++;
    }
  };

  useEffect(() => {
    onStudentsPick([1,2,3,4,5]);
  }, []);


  async function getAllRecords(studentId, allDataRecord, length, i ) {
    try {
      const studentData = await fetchStudentData(studentId);      
      const { schoolId, legalguardianId } = studentData;
      const schoolData = fetchSchoolData(schoolId);
      const legalguardianData = fetchLegalguardianData(legalguardianId);
      let promiseRecord = await Promise.all([studentData, schoolData, legalguardianData])
      
      allDataRecord[i-1] = promiseRecord[0];
      allDataRecord[i-1]['school'] = promiseRecord[1];
      allDataRecord[i-1]['legalguardian'] = promiseRecord[2];
      
      if (length === i) {
          setStudentsData(allDataRecord);          
      }
    } catch (error) {

    }
    finally {
      setLoading(false);
    }

  }

  if (loading) {
    return(
      <>
        <div style={{ textAlign: 'center', marginTop: '15px' }}>loading..</div>
      </>
    )
  }

  return (
    <div className="App">
        
        <h3>Student list</h3>        
        <table style={{ width: '80%', margin:'auto' }} border='1px'>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>School</th>
            <th>Guardian</th>
          </tr>
          {studentsData.map((student, i) => {
              return(
                <>
                  <tr>
                    <td>{student.name}</td>
                    <td>{student.age}</td>
                    <td>{student.school.name}</td>
                    <td>{student.legalguardian.name}</td>
                  </tr>
                </>
              )
          })}
        </table>
    </div>
  );
}

export default App;
