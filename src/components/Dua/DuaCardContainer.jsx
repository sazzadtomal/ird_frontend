import DuaCard from "./DuaCard";

async function getData(id) {
  const res = await fetch(`https://ird-beckend.onrender.com/dua_by_sub/${id}`);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // if (!res.ok) {
  //   // This will activate the closest `error.js` Error Boundary
  //   throw new Error('Failed to fetch data')
  // }

  return res.json();
}

const DuaCardContainer = async ({ subcat }) => {
  const duas = await getData(subcat);

  return duas.map((dua) => (
    <DuaCard
      key={"duacard"+dua.dua_id}
      id={dua.dua_id}
      name={dua.dua_name_en}
      desc={dua.top_en}
      arabic={dua.dua_arabic}
      transliteration={dua.transliteration_en}
      translation={dua.translation_en}
      reference={dua.refference_en}
      audio={dua.audio}
    />
  ));
};

export default DuaCardContainer;
