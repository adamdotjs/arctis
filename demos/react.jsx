import { styled } from 'styled-components';

const Wrapper = styled.div`
	background: blue;
	padding: 4px;
`;

const PageHeader = () => {
	return (
		<Wrapper>
			<h1>Let's get this MONEY</h1>
			<p>I honestly can't believe I've never heard this before. Holy shit, it's fucking amazing.</p>
		</Wrapper>
	);
};

export default PageHeader;
