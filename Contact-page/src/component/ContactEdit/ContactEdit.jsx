import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Container, Button, Col, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { singlecontactAsync, editcontactAsync, uploadImg } from '../../Services/Action/contactAction';

function ContactEdit() {
    const { id } = useParams(); // Retrieve the id from the URL parameters
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { contact } = useSelector(state => state.contactReducer);

    // State to manage form input values
    const [inputState, setInputState] = useState({
        id: '',
        name: '',
        phone: '',
        email: '',
        address: '',
        notes: ''
    });

    // Effect to fetch contact data when id changes (on component mount)
    useEffect(() => {
        if (id) {
            dispatch(singlecontactAsync(id)); // Fetch the contact details based on the id
        } else {
            navigate('/');
        }
    }, [dispatch, id, navigate]);

    // Effect to update inputState when contact data changes
    useEffect(() => {
        if (contact) {
            setInputState({
                id: contact.id,
                name: contact.name,
                phone: contact.phone,
                email: contact.email,
                address: contact.address,
                notes: contact.notes
            });
        }
    }, [contact]);

    // Handle form input changes
    const handleInput = (e) => {
        const { name, value } = e.target;
        setInputState({ ...inputState, [name]: value });
    };
    const handleImg = (e) => {
        const file = e.target.files[0];
     
        dispatch(uploadImg(file))
            .then(url => {
                setInputState(prevContact => ({ ...prevContact, avatar: url }));
            })
            .catch(error => {
                console.error('Error uploading image:', error);
            })
         
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(editcontactAsync(inputState)); // Dispatch edit action with updated contact data
        navigate('/'); // Navigate back to home page after editing
    };

    return (
        <Container className='m-auto'>
            <div className="row ps-5">
                <div className='d-flex justify-content-center form'>
                    <div className="col6 p-3">
                        <div className='head'>
                            <h5 className='text-white p-3'>Edit Contact</h5>
                        </div>
                        <Form onSubmit={handleSubmit} className='p-3 '>
                            <Form.Control type="text" value={inputState.id} name='id' hidden />
                            <div className="mb-3">
                                <label htmlFor="avatar" className="form-label">Avatar</label>
                                <input type="file" className="form-control" id="avatar" aria-describedby="avatarHelp" onChange={handleImg} />
                                <div id="avatarHelp" className="form-text">Upload an image for your avatar.</div>
                            </div>

                            <Form.Group as={Col} controlId="formGridName" className='d-flex p-1 fs-6'>
                                <Form.Label className='d-flex'>Name</Form.Label>
                                <Form.Control type="text" onChange={handleInput} value={inputState.name} name='name' />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridPhoneNumber" className='d-flex p-1 fs-6'>
                                <Form.Label className='d-flex'>Phone Number</Form.Label>
                                <Form.Control type="number" onChange={handleInput} value={inputState.phone} name='phone' />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridEmail" className='d-flex p-1 fs-6'>
                                <Form.Label className='d-flex'>Email</Form.Label>
                                <Form.Control type="email" onChange={handleInput} value={inputState.email} name='email' />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridAddress" className='d-flex p-1 fs-6'>
                                <Form.Label className='d-flex'>Address</Form.Label>
                                <Form.Control type="text" onChange={handleInput} value={inputState.address} name='address' />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridNotes" className='d-flex p-1 fs-6'>
                                <Form.Label className='d-flex'>Notes</Form.Label>
                                <Form.Control as="textarea" rows={3} onChange={handleInput} value={inputState.notes} name='notes' />
                            </Form.Group>
                            <Button className='btn btn-success' type="submit">SAVE</Button>
                        </Form>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default ContactEdit;
