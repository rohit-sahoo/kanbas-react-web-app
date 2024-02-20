import ModuleList from "./moduleList";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

function Modules() {
    return (
        <div className="container-fluid d-flex flex-row me-xxl-3">
            <ModuleList />
        </div>
    );
}

export default Modules;