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
          {...register("name", { required: "School name is required" })}
          placeholder="School Name"
        />
        {errors.name && <span>{errors.name.message}</span>}

        <input
          {...register("address", { required: "Address is required" })}
          placeholder="Address"
        />
        {errors.address && <span>{errors.address.message}</span>}

        <input
          {...register("city", { required: "City is required" })}
          placeholder="City"
        />
        {errors.city && <span>{errors.city.message}</span>}

        <input
          {...register("state", { required: "State is required" })}
          placeholder="State"
        />
        {errors.state && <span>{errors.state.message}</span>}

        <input
          type="number"
          {...register("contact", {
            required: "Contact number is required",
            minLength: { value: 10, message: "Must be at least 10 digits" },
            maxLength: { value: 15, message: "Must be at most 15 digits" },
          })}
          placeholder="Contact"
        />
        {errors.contact && <span>{errors.contact.message}</span>}

        <input
          type="email"
          {...register("email_id", {
            required: "Email is required",
            pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" },
          })}
          placeholder="Email"
        />
        {errors.email_id && <span>{errors.email_id.message}</span>}

        <input
          type="file"
          {...register("image", { required: "Image is required" })}
        />
        {errors.image && <span>{errors.image.message}</span>}

        <button type="submit">Add School</button>
      </form>
    </div>
  );
}

export default AddSchools;
