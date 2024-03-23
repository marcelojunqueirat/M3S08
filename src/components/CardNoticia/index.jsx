function CardNoticia({ title }) {

  return (
    <div className="card">
      <h3>{title}</h3>
      <img src="https://source.unsplash.com/random" alt="random image" width="250" />
    </div>
  )
}

export default CardNoticia;