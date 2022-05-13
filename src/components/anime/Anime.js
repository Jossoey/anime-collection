function Anime() {
    return (
      <div>
        <div>
          <img src={image} alt={english} />
        </div>
        <div>
          <h3>{english}</h3>
          <h3>{native}</h3>
        </div>
      </div>
    );
}

export default Anime;