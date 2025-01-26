import { React } from "react";
import "boxicons/css/boxicons.min.css";
import Link from "next/link";
export default async function page({ params }) {
  const getData = async () => {
    const req = await fetch(`https://api.tvmaze.com/shows/${params.showId}`);
    if (!req.ok) {
      throw new Error("Failed");
    }

    return req.json();
  };

  //
  const show = await getData();
  //

  return (
    <>
      <Link href={"/"}>
        <i className="bx bx-arrow-back goBack"></i>
      </Link>
      <div className="detailed-card">
        <div className="left-side">
          <img src={show?.image?.original} alt={show?.name} />
        </div>
        <div className="right-side">
          <h1>
            <i className="bx bx-movie-play"></i>
            {show?.name}
          </h1>
          <h3>
            <i className="bx bx-detail"></i>
            {show?.genres?.join(" | ")}
          </h3>
          <h3>
            <i className="bx bx-user-voice"></i>
            {show?.language}
          </h3>
          <h3>
            <i className="bx bxs-star"></i> {show?.rating?.average}
          </h3>
          <h3>
            <i className="bx bx-calendar-plus"></i>First Show :{show?.premiered}
          </h3>
          <h3>
            {show.ended && <i className="bx bx-calendar-x"></i>}
            {show.ended && <span>Last Show :{show?.ended}</span>}
          </h3>
          <p>
            <i className="bx bx-slideshow"></i>
            {show?.summary}
          </p>
        </div>
      </div>
    </>
  );
}
