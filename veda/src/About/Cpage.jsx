import Footer from "../Components/Footer";
import Section from "./Section";
import Form from "./Form";
import CertificateSection from "./Certificate";
import Complimentary from "./Complimentary";
import Benefits from "./Section3";
import CourseContent from "./CourseCont";
import Similar from "./Similar";

function Cpage() {
  return (
    <div>
       <Section/>
       <Form/>
      <CertificateSection/>
        <Complimentary/>
        <Benefits/>
        <CourseContent/>
        <Similar/>
        <Footer/>   

     
    </div>
  );
}
export default Cpage;