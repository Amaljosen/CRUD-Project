
export default function Add({newPatient,requiredFields,handleInputChange,handleCancel,handleSubmit,editingPatient,Hidden,setHidden}) {


    const display=`absolute z-10 w-screen h-screen top-0 flex justify-center items-center bg-black bg-opacity-55 text-blue-900 ${Hidden?"hidden":"block "}`
  
    return (

    <div className={display} >
       <div className='bg-white p-10 rounded-xl lg:w-5/12 lg:space-y-6 space-x-3'>
        <div className='flex flex-col justify-center items-center'>
                <h3 className='font-bold text-xl lg:text-2xl pb-4'>Admit Card</h3>
              </div>
              <div className='flex flex-col justify-start items-start space-y-1'>
                <h3 className='font-bold lg:text-xl'>Candidate Name</h3>
                <input
                  placeholder='Name'
                  className={`border w-[100%] h-10 p-5 rounded-xl ${
                    requiredFields.includes('name') ? 'border-red-500' : ''
                  }`}
                  type='text'
                  name='name'
                  value={newPatient.name}
                  onChange={handleInputChange}
                />
              </div>
              <div className='flex flex-col justify-start items-start space-y-1'>
                <h3 className='font-bold lg:text-xl'>Gender</h3>
                <input
                  placeholder='Gender'
                  className={`border w-[100%] h-10 p-5 rounded-xl ${
                    requiredFields.includes('gender') ? 'border-red-500' : ''
                  }`}
                  type='text'
                  name='gender'
                  value={newPatient.gender}
                  onChange={handleInputChange}
                />
              </div>
              <div className='flex flex-col justify-start items-start space-y-1'>
                <h3 className='font-bold lg:text-xl'>Admit Date</h3>
                <input
                  placeholder='Admit Date'
                  className={`border w-[100%] h-10 p-5 rounded-xl ${
                    requiredFields.includes('admitDate') ? 'border-red-500' : ''
                  }`}
                  type='date'
                  name='admitDate'
                  value={newPatient.admitDate}
                  onChange={handleInputChange}
                />
              </div>
              <div className='flex flex-col justify-start items-start space-y-1'>
                <h3 className='font-bold lg:text-xl'>Disease</h3>
                <input
                  placeholder='Disease'
                  className={`border w-[100%] h-10 p-5 rounded-xl ${
                    requiredFields.includes('disease') ? 'border-red-500' : ''
                  }`}
                  type='text'
                  name='disease'
                  value={newPatient.disease}
                  onChange={handleInputChange}
                />
              </div>
              <div className='flex flex-col justify-start items-start space-y-1'>
                <h3 className='font-bold lg:text-xl'>Specialist</h3>
                <input
                  placeholder='Specialist Name'
                  className={`border w-[100%] h-10 p-5 rounded-xl ${
                    requiredFields.includes('doctor') ? 'border-red-500' : ''
                  }`}
                  type='text'
                  name='doctor'
                  value={newPatient.doctor}
                  onChange={handleInputChange}
                />
              </div>
          
              <div className='flex justify-center items-center gap-4 mt-5'>
                <button
                  onClick={handleCancel}
                  className='px-8 py-2 text-white bg-red-600 rounded-full lg:text-xl text-sm transform lg:hover:scale-110 transition-transform duration-300 hover:bg-red-700'
                >
                  Cancel
                </button>
                <button
                  onClick={handleSubmit}
                  className='px-8 py-2 text-white bg-green-600 rounded-full lg:text-xl text-sm transform lg:hover:scale-110 transition-transform duration-300 hover:bg-green-700'
                >
                  {editingPatient ? 'Update' : 'Submit'}
                </button>
              </div>
              </div>
    </div>
  )
}
