function CardComponent({name, email, password}) {
  return (
    <>
    <div className="card">
      <div className="card-image">
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <figure className="image is-48x48">
              <img
                src="https://bulma.io/assets/images/placeholders/96x96.png"
                alt="Placeholder image"
              />
            </figure>
          </div>
          <div className="media-content">
            <p className="title is-4">{name}</p>
            <p className="subtitle is-6">{email}</p>
          </div>
        </div>

        <div className="content">
            {password}
        </div>
      </div>
    </div>
  </>
  )
}

export default CardComponent