import { Container } from "@chakra-ui/react";

const Layout: React.FC = ({ children }) => (
	<main>
		<Container size="xl">
			{children}
		</Container>
		<style jsx>{`
			main {
				background-color: #EDF2F7;
				min-height: 100vh;
			}
		`}</style>
	</main>
)

export default Layout;