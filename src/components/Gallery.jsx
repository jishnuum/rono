import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Gallery() {
    return (
        <>
            <div className="gallerycontents py-5 container">
                <h2 className="text-center mb-4">Gallery</h2>

                <div className="row ">
                    <div className="col-md-4 ronopics mb-3">
                        <Card >
                            <Card.Img variant="top" src="https://i.pinimg.com/474x/f2/53/43/f253438604294c88db8c6a54626cd98f.jpg" />
                            
                        </Card>
                    </div>
                    <div className="col-md-4 ronopics mb-3">
                        <Card >
                            <Card.Img variant="top" src="https://i.pinimg.com/474x/8d/17/5d/8d175dd9f2c6fd7acd2f630ee5c36a9d.jpg" />
                            
                        </Card>
                    </div>
                    <div className="col-md-4 ronopics mb-3">
                        <Card >
                            <Card.Img variant="top" src="https://i.pinimg.com/736x/f8/32/cb/f832cbbe1a009e0c11b9442b183d386a.jpg" />
                            
                        </Card>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Gallery