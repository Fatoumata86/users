import './App.css';
import React from 'react';
import "./users.json";

class App extends React.Component {
	constructor(props) {
		super(props);
		const users =[];
		for (let i = 0; i > users.length; i++) {
			users.push({
				
			})
			console.log(users)
		}
		this.state = {users};
	}
  render() {
  return (
    <>
    {this.state.users.map((users) => 
		<div>
		 <p>Nom : {users.name}</p>
		 <p>Email : {users.email}</p>
		 <p>Website : {users.website}</p>
		 </div>
	)}
    </>
  )
}
}

export default App;
