

function School({school}) {
  return (
    <div className="school-card">
      <img src={`https://school-application-wd3o.onrender.com/images/${school.image}`} alt={school.name} />
      <h3>{school.name}</h3>
      <p>{school.address}, {school.city}</p>
    </div>
  )
}

export default School