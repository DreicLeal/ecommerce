"use client"
import { useLanguageContext } from "@/contexts/languageContext/languageContext";

export default function About() {
    const {languageSpreader} = useLanguageContext()
    return (
    <div className="max-w-[800px] flex flex-col gap-4 p-4">
      <h2 className="font-bold text-3xl"> <span className="text-5xl">🖖</span>{languageSpreader.about.hello}</h2>
      <p>{languageSpreader.about.introduction}</p>
      <div>
        <p className="font-bold">🎯 {languageSpreader.about.whatIDoTitle}</p>
        <p>{languageSpreader.about.whatIDo}</p>
      </div>
      <div>
        <p className="font-bold">
          📌 {languageSpreader.about.keyStrengthsTitle}
        </p>
        <ul>
          <li>✅{languageSpreader.about.specialization} </li>
          <li>✅{languageSpreader.about.knowledge}</li>
          <li>✅{languageSpreader.about.experience}</li>
          <li>✅{languageSpreader.about.familiarity} </li>
        </ul>
      </div>
    </div>
  );
}
