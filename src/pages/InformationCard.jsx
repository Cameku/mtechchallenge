import React from "react";
import { Card, Image } from "semantic-ui-react";

const InformationCard = ({ personalInfo }) => {
  return (
    <>
      <div className="card">
        <Card.Content>
          <span>
            Name: {`${personalInfo.name.first} ${personalInfo.name.last}`}
            <br />
            Year: {`${new Date(personalInfo.registered.date).getFullYear()}`}
          </span>
        </Card.Content>
        <div>
          <Image
            src={
              personalInfo.id.name !== " "
                ? personalInfo.picture.large
                : "https://bulma.io/images/placeholders/64x64.png"
            }
            alt={personalInfo.gender}
          />
        </div>
        <Card.Content>
          <p>{`${personalInfo.name.first}  ${personalInfo.name.last}`}</p>
        </Card.Content>
      </div>
    </>
  );
};

export default InformationCard;
