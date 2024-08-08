import React from "react";
import FormCard from "./FormCard";
import VehicleCard from "./VehicleCard";
import ChauffuerCard from "./ChauffuerCard";
import TermsCard from "./TermsCard";
import GenerateButton from "./GenerateButton";

const Main = () => {
  return (
    <div className="flex-1 p-6 bg-gray-100 rounded-md">
      {/* Heading and Subheading */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">Make New Offer</h1>
        <h2 className="text-xl text-gray-600">Offer Generator/ New Offer</h2>
      </div>
      <div className="bg-gray-200 p-6 rounded-lg shadow-md">

        {/*Form Card Section */}
        <FormCard></FormCard>

        {/*Vehicle Card Section */}
        <VehicleCard></VehicleCard>

        {/*Chauffuer Card Section */}

        <ChauffuerCard></ChauffuerCard>

        {/*Terms Card Section */}

        <TermsCard></TermsCard>

        {/*Generate Button Section */}

        <GenerateButton></GenerateButton>

        
      </div>
    </div>
  );
};

export default Main;
