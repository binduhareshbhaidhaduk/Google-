import { useEffect } from 'react';
import { Container, Button, Table, Row, } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { DeletecontactAsync, getcontactAsync, singlecontactAsync } from '../../Services/Action/contactAction';


function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const { contacts } = useSelector(state => state.contactReducer);

  useEffect(() => {
    dispatch(getcontactAsync());
  }, [dispatch]);

  const handleEdit = (id) => {
    dispatch(singlecontactAsync(id));
    navigate(`/edit/${id}`);
  };

  const handleDelete = (id) => {

    dispatch(DeletecontactAsync(id));

  };



  return (
    <>
      <Container className="py-4">
        <Row>


          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Profile</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Address</th>
                <th>Notes</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>

              {contacts.map(contact => (
                <tr key={contact.id}>
                  <td><img src={contact.avatar} alt={contact.name} id='profile' /></td>
                  <td>{contact.name}</td>
                  <td>{contact.email}</td>
                  <td>{contact.phone}</td>
                  <td>{contact.address}</td>
                  <td>{contact.notes}</td>
                  <td>
                    <Button variant="light" size="sm" className="me-2" onClick={() => handleEdit(contact.id)}>

                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                        <path d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
                      </svg>
                    </Button>
                    <Button variant="dark" size="sm" onClick={() => handleDelete(contact.id)}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-person-x" viewBox="0 0 16 16">
                        <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m.256 7a4.5 4.5 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10q.39 0 .74.025c.226-.341.496-.65.804-.918Q8.844 9.002 8 9c-5 0-6 3-6 4s1 1 1 1z" />
                        <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m-.646-4.854.646.647.646-.647a.5.5 0 0 1 .708.708l-.647.646.647.646a.5.5 0 0 1-.708.708l-.646-.647-.646.647a.5.5 0 0 1-.708-.708l.647-.646-.647-.646a.5.5 0 0 1 .708-.708" />
                      </svg>
                    </Button>
                  </td>
                </tr>
              ))}
              {contacts.length === 0 && (
                <tr>
                  <td colSpan="6" className="text-center">No contacts found. Add some contacts to see them here.</td>
                </tr>
              )}
            </tbody>
          </Table>
        </Row>
      </Container>
    </>
  );
}

export default Home;
