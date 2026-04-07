function Form() {
  return (
    <section className="w-full py-10 px-4 sm:px-6 md:px-12 lg:px-16  text-[#4E2D00] font-[Vidaloka]">

      <div className="max-w-6xl mx-auto">

        {/* TITLE + RATING */}
        <div className="flex justify-between items-start mb-4">

          <div>
            <h1 className="text-2xl md:text-3xl mb-2">
              Medha Suktam
            </h1>

            <p className="text-sm text-[#7a6756] max-w-3xl font-[Bellefair]">
              Medhā is not mere memory; it is the integrative intelligence that
              understands, retains, applies, and expresses knowledge correctly.
            </p>
          </div>

          <div className="flex items-center gap-1 text-sm font-[Bellefair] mt-1">
            <span className="text-[#d08a28]">★</span>
            <span>4.7</span>
            <span className="text-[#7a6756]">(1200 Reviews)</span>
          </div>

        </div>

        {/* INFO ROW */}
        <div className="border-y border-[#e5ddd3] py-3 flex flex-wrap gap-6 text-sm text-[#7a6756] font-[Bellefair] mb-6">

          <span>🕒 Last updated January 2025</span>
          <span>🌐 English</span>
          <span>🔘 English(CC)</span>

        </div>

        {/* DETAILS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-16 text-sm mb-8">

          <div className="flex gap-4">
            <span className="text-[#b8b1a9] min-w-[140px]">Veda</span>
            <span className="font-[Bellefair]">Kṛṣṇa Yajurveda</span>
          </div>

          <div className="flex gap-4">
            <span className="text-[#b8b1a9] min-w-[140px]">Anuvāka</span>
            <span className="font-[Bellefair]">
              41–44 (varies slightly by recension)
            </span>
          </div>

          <div className="flex gap-4">
            <span className="text-[#b8b1a9] min-w-[140px]">Textual Source</span>
            <span className="font-[Bellefair]">9.4 hours</span>
          </div>

          <div className="flex gap-4">
            <span className="text-[#b8b1a9] min-w-[140px]">Opening words</span>
            <span className="font-[Bellefair]">
              Medhā devī juṣamāṇā na āgāt...
            </span>
          </div>

          <div className="flex gap-4">
            <span className="text-[#b8b1a9] min-w-[140px]">Kāṇḍa</span>
            <span className="font-[Bellefair]">10</span>
          </div>

          <div className="flex gap-4">
            <span className="text-[#b8b1a9] min-w-[140px]">Primary Devatā</span>
            <span className="font-[Bellefair]">Medhā Devī</span>
          </div>

        </div>

        {/* TIME BOX */}
        <div className="border border-[#e5ddd3] rounded-xl p-6 mb-8 bg-white">

          <h2 className="text-lg md:text-xl mb-3">
            Time of Chanting
          </h2>

          <p className="text-sm text-[#7a6756] mb-2 font-[Bellefair]">
            Traditionally chanted:
          </p>

          <ul className="list-disc ml-5 space-y-1 text-sm text-[#7a6756] font-[Bellefair]">
            <li>Before Vedic study (adhyayana)</li>
            <li>During brahmacarya and student life</li>
            <li>Before examinations, debates, or teaching</li>
          </ul>

          <p className="text-sm mt-3 font-[Bellefair] text-[#7a6756]">
            In Gurukula tradition, Medhā Sūktam is recited daily by students.
          </p>

        </div>

        {/* SUMMARY */}
        <div className="flex flex-col md:flex-row justify-between gap-6">

          <div className="max-w-xl">
            <h3 className="text-lg md:text-xl mb-2">
              Summary
            </h3>

            <p className="text-sm text-[#7a6756] font-[Bellefair]">
              Medha Suktam invokes the divine intelligence that enables true
              understanding, retention, discrimination, and expression of
              knowledge forming the foundation of all learning and wisdom.
            </p>
          </div>

          <div className="text-sm text-[#7a6756] space-y-1 font-[Bellefair]">
            <p>Lecture: 95</p>
            <p>Video: 8.5 total hours</p>
          </div>

        </div>

        {/* BOTTOM LINE */}
        <div className="border-b border-[#e5ddd3] mt-8"></div>

      </div>
    </section>
  );
}

export default Form;