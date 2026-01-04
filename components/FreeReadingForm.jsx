import { useState } from "react";

export default function FreeReadingForm({ onClose }) {
  const [form, setForm] = useState({
    fullName: "",
    dob: "",
    mobile: "",
    nickName: "",
    email: ""
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function submitForm(e) {
    e.preventDefault();
    setLoading(true);

    await fetch("/api/submit-reading", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });

    setLoading(false);
    setSuccess(true);
  }

  if (success) {
    return (
      <div style={overlay}>
        <div style={box}>
          <h2>✨ Submitted Successfully</h2>
          <p>We will contact you soon.</p>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    );
  }

  return (
    <div style={overlay}>
      <div style={box}>
        <h2>Your First 111 Reading ✨</h2>

        <form onSubmit={submitForm}>
          <input required placeholder="Full Name *"
            onChange={e => setForm({ ...form, fullName: e.target.value })} />

          <input required type="date"
            onChange={e => setForm({ ...form, dob: e.target.value })} />

          <input required placeholder="Mobile Number *"
            onChange={e => setForm({ ...form, mobile: e.target.value })} />

          <input placeholder="Nick Name (optional)"
            onChange={e => setForm({ ...form, nickName: e.target.value })} />

          <input type="email" placeholder="Email (optional)"
            onChange={e => setForm({ ...form, email: e.target.value })} />

          <button type="submit" disabled={loading}>
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>

        <button onClick={onClose} style={{ marginTop: 10 }}>
          Cancel
        </button>
      </div>
    </div>
  );
}

const overlay = {
  position: "fixed",
  inset: 0,
  background: "rgba(0,0,0,0.6)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 9999
};

const box = {
  background: "#fff",
  padding: "28px",
  borderRadius: "14px",
  width: "100%",
  maxWidth: "420px"
};
