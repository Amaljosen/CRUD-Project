import React,{useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import Add from './Add';


export default function Crud() {

    // ************ For Side Navbar On Click *************
        const [Hidden,setHidden]=useState(true)
        const add=()=>{
            setHidden(false)
        }

  
        const [patients, setPatients] = useState([
          { id: 1, name: 'Kamal', gender: 'Male', admitDate: '2023-12-18', disease: 'Fever', doctor: 'Dr. Makesh', actions: 'Prescription' },
          { id: 2, name: 'Geetha', gender: 'Female', admitDate: '2023-12-20', disease: 'Fever', doctor: 'Dr. Selvan', actions: 'Prescription' },
          { id: 3, name: 'Sri Swetha', gender: 'Female', admitDate: '2023-12-24', disease: 'Fever', doctor: 'Dr. Makesk', actions: 'Prescription' },
          { id: 4, name: 'Rakesh Kumar', gender: 'Male', admitDate: '2023-12-25', disease: 'Fever', doctor: 'Dr. Makesh', actions: 'Prescription' },
          // Add more patient data as needed
        ]);


      
        const [newPatient, setNewPatient] = useState({
          name: '',
          gender: '',
          admitDate: '',
          disease: '',
          doctor: '',
          actions: '',
        });
      
        const [editingPatient, setEditingPatient] = useState(null);
        const [requiredFields, setRequiredFields] = useState([]);
      
        const handleInputChange = (e) => {
          const { name, value } = e.target;
          setNewPatient((prevPatient) => ({ ...prevPatient, [name]: value }));
        };
      
        const handleCancel = () => {
          // Reset the form or perform any other actions on cancel
          setNewPatient({
            name: '',
            gender: '',
            admitDate: '',
            disease: '',
            doctor: '',
            actions: '',
          });
          setEditingPatient(null);
          setRequiredFields([]);
          setHidden(true)
        };
      
        const handleSubmit = () => {
          const requiredFieldsList = ['name', 'gender', 'admitDate', 'disease', 'doctor'];
      
          // Check if required fields are filled
          const missingFields = requiredFieldsList.filter((field) => !newPatient[field]);
      
          if (missingFields.length > 0) {
            // Set the list of missing required fields
            setRequiredFields(missingFields);
          } else {
            if (editingPatient) {
              // Editing existing patient data
              setPatients((prevPatients) =>
                prevPatients.map((patient) =>
                  patient.id === editingPatient.id ? { ...patient, ...newPatient } : patient
                )
              );
              setEditingPatient(null);
            } else {
              // Adding new patient data
              setPatients((prevPatients) => [...prevPatients, { id: prevPatients.length + 1, ...newPatient }]);
            }
      
            // Reset the form after submission
            handleCancel();
            setHidden(true)
          }
        };
      
        const handleEdit = (patient) => {
          // Set the form fields for editing
          setNewPatient({ ...patient });
          setEditingPatient(patient);
          setRequiredFields([]);
          setHidden(false)
        };
      
        const handleDelete = (id) => {
          // Delete patient data
          setPatients((prevPatients) => prevPatients.filter((patient) => patient.id !== id));
        };







  return (
    <>
    <div className='m-5 shadow-lg overflow-scroll text-sky-900 mt-10'>
       <table className='w-full text-xs lg:text-base'>
                <thead>
                  <tr>
                    <th className='border px-4 py-2'>S.No</th>
                    <th className='border px-4 py-2'>Canditate</th>
                    <th className='border px-4 py-2'>Gender</th>
                    <th className='border px-4 py-2'>Admit Date</th>
                    <th className='border px-4 py-2'>Disease</th>
                    <th className='border px-4 py-2'>Specialist</th>
                    <th className='border px-4 py-2'>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {patients.map((patient) => (
                    <tr key={patient.id} className='text-center'>
                      <td className='border px-4 py-2'>{patient.id}</td>
                      <td className='border px-4 py-2'>{patient.name}</td>
                      <td className='border px-4 py-2'>{patient.gender}</td>
                      <td className='border px-4 py-2'>{patient.admitDate}</td>
                      <td className='border px-4 py-2'>{patient.disease}</td>
                      <td className='border px-4 py-2'>{patient.doctor}</td>
                      <td className='border px-4 py-2'>
                        <button
                          onClick={() => handleEdit(patient)}
                          className='mr-2 text-blue-500 hover:text-blue-700'
                        >
                          <FontAwesomeIcon icon={faEdit} />
                        </button>
                        <button
                          onClick={() => handleDelete(patient.id)}
                          className='text-red-500 hover:text-red-700'
                        >
                          <FontAwesomeIcon icon={faTrash} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table> 

                 
              
    </div>
    <div className='text-right m-5'>
    <button onClick={add} className='bg-blue-600 hover:bg-blue-700 transition-all lg:hover:scale-110 duration-300 text-white px-10 py-2 rounded-2xl shadow-xl'>Add</button>
    </div>
    
    <Add requiredFields={requiredFields} newPatient={newPatient} handleInputChange={handleInputChange} handleCancel={handleCancel} handleSubmit={handleSubmit} editingPatient={editingPatient} Hidden={Hidden} setHidden={setHidden}/>
   
    </>
  )
}
