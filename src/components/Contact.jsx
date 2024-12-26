import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Contact() {
    return (
        <>
            <div className="contactcontents py-5 container">
                <h2 className="text-center text-white mb-4">Contacts</h2>

                <form action="">
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <Form.Control type="email" placeholder="Your Name" />

                        </div>
                        <div className="col-md-6">
                            <Form.Control type="email" placeholder="Your Email" />

                        </div>
                    </div>
                    <div className="label my-3">
                    <Form.Control
                        as="textarea"
                        placeholder="Your Message"
                        style={{ height: '120px' }}
                    />
                    </div>
                    <div className="formbtn">
                    <Button variant="primary">Send Message</Button>

                    </div>

                </form>

            </div>

        </>
    )
}

export default Contact