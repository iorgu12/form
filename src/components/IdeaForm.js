import { useForm } from "react-hook-form";

export default function IdeaForm({ onSubmit }) {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmitHandler = (data) => {
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <div>
        <label htmlFor="name">Name</label>
        <input id="name" {...register("name", { required: true })} />
        {errors.name && <p>Name is required</p>}
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          {...register("email", { required: true, pattern: /\S+@\S+\.\S+/ })}
        />
        {errors.email && errors.email.type === "required" && (
          <p>Email is required</p>
        )}
        {errors.email && errors.email.type === "pattern" && (
          <p>Invalid email address</p>
        )}
      </div>
      <div>
        <label htmlFor="funding">Funding need</label>
        <select id="funding" {...register("funding", { required: true })}>
          <option value="">Select...</option>
          <option value="notmuch">Not much</option>
          <option value="medium">Medium</option>
          <option value="alot">A lot</option>
        </select>
        {errors.funding && <p>Funding need is required</p>}
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <textarea id="description" {...register("description")} />
      </div>
      <button type="submit">Submit idea</button>
    </form>
  );
}

// Usage:
// <IdeaForm onSubmit={handleIdeaSubmit} />

// function handleIdeaSubmit(data) {
//   console.log(data);
// }
