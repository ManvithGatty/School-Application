import { useState, useEffect } from "react";
import axios from "axios";
import School from "../components/School.jsx";

function ShowSchools() {
  const [schools, setSchools] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/schools")
      .then((res) => setSchools(res.data));
  }, []);

  return(
    <div>
      <h2>Schools</h2>
      <div className="grid">
        {schools.map(school => (
          <School key={school.id} school={school} />
        ))}
      </div>
    </div>
  );
}

export default ShowSchools;
