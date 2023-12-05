import ToastComponent from "../../Components/Toast/ToastComponent";
import useLogin from "./useLogin";
import { Form, Card } from "react-bootstrap";

const Login = () => {
  const {
    showToast,
    setShowToast,
    validated,
    handleLogin,
    handleInputChange,
    addedItem,
  } = useLogin();

  return (
    <>
      <div className="container-fluid py-3 px-3 login-wrapper">
        <div className="row">
          <div className="col-sm-6 m-auto">
            <Card bg="info" text="dark" className="mb-2 ">
              <Card.Header>Login</Card.Header>
              <Card.Body>
                <Card.Text>
                  <Form
                    autoComplete="off"
                    noValidate
                    validated={validated}
                    onSubmit={handleLogin}
                  >
                    <Form.Group className="mb-3" controlId="user.ControlInput1">
                      <Form.Label>User Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter your User Name"
                        required
                        onChange={(e: any) =>
                          handleInputChange("userName", e?.target.value)
                        }
                        value={addedItem.userName}
                      />
                      <Form.Control.Feedback type="invalid">
                        Please Enter User Name.
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="user.ControlInput2">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter your Password"
                        onChange={(e: any) =>
                          handleInputChange("password", e?.target.value)
                        }
                        value={addedItem.password}
                      />
                    </Form.Group>
                    <button
                      className="btn btn-danger"
                      type="button"
                      onClick={handleLogin}
                    >
                      Login
                    </button>
                  </Form>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
        <ToastComponent
          showToast={showToast}
          onCloseHandler={() => setShowToast(false)}
          responseMessage="your request done successfully"
        />
      </div>
    </>
  );
};

export default Login;
