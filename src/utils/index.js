export async function fetchStudentData(studentId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const studentData = [
                {
                    "studentId": 1,
                    "name": "John Smith",
                    "age": 16,
                    "grade": 10,
                    "school": "ABC High School",
                    "schoolId": 1,
                    "legalguardianId": 2
                },
                {
                    "studentId": 2,
                    "name": "Emily Johnson",
                    "age": 15,
                    "grade": 9,
                    "school": "XYZ Middle School",
                    "schoolId": 1,
                    "legalguardianId": 3
                },
                {
                    "studentId": 3,
                    "name": "Michael Davis",
                    "age": 17,
                    "grade": 11,
                    "school": "123 Public School",
                    "schoolId": 2,
                    "legalguardianId": 1
                },
                {
                    "studentId": 4,
                    "name": "Sophia Anderson",
                    "age": 14,
                    "grade": 8,
                    "school": "PQR Academy",
                    "schoolId": 3,
                    "legalguardianId": 5
                },
                {
                    "studentId": 5,
                    "name": "Daniel Wilson",
                    "age": 16,
                    "grade": 10,
                    "school": "MNO High School",
                    "schoolId": 2,
                    "legalguardianId": 4
                }
            ]
            const student = studentData.find((student) => student.studentId === studentId);
            resolve(student);
            
        }, 1000)
    })
}

export async function fetchSchoolData(schoolId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const schoolData = [
                {
                  "schoolId": 1,
                  "name": "ABC High School",
                  "address": "123 Main Street",
                  "city": "New York",
                  "studentId": 3
                },
                {
                  "schoolId": 2,
                  "name": "XYZ Middle School",
                  "address": "456 Elm Street",
                  "city": "Los Angeles",
                  "studentId": 2
                },
                {
                  "schoolId": 3,
                  "name": "123 Public School",
                  "address": "789 Oak Street",
                  "city": "Chicago",
                  "studentId": 1
                }
            ] 
            const student = schoolData.find((school) => school.schoolId === schoolId);
            resolve(student);

        }, 1000)
    })
}

export async function fetchLegalguardianData(legalguardianId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const guardianData = [
                {
                  "legalguardianId": 1,
                  "name": "John Doe",
                  "relationship": "Parent",
                  "contactNumber": "123-456-7890",
                  "studentId": 1
                },
                {
                  "legalguardianId": 2,
                  "name": "Jane Smith",
                  "relationship": "Parent",
                  "contactNumber": "987-654-3210",
                  "studentId": 2
                },
                {
                  "legalguardianId": 3,
                  "name": "David Johnson",
                  "relationship": "Guardian",
                  "contactNumber": "555-123-4567",
                  "studentId": 3
                },
                {
                  "legalguardianId": 4,
                  "name": "Jane Johnson",
                  "relationship": "Guardian",
                  "contactNumber": "756-123-2342",
                  "studentId": 4
                },
                {
                  "legalguardianId": 5,
                  "name": "Johnson Johnson",
                  "relationship": "Guardian",
                  "contactNumber": "987-123-4545",
                  "studentId": 5
                }
            ]
            const student = guardianData.find((guardian) => guardian.legalguardianId === legalguardianId);
            resolve(student);

        }, 1000)
    })
}