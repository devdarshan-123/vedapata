function Form() {
  return (
    <section className="w-full py-10 px-4 sm:px-6 md:px-12 lg:px-16 text-[#61554C] font-[Vidaloka]">

      <div className="max-w-6xl mx-auto">

        
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">

          <div>
            <h1 className="text-2xl md:text-3xl text-[#4E2D00] mb-2">
              Medha Suktam
            </h1>

            <p className="text-sm md:text-base text-[#7a6756] max-w-3xl font-[Bellefair]">
              Medhā is not mere memory; it is the integrative intelligence that
              understands, retains, applies, and expresses knowledge correctly.
            </p>
          </div>

          <div className="flex items-center gap-2 text-sm font-[Bellefair]">
            <span className="text-[#d08a28]">★</span>
            <span>4.7</span>
            <span className="text-[#7a6756]">(1200 Reviews)</span>
          </div>

        </div>

        
        <div className="border-y border-[#d8cfc5] py-3 flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-8 text-sm text-[#6b5746] mb-8 justify-center">

          <span className="font-[Bellefair]">🕒 Last updated January 2025</span>
          <span className="font-[Bellefair]">🌐 English</span>
          <span className="font-[Bellefair]">🔘 English(CC)</span>

        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-0 text-sm mb-10">

          <div className="flex gap-4">
            <span className="text-[#AEAEAE] min-w-[130px]">Veda</span>
            <span className="font-[Bellefair] text-[#3A2F26]">Kṛṣṇa Yajurveda</span>
          </div>

          <div className="flex gap-4">
            <span className="text-[#AEAEAE] min-w-[130px]">Anuvāka</span>
            <span className="font-[Bellefair] text-[#3A2F26]">
              41–44 (varies slightly by recension)
            </span>
          </div>

          <div className="flex gap-4">
            <span className="text-[#AEAEAE] min-w-[130px]">Textual Source</span>
            <span className="font-[Bellefair] text-[#3A2F26]">9.4 hours</span>
          </div>

          <div className="flex gap-4">
            <span className="text-[#AEAEAE] min-w-[130px]">Opening words</span>
            <span className="font-[Bellefair] text-[#3A2F26]">
              Medhā devī juṣamāṇā na āgāt...
            </span>
          </div>

          <div className="flex gap-4">
            <span className="text-[#AEAEAE] min-w-[130px]">Kāṇḍa</span>
            <span className="font-[Bellefair] text-[#3A2F26]">10</span>
          </div>

          <div className="flex gap-4">
            <span className="text-[#AEAEAE] min-w-[130px]">Primary Devatā</span>
            <span className="font-[Bellefair] text-[#3A2F26]">
              Medhā Devī
            </span>
          </div>

        </div>

        <div className="border border-[#d6ccc2] rounded-xl p-6 md:p-8 mb-10">

          <h2 className="text-xl md:text-2xl mb-4 text-[#4E2D00]">
            Time of Chanting
          </h2>

          <p className="text-sm mb-3">Traditionally chanted:</p>

          <ul className="list-disc ml-6 space-y-2 text-sm">
            <li>Before Vedic study (adhyayana)</li>
            <li>During brahmacarya and student life</li>
            <li>Before examinations, debates, or teaching</li>
          </ul>

          <p className="text-sm md:text-base mt-4 font-[Bellefair]">
            In Gurukula tradition, Medhā Sūktam is recited daily by students.
          </p>

        </div>

        <div className="flex flex-col md:flex-row md:justify-between gap-6">

          <div className="max-w-xl">
            <h3 className="text-xl md:text-2xl mb-3 text-[#4E2D00]">
              Summary
            </h3>

            <p className="text-sm md:text-base">
              Medha Suktam invokes the divine intelligence that enables true
              understanding, retention, discrimination, and expression of
              knowledge forming the foundation of all learning and wisdom.
            </p>
          </div>

          <div className="text-sm text-[#6b5746] space-y-2">
            <p>Lecture: 95</p>
            <p>Video: 8.5 total hours</p>
          </div>

        </div>

        <div className="border-b mt-10"></div>

      </div>
    </section>
  );
}

export default Form;