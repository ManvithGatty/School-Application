import { useState, useEffect } from "react";
import axios from "axios";
import School from "../components/School.jsx";

function ShowSchools() {
  const [schools, setSchools] = useState([]);

  useEffect(() => {
    axios
      .get("https://school-application-wd3o.onrender.com/api/schools")
      .then((res) => setSchools(res.data));
  }, []);

  return(
    <div>
      <h2>Schools</h2>
      <div className="flex">
        {schools.map(school => (
          <School key={school.id} school={school} />
        ))}
      </div>
    </div>
  );
}

export default ShowSchools;
