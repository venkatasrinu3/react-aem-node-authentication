import { useInput } from "./useInput"
import "./userForm.scss";

const UserForm = () => {
    const [fNameProps, resetFName] = useInput("");
    const [lNameProps, resetLName] = useInput("");
    const [ageProps, resetAge] = useInput(10);
    const [genderProps, resetGender] = useInput("M");
    const handleSubmit = (e) => {
        e.preventDefault();
        const { value: fName } = fNameProps;
        const { value: lName } = lNameProps;
        const { value: age } = ageProps;
        const { value: gender } = genderProps;
        console.log(fName, lName, age, gender);
        resetFName("");
        resetLName("");
        resetAge(10);
        resetGender("M")
    }
    return (
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column" }}>
            <div className="input-wrapper">
                <label htmlFor="firstName">First Name</label>
                <input type="text" {...fNameProps} />
            </div>
            <div className="input-wrapper">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" {...lNameProps} />
            </div>
            <div className="input-wrapper">
                <label htmlFor="lastName">Age</label>
                <input type="number" {...ageProps} />
            </div>
            <div className="input-wrapper">
                <label htmlFor="lastName">Gender</label>
                <input type="text" {...genderProps} />
            </div>
            <button type="submit" style={{ width: "100px" }}>
                Submit
            </button>
        </form>
    )
}
export default UserForm;