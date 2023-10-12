import { FunctionComponent } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

const CardLogin: FunctionComponent = () => {
  return (
    <Button className="w-40 absolute top-[21px] left-[354px] bg-black text-white border-0" variant="primary">
      Login/Sign in
    </Button>
  );
};

export default CardLogin;
