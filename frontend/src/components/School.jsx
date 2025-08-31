

function School({school}) {
  return (
    <div className="school-card">
      <img src={`http://localhost:5000/images/${school.image}`} alt={school.name} />
      <h3>{school.name}</h3>
      <p>{school.address}, {school.city}</p>
    </div>
  )
}

export default School