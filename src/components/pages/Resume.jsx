export default function Resume() {
    return (
        <div className="container py-5">
            <h1 className="text-center mb-4">Download</h1>
            <p className="lead">
                Explore my resume to gain insight into my professional journey as a videographer and designer. <br />
                <br />
                With over 10 years of experience in creative fields, I have honed my skills in photography, graphic design, and filmmaking, making me well-equipped to bring projects from concept to completion.
            </p>
            <div className="text-center">
                <a 
                    href="/assets/documents/resume.pdf" // Update here
                    download 
                    className="btn btn-primary"
                >
                    Download My Resume
                </a>
            </div>
        </div>
    );
}
