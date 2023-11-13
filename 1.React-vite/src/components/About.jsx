import Button from "./Button.jsx";
import { students } from '../students.js'

function About() {
    return (
        <>
        <h1>This is About Section <Button/></h1>
        <ul>
            {students
                .sort((a, b) => a.name.localeCompare(b.name))
                .map((student) => (
                <li key={student.id}> {student.name} {student.surname}</li>
            ))}
        </ul>
        </>
    )
}

export default About