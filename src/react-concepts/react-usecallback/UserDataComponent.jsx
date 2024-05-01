import { useState, useEffect, useCallback, Fragment } from "react";
const UserDataComponent = () => {
    const [userData, setUserData] = useState([]);
    const fetchData = useCallback((type) => {
        fetch("./data.json")
            .then(res => res.json())
            .then(res => setUserData(res))

    }, [])
    useEffect(() => {
        fetchData()
    }, [fetchData])
    return (
        <>
            {userData.map((ele) => (
                <Fragment key={ele.id}>
                    <div className="wrapper">
                        <h3>Title: <span style={{fontWeight:100}}>{ele.title}</span></h3>
                        <h5>Content: <span style={{fontWeight:100}}>{ele.body}</span></h5>
                    </div> <br />
                </Fragment>
            ))}
        </>
    )
}
export default UserDataComponent;