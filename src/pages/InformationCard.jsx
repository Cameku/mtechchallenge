import React from 'react'

const InformationCard = ({ personalInfo }) => {
  return (
    <div className="card">
    <div>
      <p>{`${personalInfo.name.first} ${personalInfo.name.last}`}</p>
    </div>
    <div>
      <img
        src={
            personalInfo.id.name !== " "
            ? personalInfo.picture.large
            : "https://bulma.io/images/placeholders/64x64.png"
        }
        alt={personalInfo.gender}
      />
     
    </div>
    <div>
      console.log(personalInfo);
    <p>{`${personalInfo.name.first} ${personalInfo.name.last}`}</p>
      <span>{`${personalInfo.name.first} ${personalInfo.name.last}`}</span><br />
      <span>{`${new Date(personalInfo.registered.date).getFullYear()}`}</span>
    </div>
  </div>
  )
}

export default InformationCard