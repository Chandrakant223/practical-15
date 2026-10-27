import react,{usestate} from 'react';

function App() {
  const usernameRef = useRef();
  const passwordref = useRef();
  const [user,setuser]=useState(null);

  function handlesubmit(e){
    e.preventDefault();
    return({
      username:usernameRef.current.value,
      password:passwordref.current.value,
    });
  }
  return(
    <div style={{padding:'20px',fontFamily:'Arial'}}>
      <h2>Login</h2>

      <form onSubmit={handlesubmit}>
        <input ref={usernameRef} placeholder="Username" required/>
<br></br>
<input ref={passwordref} placeholder="Password" type="password" required/>
<br></br>

<button type="submit">Login</button>
      </form>
    
    {user && (
      <div>
        <h3>submit info</h3>
        <p>Username: {user.username}</p>
        <p>Password: {user.password}</p>
      </div>
    )}
    </div>
    );
  }
  export default App; 