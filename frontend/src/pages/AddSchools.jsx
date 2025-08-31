import { useForm } from "react-hook-form";
import axios from "axios";

function AddSchools() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  async function onSubmit(data) {
    const formData = new FormData();
    Object.keys(data).forEach((key) => formData.append(key, data[key]));
    formData.append("image", data.image[0]);

    await axios.post("http://localhost:5000/api/schools", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    alert("School Added!");
    reset();
  }
  return (
    <div className="school-form">
      <h2>Add School</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("name", { required: true })}
          placeholder="School Name"
        />
        {errors.name && <span>Required</span>}

        <input
          {...register("address", { required: true })}
          placeholder="Address"
        />
        <input {...register("city", { required: true })} placeholder="City" />
        <input {...register("state", { required: true })} placeholder="State" />
        <input
          type="number"
          {...register("contact", { required: true })}
          placeholder="Contact"
        />
        <input
          type="email"
          {...register("email_id", { required: true, pattern: /^\S+@\S+$/i })}
          placeholder="Email"
        />
        <input type="file" {...register("image", { required: true })} />

        <button type="submit">Add School</button>
      </form>
    </div>
  );
}

export default AddSchools;
