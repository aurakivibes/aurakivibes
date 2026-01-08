export default function FreeReadingForm({ onClose }) {
  return (
    <div className="form-overlay">
      <div className="form-box">
        <h2>Your First 111 Reading</h2>
        <p className="form-subtext">
          Fill your details carefully. Your reading will be prepared personally.
        </p>

        <form>
          {/* REQUIRED */}
          <input type="text" placeholder="Full Name *" required />
          <input type="date" placeholder="Date of Birth *" required />
          <input type="tel" placeholder="Mobile Number *" required />

          {/* OPTIONAL */}
          <input type="text" placeholder="Nick Name (optional)" />
          <input type="email" placeholder="Email (optional)" />

          <button type="submit">Submit for 111 Reading</button>
        </form>

        <button className="close-btn" onClick={onClose}>
          ✕
        </button>
      </div>
    </div>
  );
}
