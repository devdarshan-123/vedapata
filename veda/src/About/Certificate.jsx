const CertificateSection = () => {
  return (
    <section className="w-full mt-4 md:mt-0 px-6 md:px-12 lg:px-16">
      <div className="max-w-6xl mx-auto text-center md:text-left">

        <h2 className="text-xl md:text-2xl font-[Vidaloka] text-[#4E2D00] mb-2">
          Certificates
        </h2>

        <p className="text-sm md:text-base text-[#61554C] font-[Vidaloka] mb-5">
          Get certificate by completing course
        </p>

        <button className="bg-[#e4881f] text-white px-6 md:px-8 py-2 rounded-full text-sm md:text-base hover:opacity-90 mb-10 font-[Vidaloka] w-full md:w-auto">
          Download Certificate
        </button>

      </div>
    </section>
  );
};

export default CertificateSection;