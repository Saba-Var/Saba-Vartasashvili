import { useContext } from "react";
import Context from "../../../store/context";
import NextPageLink from "../../../buttons/NextPageLink";
const NextPageButton = () => {
  const userData = useContext(Context);
  const radiotActions =
    userData.covidActions === 1 &&
    userData.vaccinatedError === 1 &&
    userData.workPreference !== "";

  const NextPageRoute = (
    <NextPageLink top="1292px" left="507px" path="/Redberrian-Insights" />
  );
  return (
    <>
      {/* had covid and vaccinated/date inputs checked */}
      {radiotActions &&
        userData.vaccinated &&
        userData.hadCovid &&
        userData.hadCovidAt !== "" &&
        userData.vaccinatedAt !== "" &&
        NextPageRoute}

      {/* no covid and no vaccinated/date inputs unchecked */}
      {radiotActions &&
        !userData.vaccinated &&
        !userData.hadCovid &&
        NextPageRoute}

      {/* had covid and no vaccinated/only date input when checked */}
      {radiotActions &&
        userData.hadCovid &&
        userData.hadCovidAt !== "" &&
        !userData.vaccinated &&
        NextPageRoute}

      {/* no covid and  vaccinated/only last vaccine date input checked */}
      {radiotActions &&
        !userData.hadCovid &&
        userData.vaccinated &&
        userData.vaccinatedAt !== "" &&
        NextPageRoute}
    </>
  );
};
export default NextPageButton;
