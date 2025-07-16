import React from 'react';

export default function Contact() {
  return (
    <div className="contact-form">
      <h2>Contact Us</h2>
      <form>
        <label>Name:</label>
        <input type="text" placeholder="Your Name" />
        <label>Email:</label>
        <input type="email" placeholder="you@example.com" />
        <label>Message:</label>
        <textarea placeholder="Write your message here..." />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}
