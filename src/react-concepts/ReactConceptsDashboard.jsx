import { useState } from "react";
import "./ConceptsDashboard.scss";
import { useNavigate } from "react-router-dom"

const ReactConceptsDashboard = () => {
    const navigate = useNavigate();
    const [concepts, setConcepts] = useState([
        { conceptName: "Context", route: "/react-context" },
        { conceptName: "Reducer", route: "/react-useReducer" },
        { conceptName: "Ref", route: "/react-useRef" },
        { conceptName: "Callback", route: "/react-usecallback" },
        { conceptName: "Memo", route: "/react-usememo" },
        { conceptName: "Higher Order Components", route: "/react-hoc" },
        { conceptName: "Redux toolkit", route: "/react-redux-toolkit" },
        { conceptName: "React Pure Components Class", route: "/react-purecomponents/class" },
        { conceptName: "React Pure Components Memo", route: "/react-purecomponents/memo" },
        { conceptName: "React Custom Hooks", route: "/react-customHooks" },
    ])
    return (
        <div className="container">
            {concepts.map((ele) => (
                <div key={ele.conceptName} className="card" onClick={() => navigate(ele.route)}>
                    <span className="concept-name">{ele.conceptName}</span>
                    <button className="lets-practice-btn">Lets practice <span className="material-symbols-outlined">arrow_forward</span></button>
                </div>
            ))}
        </div>
    )
}
export default ReactConceptsDashboard;