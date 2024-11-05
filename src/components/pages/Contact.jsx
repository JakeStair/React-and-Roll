export default function Contact() {
    return (
        <div className="container py-5">
            <h1 className="text-center mb-4">Contact Me</h1>
            <p className="lead">I’d love to hear from you! Whether you have questions about my work or want to discuss a potential project, feel free to reach out through the form below.</p>
            
            {/* Contact Form */}
            <form className="mt-4">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" id="email" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea className="form-control" id="message" rows="4" placeholder="Your Message" required></textarea>
                </div>
                <button type="submit" className="btn btn-secondary">Send Message</button>
            </form>
        </div>
    );
}
