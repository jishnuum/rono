import Card from 'react-bootstrap/Card';
import { FaTrophy } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaCrown } from "react-icons/fa6";

function Career() {
    return (
        <>
            <div className="careercontents text-center py-4">
                <h2 className="mb-4">Achievements</h2>

                <div className="row">
                <div className="col-md-4 ">
                    <div className=' cardcontents'>
                        <Card.Body>
                        <Card.Title className='text-warning'><FaTrophy className='achieve'/></Card.Title>
                        <Card.Title>5 Ballon d'Or</Card.Title>
                            <Card.Text>
                            Awarded for his outstanding football career.
                            </Card.Text>
                        </Card.Body>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className=' cardcontents'>
                        <Card.Body>
                        <Card.Title className='text-primary'><FaStar className='achieve'/></Card.Title>
                        <Card.Title>UEFA Champions League</Card.Title>
                            <Card.Text>
                            Won 5 UEFA Champions League titles.
                            </Card.Text>
                        </Card.Body>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className=' cardcontents'>
                        <Card.Body>
                        <Card.Title className='text-success'><FaCrown className='achieve'/></Card.Title>
                        <Card.Title>European Champion</Card.Title>
                            <Card.Text>
                            Led Portugal to victory in Euro 2016.
                            </Card.Text>
                        </Card.Body>
                    </div>
                </div>
                </div>
            </div>

        </>
    )
}

export default Career