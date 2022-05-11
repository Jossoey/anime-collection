import Card from "../ui/Card";

function Anime(id, romaji, english, native, image) {
    return (
      <Card>
        <div>
          <img src={image} alt={english} />
        </div>
        <div>
          <h3>{english}</h3>
          <h3>{native}</h3>
        </div>
      </Card>
    );
}

export default Anime;