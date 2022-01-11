import { useState } from "react";
import AboutPage from "./AboutPage";

const HomePage = () => {
  const [user, setUser] = useState({
    name: "",
    age: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setError("");
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!user.name && !user.age) {
      setError("Please enter name/age");
      return;
    }
    console.log(user);
  };

  return (
    <>
      <div className="w-25 m-5">
        {/* {
          error && <span className="text-danger">{error}</span>
        } */}

        {error ? <span className="text-danger">{error}</span> : ""}
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={(e) => handleChange(e)}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Age
          </label>
          <input
            type="text"
            name="age"
            value={user.age}
            onChange={(e) => handleChange(e)}
            className="form-control"
          />
        </div>

        <button
          type="submit"
          onClick={handleSubmit}
          className="btn btn-primary"
        >
          Submit
        </button>
      </div>

      <div>Name: {user.name}</div>
      <div>Age: {user.age}</div>
      <AboutPage>hello</AboutPage>
    </>
  );
};

export default HomePage;
