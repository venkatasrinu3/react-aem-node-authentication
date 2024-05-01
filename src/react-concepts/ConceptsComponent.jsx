import React from 'react'
import { useParams } from "react-router-dom";
import { conceptsList } from './ReactConceptsDashboard';

function ConceptsComponent() {
    
    const {conceptName} = useParams();
    const conceptsObject = conceptsList.find(ele=>ele.route === `/${conceptName}`)
    console.log("This is the cOncepts Object",conceptsObject,conceptName);
    const {componentName} = conceptsObject

    return (
        <>
            {componentName}
        </>
    )
}

export default ConceptsComponent