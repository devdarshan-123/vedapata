import { useEffect, useState } from "react";

import Navbar from "./Components/Navbar";
import Section1 from "./Components/Section1";
import Courses from "./Components/Courses";
import Cards from "./Components/Cards";
import Footer from "./Components/Footer";

function MainPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8081/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="bg-[#f7f3ee] min-h-screen">

      <Navbar />
      <Section1 />
      <Courses />

      {/* ✅ 3 SECTIONS EXACT LIKE DESIGN */}
      <Cards title="Recommended for you" products={products} />
      <Cards title="Recommended for you" products={products} />
      <Cards title="Recommended for you" products={products} />

      <Footer />

    </div>
  );
}

export default MainPage;