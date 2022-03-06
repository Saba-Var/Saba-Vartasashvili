import { Link } from "react-router-dom";
import WorkType from "./InputFielss/WorkType";
import ContactCovid from "./InputFielss/ContactCovid";
import When from "./InputFielss/When";
import Vaccinated from "./InputFielss/Vaccinated";
import LastVaccine from "./InputFielss/LastVaccine";
import NextPage from "../../buttons/NextPage";
import Balls from "../../assets/balls (2).svg";
import styles from "./CovidStuff.module.css";
import Previous from "../../assets/Previous.svg";
const CovidStuff = () => {
  return (
    <>
      <form>
        <WorkType />
        <ContactCovid />
        <When />
        <Vaccinated />
        <LastVaccine />
        <NextPage top="1292px" left="507px" />
      </form>
      <img
        src={Balls}
        alt="pagination icons"
        className={styles["pagination__balls"]}
      />
      <Link to="/Technical-Skillset">
        <img
          src={Previous}
          alt="pagination icons"
          className={styles["pagination__previous"]}
        />
      </Link>
    </>
  );
};

export default CovidStuff;
