import Button from 'react-bootstrap/Button';


function About(){
    return(
        <>
        <div className="aboutcontents container">
            <h2 className="text-center py-4">About Cristiano Ronaldo</h2>
            <div className="row">
            <div className="aboutimg col-md-6 d-flex justify-content-center">
                <img src="https://i.pinimg.com/736x/97/8d/fe/978dfe2eed24660a344f07c8784065c8.jpg" alt="" />
            </div>
            <div className="abouttext col-md-6 ">
                <p className='fw-light text-center'>Cristiano Ronaldo is one of the greatest football players of all time. Known for his unmatched dedication, skill, and athleticism, he has won multiple Ballon d'Or awards and led his teams to numerous championships. Off the field, Ronaldo is a philanthropist and a global inspiration.</p>
                <a href="#careerSection"><Button variant="dark">Explore Achievments</Button>
                </a>
            </div>
            </div>
        </div>
        
        </>
    )
}

export default About