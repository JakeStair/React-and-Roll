import '../../assets/style/portfolio.css';
import image2 from '../../assets/images/2b.jpg';
import image3 from '../../assets/images/3.jpg';
import chansey from '../../assets/images/chansey.jpg';

export default function Portfolio() {
    return (
        <div className="container py-5">
            <h1 className="text-center mb-4">My Portfolio</h1>
            <p className="lead">
                Welcome to my portfolio, a showcase of my journey as a creative professional over the past decade. <br /><br />
                Here, you'll find a curated collection of my work in videography, photography, graphic design, and filmmaking, each project reflecting my passion for storytelling and visual artistry. <br /><br />
                My aim is to inspire and connect through engaging visuals that capture the essence of every project. Explore my creations, and witness how I bring ideas to life through a blend of creativity and technical skill.
            </p>

            <div className="row mt-5">
                <div className="col-md-4">
                    <div className="card mb-4">
                        <img src={image2} className="card-img-top" alt="Portfolio Item 1" />
                        <div className="card-body">
                            <h5 className="card-title">Fire & White Podcast</h5>
                            <p className="card-text">Igniting stories about legends of women's basketball.</p>
                            <a href="https://github.com/JakeStair/fire-white-podcast" className="btn btn-secondary">View Project</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card mb-4">
                        <img src={chansey} className="card-img-top" alt="Portfolio Item 2" />
                        <div className="card-body">
                            <h5 className="card-title">Cartoon Hero</h5>
                            <p className="card-text">Web application displaying Chansey, the most popular Pokemon.</p>
                            <a href="https://github.com/JakeStair/cartoon-hero" className="btn btn-secondary">View Project</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card mb-4">
                        <img src={image3} className="card-img-top" alt="Portfolio Item 3" />
                        <div className="card-body">
                            <h5 className="card-title">Holiday Countdown</h5>
                            <p className="card-text">Single page web application that displays a countdown to your chosen holiday.</p>
                            <a href="https://github.com/JakeStair/HolidayCountdown" className="btn btn-secondary">View Project</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
