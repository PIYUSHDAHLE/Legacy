import React from "react";
import "../Contact/Contact.css";
const Contact = () => {
  const [result, setResult] = React.useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "47a9d39c-59e3-428b-8fd5-d78d1aacb54c");
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div>
      <div className="contact">
        <h2>Contact Us</h2>
        <h1>Get in Touch</h1>
      </div>
      <form onSubmit={onSubmit}>
        <div>
          <label for="fname">First Name :</label>
          <input type="text" id="fname" name="fname" required />
        </div>
        <div>
          <label for="lname">Last Name :</label>
          <input type="text" id="lname" name="lname" required />
        </div>
        <div>
          <label for="email">Email :</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label for="tel">Mobile Number :</label>
          <input type="tel" id="tel" name="tel" required />
        </div>
        <div>
          <label for="subject">Subject :</label>
          <textarea id="subject" name="subject" required></textarea>
        </div>
        <div>
          <input type="submit" value="Submit" />
        </div>
        <span>{result}</span>
      </form>
    </div>
  );
};

export default Contact;
