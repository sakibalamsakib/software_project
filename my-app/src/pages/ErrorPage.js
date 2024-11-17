import { useRouteError } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div>
        <div>
            <Navbar></Navbar>
        </div>
        
        <div className="error-page">
            
            <h2 className="error-h1">Oops!</h2>
            <p className="error-p">Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    </div>
  );
}