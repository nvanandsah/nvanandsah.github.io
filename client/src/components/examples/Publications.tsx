import Publications from '../Publications';

export default function PublicationsExample() {
  const publications = [
    {
      title: "Experimental Results for Energy Harvesting Using TEG",
      publisher: "IEEE ICC Workshop 2020",
      date: "2020"
    }
  ];

  return <Publications publications={publications} />;
}
