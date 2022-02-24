import React from 'react';

function Cards(props) {
	return (
		<div className="card">
			<img src={props.imageUrl} alt="" />
			<div className="card--info">
				<div className="card--location">
					{props.location} <a href={props.googleMapsUrl}>View on Google Maps</a>
				</div>
				<div className="card--name">{props.title}</div>
				<div className="card--date">{props.startDate}</div>
				<div className="card--date">{props.endDate}</div>
				<div className="card--description">{props.description}</div>
			</div>
		</div>
	);
}

export default Cards;
