import React from 'react';
import PropTypes from 'prop-types';
import Github from './github';
import Linkedin from './linkedin';
import Twitter from './twitter';
import Dribbble from './dribbble';
import Arrow from './arrow';
import External from './external';

const Icons = ({ name, fill, side, addCSS }) => {
	const props = { fill, side, addCSS };

	switch (name) {
		case 'github':
			return <Github { ...props } />;
		case 'linkedin':
			return <Linkedin { ...props } />;
		case 'twitter':
			return <Twitter { ...props } />;
		case 'dribbble':
			return <Dribbble { ...props } />;
		case 'down-arrow':
			return <Arrow.down { ...props } />;
		case 'external':
			return <External { ...props } />;
		default:
			return null;
	}
}

Icons.propTypes = {
	name: PropTypes.string.isRequired,
}

export default Icons;