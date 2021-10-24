import Pet from "./Pet";

const Results = ({ pets }) => {
  return (
    <div className="search">
      {!pets.length ? (
        <h2>No Pets Fount!</h2>
      ) : (
        pets.map(({ id, name, animal, breed, images, city, state }) => (
          <Pet
            key={id}
            id={id}
            name={name}
            animal={animal}
            breed={breed}
            location={`${city}, ${state}`}
            images={images}
          />
        ))
      )}
    </div>
  );
};

export default Results;
