/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { Container, Spinner } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { addcontactAsync, uploadImg } from '../../Services/Action/contactAction';

function ContactCreate() {
    const [inputState, setInputState] = useState({
        id: '',
        name: '',
        email: '',
        phone: '',
        address: '',
        notes: ''
    });

    const { isLoading } = useSelector(state => state.contactReducer);

    const [isSubmit, setIsSubmit] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setInputState({ ...inputState, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addcontactAsync(inputState));
        setIsSubmit(true);
    };
    const [uploading, setUploading] = useState(false);
    const handleImg = async (e) => {
        const file = e.target.files[0];
        setUploading(true);
        try {
            const url = await dispatch(uploadImg(file));
            setInputState   (prevContact => ({ ...prevContact, avatar: url }));
        } catch (error) {
            console.error('Error uploading image:', error);
        }
        setUploading(false);
    };
    useEffect(() => {
        if (!isLoading && isSubmit) {
            navigate('/');
        }
    }, [isLoading, isSubmit, navigate]);

    return (
        <Container className='m-auto'>
            <div className="row  ps-5">
                <div className='d-flex justify-content-center form'>
                    <div className="col6 p-3">
                        <div className=' head '>
                            <h5 className='text-white p-3'>New Contact</h5>
                        </div>
                        <Form onSubmit={handleSubmit} className='p-3 '>
                            <Form.Control type="text" value={inputState.id} name='id' hidden />
                            <div className="mb-3">
                                <label htmlFor="avatar" className="form-label">Avatar</label>
                                <input type="file" className="form-control" id="avatar" aria-describedby="avatarHelp" onChange={handleImg} />
                                <div id="avatarHelp" className="form-text">Upload an image for your avatar.</div>
                            </div>

                            <Form.Group as={Col} controlId="formGridName" className='d-flex p-1 fs-6'>
                                <Form.Label className='d-flex'>
                                    Name
                                </Form.Label>
                                <Form.Control type="text" onChange={handleInput} value={inputState.name} name='name' />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridEmail" className='d-flex p-1 fs-6'>
                                <Form.Label className='d-flex'>
                                    Email
                                </Form.Label>
                                <Form.Control type="email" onChange={handleInput} value={inputState.email} name='email' />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPhone" className='d-flex p-1 fs-6'>
                                <Form.Label className='d-flex'>
                                    Phone
                                </Form.Label>
                                <Form.Control type="number" onChange={handleInput} value={inputState.phone} name='phone' />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridAddress" className='d-flex p-1 fs-6'>
                                <Form.Label className='d-flex'>
                                    Address
                                </Form.Label>
                                <Form.Control type="text" onChange={handleInput} value={inputState.address} name='address' />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridNotes" className='d-flex p-1 fs-6'>
                                <Form.Label className='d-flex'>
                                    Notes
                                </Form.Label>
                                <Form.Control as="textarea" onChange={handleInput} value={inputState.notes} name='notes' />
                            </Form.Group>

                            <Button variant="success" type='submit' disabled={isLoading}>
                                {
                                    isLoading ? (
                                        <>
                                            <Spinner
                                                as="span"
                                                animation="grow"
                                                size="sm"
                                                role="status"
                                                aria-hidden="true"
                                            /> loading...
                                        </> 
                                    ) : "SAVE"
                                }
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default ContactCreate;
