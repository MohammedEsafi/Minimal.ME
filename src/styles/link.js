import styled from 'styled-components';
import { Link as GatsbyLink } from 'gatsby';

const Link = styled(GatsbyLink)`
	padding-block: ${props => props.paddingBlock};
	padding-inline: ${props => props.paddingInline};
	${props => props?.addCSS};
`

Link.defaultProps = {
	paddingBlock: '10px',
	paddingInline: '10px',
}

export default Link;