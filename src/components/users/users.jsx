//mocks
import users from "./mocks/user_mock"
//calbacks
import maped from "./callbacks/map_callback"

import "./css/style.css"

export function UserAll(){

    return(
        <div>
            {users.map(maped)}
        </div>
    );

}


