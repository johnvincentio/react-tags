
import React, { useRef } from 'react';
import PropTypes from 'prop-types';

import { createDndContext, DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import ReactTags from '../tags/ReactTags';

const TaskTag = props => {

	const renderTag = () => 
		 (
			<ReactTags
				id={props.id}
				inputFieldPosition={props.inputFieldPosition}
				tags={props.tags}
				suggestions={props.suggestions}
				minQueryLength={props.minQueryLength}
				autocomplete={props.autocomplete}
				handleDelete={props.handleDelete}
				handleAddition={props.handleAddition}
				handleDrag={props.handleDrag}
			/>
		)

	const DndContext = createDndContext(HTML5Backend);
	const managerRef = useRef(DndContext);

	return (
		<DndProvider backend={HTML5Backend} manager={managerRef.current.dragDropManager}>
			{renderTag()}
		</DndProvider>
	);
}

TaskTag.propTypes = {
	id: PropTypes.string.isRequired,
	inputFieldPosition: PropTypes.string.isRequired,
	tags: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			className: PropTypes.string,
		})
	),
	suggestions: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
		})
	),
	minQueryLength: PropTypes.number.isRequired,
	autocomplete: PropTypes.bool.isRequired,

	handleDelete: PropTypes.func.isRequired,
	handleAddition: PropTypes.func.isRequired,
	handleDrag: PropTypes.func.isRequired,
};

TaskTag.defaultProps = {
	suggestions: [],
	tags: [],
};

export default TaskTag;
