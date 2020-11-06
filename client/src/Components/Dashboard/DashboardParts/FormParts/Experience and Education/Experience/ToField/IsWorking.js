import React from 'react';
// %Styling
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const IsWorking = ({
	current,
	toDateDisabled,
	toggleDisabled,
	formData,
	setFormData,
}) => {

	return (
		<FormControlLabel
			style={{ width: '19%', margin: 0 }}
			value="top"
			control={
				<Checkbox
					name="current"
					value={current}
					checked={current}
					onChange={(e) => {
						setFormData({ ...formData, current: !current });
						toggleDisabled(!toDateDisabled);
					}}
				/>
			}
			label="Current Job?"
			labelPlacement="bottom"
		/>
	);
};

export default IsWorking;
