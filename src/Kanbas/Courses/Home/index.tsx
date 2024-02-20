import ModuleList from "../Modules/moduleList";
import Status from "./status";
import "bootstrap/dist/js/bootstrap.bundle";
import 'bootstrap/dist/css/bootstrap.min.css';


function Home() {
    return (
        <div className="container-fluid d-flex flex-row me-xxl-3">
            <ModuleList />
            <Status />
        </div>
    );
}

export default Home;