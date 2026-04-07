import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Footer from "../Components/Footer";
import Section from "./Section";
import Form from "./Form"; // ✅ ADD THIS
import CertificateSection from "./Certificate";
import Complimentary from "./Complimentary";
import Benefits from "./Section3";
import CourseContent from "./CourseCont";
import Similar from "./Similar";

function Cpage() {

  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [products, setProducts] = useState([]);

  // ✅ FETCH SINGLE PRODUCT
  useEffect(() => {
    fetch(`http://localhost:8081/api/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.log(err));
  }, [id]);

  // ✅ FETCH ALL PRODUCTS
  useEffect(() => {
    fetch("http://localhost:8081/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);

  if (!product) return <div className="p-10">Loading...</div>;

  return (
    <div>

      {/* HERO */}
      <Section product={product} />

      {/* ✅ FIXED: SHOW FORM IN CORRECT PLACE */}
      <Form />

      {/* REST SAME */}
      <CertificateSection />
      <Complimentary />
      <Benefits />
      <CourseContent />

      <Similar products={products} />

      <Footer />

    </div>
  );
}

export default Cpage;