import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { getTrail, deleteTrail } from "../../services/trails";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./TrailDetail.css";

const TrailDetail = (props) => {
  const [trail, setTrail] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchTrail = async () => {
      const trail = await getTrail(id);
      setTrail(trail);
    };
    fetchTrail();
  }, [id]);

  const [isDeleted, setDeleted] = useState(false);

  const handleDeletion = async (event) => {
    event.preventDefault();
    const isDeleted = await deleteTrail(trail._id);
    setDeleted({ isDeleted });
  };

  if (isDeleted) {
    return <Redirect to={`/trails`} />;
  }

  return (
    <>
      <div className="trail-detail-page">
        <div className="trail-detail-container">
          {trail !== null && (
            <>
              <div className="trail-detail-image-container">
                <img
                  className="trail-detail-image"
                  src={trail.trailUrl}
                  alt={trail.name}
                ></img>
              </div>
              <div className="trail-detail-description">
                <p className="description-text">
                  <b>Name:</b> {trail.name}
                </p>
                <p className="description-text">
                  <b>Difficulty:</b> {trail.difficulty}
                </p>
                <p className="description-text">
                  <b>Distance From NYC:</b> {trail.distanceFromNyc} miles
                </p>
                <p className="description-text">
                  <b>Time To Climb:</b> {trail.climbingTime} hours
                </p>
                <p className="description-text">
                  <b>Rating:</b> {trail.rating}
                </p>

                <div className="button-container">
                  <Link className="edit-link" to={`/trails/${trail._id}/edit`}>
                    <button className="edit-delete-button">Edit Trail</button>
                  </Link>
                  <Link className="delete-link" to={`/trails`}>
                    <button
                      className="edit-delete-button"
                      onClick={handleDeletion}
                    >
                      Delete Trail
                    </button>
                  </Link>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default TrailDetail;
