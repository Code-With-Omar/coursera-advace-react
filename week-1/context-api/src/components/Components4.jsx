import { useContext } from "react"
import { UserContext } from "./UserContext"

export const Components4 = () => {
    const { user, userData } = useContext(UserContext)
    return (
        <div>

            <h2> this is coming from component 4</h2>
            <p>{user.name}</p>
            <p>{user.id}</p>
            <p>{userData.text}</p>
        </div>
    )
}
