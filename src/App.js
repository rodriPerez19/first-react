import React,{Fragment} from "react";
import { UserAll } from "./components/users/users";
import Foo from "./components/foo/foo"
import users from "./components/users/mocks/user_mock";
import Origin from "./components/origin/origin"
import Boot from "./components/boot/boot";

const user={
  email:"foo@foo.foo",
  name:"foo",
  pass:"foo123",
  role:"fullstack"
}

function App() {
  return (
      <Fragment>
        <Boot/>
        {/* <Foo
        // email={user.email}
        // name={user.name}
        // pass={user.pass}
        {...user}
        
        /> */}
        {/* <Origin/> */}
        {/* <UserAll/> */}
      </Fragment>
  );
}

export default App;
