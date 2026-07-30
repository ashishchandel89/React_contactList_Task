import React, { createContext } from 'react'

export const reelDataContext= createContext();

const ReelContext = () => {
    const data=[
        {
            name:"Ashish Chandel",
            rollno:23098116780002,
            cgpa:8.1
        },
        {
            name:"Prince",
            rollno:23098116780015,
            cgpa:7.5
        },
        {
            name:"Faizan Khan",
            rollno:23098116780005,
            cgpa:8.2
        }
    ]
  return (
    <div>
      <reelDataContext.Provider value={data}>
        {p}
      </reelDataContext.Provider>
    </div>
  )
}

export default ReelContext
