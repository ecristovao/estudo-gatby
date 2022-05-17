import React from "react" 
//import { Link } from 'gatsby';
import Layout from "../components/layout";

const AboutPage = () => {
  return (
    <Layout pageTitle="Pagina Sobre">
      <p>Oi sou um conteudo da pagina De Sobre</p>
    </Layout>
  )
}
export default AboutPage;

/*
class App extends Component{

	constructor(props){
		super(props);
		this.state = {
			nome: "Elton",
			contador: 0
		};

		this.aumentar = this.aumentar.bind(this);
		this.diminuir = this.diminuir.bind(this);
	}

	aumentar(){
		let state = this.state;

		state.contador += 1;
		state.nome = "Vitor";
		this.setState(state)
	}
	diminuir(){
		let state = this.state;

		if(state.contador === 0){
			alert("chegou a zero");
			return;
		}
		state.contador -= 1;
		this.setState(state)
	}

	render(){
		return(
			<div>
				<h1>Contador. Nome = {this.state.nome}</h1>
				<h2>
					<button className=" bg-blue-600 colo-which text-cyan-50 w-10/12 h-1/9 block m-auto border-red-500" onClick={this.diminuir}>-</button>
						<span className=" block text-center m-4">{this.state.contador}</span>
					<button className=" bg-green-600 text-black w-10/12 h-1/5 block m-auto" onClick={this.aumentar}>+</button>
				</h2>
				<Link className="font-sans text-black underline ml-7 mt-5 block" to="/">Home</Link>
			</div>
		);
	}
}

export default App;
*/