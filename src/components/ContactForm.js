import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './ContactForm.css';

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xpwzznbr");
  if (state.succeeded) {
      return <p className="thanks-message">Thanks!</p>;
  }
  return (
    <section className="container contact-section">
      <h2 className="contact-heading">Contact</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" name="name" />
        <ValidationError prefix="Name" field="name" />

        <label htmlFor="email">Email</label>
        <input id="email" type="email" name="email" />
        <ValidationError prefix="Email" field="email" />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" />
        <ValidationError prefix="Message" field="message" />

        <button type="submit" disabled={state.submitting}>Submit</button>
      </form>
    </section>
  );
}
