import '../../assets/style/portfolio.css';

export default function Portfolio() {
    return (
        <div className="container py-5">
            <h1 className="text-center mb-4">My Portfolio</h1>
            <p className="lead">
                Welcome to my portfolio, a showcase of my journey as a creative professional over the past decade. <br /><br />
                Here, you'll find a curated collection of my work in videography, photography, graphic design, and filmmaking, each project reflecting my passion for storytelling and visual artistry. <br /><br />
                My aim is to inspire and connect through engaging visuals that capture the essence of every project. Explore my creations, and witness how I bring ideas to life through a blend of creativity and technical skill.
            </p>

            {/* Portfolio Items Section */}
            <div className="row mt-5">
                <div className="col-md-4">
                    <div className="card mb-4">
                        <img src="path/to/image1.jpg" className="card-img-top" alt="Portfolio Item 1" />
                        <div className="card-body">
                            <h5 className="card-title">Fire & White Podcast</h5>
                            <p className="card-text">Igniting stories about legends of women's basketball.</p>
                            <a href="link-to-project1" className="btn btn-primary">View Project</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card mb-4">
                        <img src="path/to/image2.jpg" className="card-img-top" alt="Portfolio Item 2" />
                        <div className="card-body">
                            <h5 className="card-title">Project Title 2</h5>
                            <p className="card-text">Brief description of project 2 showcasing your skills and the essence of the project.</p>
                            <a href="link-to-project2" className="btn btn-primary">View Project</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card mb-4">
                        <img src="path/to/image3.jpg" className="card-img-top" alt="Portfolio Item 3" />
                        <div className="card-body">
                            <h5 className="card-title">AO Scan Mini-Doc</h5>
                            <p className="card-text">Brief description of project 3 showcasing your skills and the essence of the project.</p>
                            <a href="link-to-project3" className="btn btn-primary">View Project</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
