import React from "react"
//import { Link } from 'gatsby'
import Layout from "../components/layout"
import { StaticImage } from 'gatsby-plugin-image'
/*
export default function Home() {
  return <div className="text-3xl font-bold  text-sky-500">Hello world!</div>
}
*/

const IndexPage = ()=>{
	return(
		<Layout pageTitle="Home Page">
			<p>Home page</p>
			 <StaticImage
				alt="Imagem Spawn"
				src="../images/spawn-filmenovo.jpg"
			/>
		</Layout>
	);
}

export default IndexPage
