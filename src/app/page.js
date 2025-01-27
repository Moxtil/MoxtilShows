"use client";
import React, { Suspense } from "react";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
export default function page() {
  const [showName, setShowName] = useState("");
  const [loader, setLoader] = useState(false);
  const [shows, setShows] = useState([]);

  const types = [
    "Comedy",
    "Drama",
    "Love",
    "Mysterious",
    "Fiction",
    "English",
    "American",
    "Random",
    "Turkish",
    "Korean",
    "Action",
    "CowBoy",
  ];
  const randomMovie = Math.floor(Math.random() * types.length);

  useEffect(() => {
    setShowName(randomMovie);
  }, []);

  useEffect(() => {
    setLoader(true);
    fetch(`https://api.tvmaze.com/search/shows?q=${showName}`)
      .then((response) => response.json())
      .then((data) => setShows(data))
      .then(() => setLoader(false))
      .catch((error) => console.error("Error fetching data:", error));
  }, [showName]);
  const searchInput = useRef();

  return (
    <div className="main-container">
      <div className="heading">
        <h1>Search For A Movie / TV Show</h1>
        <div className="search-bar">
          <input
            type="search"
            placeholder="Movie / TV Show Name . . ."
            ref={searchInput}
          />
          <button
            onClick={() => {
              setShowName(searchInput.current.value);
            }}
          >
            Search
          </button>
        </div>
        <hr />

        <div className="types-buttons">
          <button
            onClick={() => {
              setShowName("Comedy");
            }}
          >
            Comedy
          </button>
          <button
            onClick={() => {
              setShowName("Drama");
            }}
          >
            Drama
          </button>
          <button
            onClick={() => {
              setShowName("Love");
            }}
          >
            Love
          </button>
          <button
            onClick={() => {
              setShowName("Mysterious");
            }}
          >
            Mysterious
          </button>
          <button
            onClick={() => {
              setShowName("Fiction");
            }}
          >
            Fiction
          </button>
          <button
            onClick={() => {
              setShowName("English");
            }}
          >
            English
          </button>
          <button
            onClick={() => {
              setShowName("Random");
            }}
          >
            Random
          </button>
          <button
            onClick={() => {
              setShowName("American");
            }}
          >
            American
          </button>
          <button
            onClick={() => {
              setShowName("Turkish");
            }}
          >
            Turkish
          </button>
          <button
            onClick={() => {
              setShowName("Korean");
            }}
          >
            Korean
          </button>
          <button
            onClick={() => {
              setShowName("CowBoy");
            }}
          >
            CowBoy
          </button>
          <button
            onClick={() => {
              setShowName("Action");
            }}
          >
            Action
          </button>
        </div>
      </div>
      <div className="shows-container">
        {loader && <div className="loader"></div>}
        <Suspense fallback={<div className="loader"></div>}>
          <div className="shows">
            {shows &&
              shows.map((show) => {
                return (
                  <Link key={show.show.id} href={`/${show.show.id}`}>
                    <div className="show-card">
                      <img
                        src={show?.show?.image?.original}
                        alt={show?.show?.name}
                      />
                    </div>
                  </Link>
                );
              })}
          </div>
        </Suspense>
      </div>
    </div>
  );
}
