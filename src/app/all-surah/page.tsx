import Input from "@/components/Input";
import Icon from "@/components/Icons";
import SurahCard from "@/components/SurahCard";
import { surahs } from "@/data/surahs";

const SurahList = () => {
  return (
    <div className="px-4 py-4 flex flex-col gap-6">
      <div className="flex flex-col gap-6">
        <h1 className="text-3xl font-bold text-blue-950">List of All Surah</h1>
        <Input
          type="text"
          prefix={<Icon name="search-outline" className="text-black" size={20} />}
          placeholder="Search something..."
        />
      </div>
      <div className="flex flex-col gap-2">
        {surahs.map((surah) => (
          <SurahCard
            key={surah.number}
            number={surah.number}
            name={surah.name}
            englishName={surah.englishName}
            englishNameTranslation={surah.englishNameTranslation}
            numberOfAyahs={surah.numberOfAyahs}
            revelationType={surah.revelationType}
          />
        ))}
      </div>
    </div>
  );
};

export default SurahList;
