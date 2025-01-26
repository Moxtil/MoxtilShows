"use client";
import React from "react";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
export default function page() {
  const [showName, setShowName] = useState("");
  const [shows, setShows] = useState([]);
  const [noResult, setNoResult] = useState(false);

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
    setShowName(searchInput.current.value);
    if (showName == "") {
      // setNoResult(true);
      setShowName(randomMovie);
    } else {
      setNoResult(false);
      setShowName(randomMovie);
    }
  }, []);
  useEffect(() => {
    const getData = async () => {
      const req = await fetch(
        `https://api.tvmaze.com/search/shows?q=${showName}`
      );
      const result = await req.json();
      if (result.length < 1 && showName != "") {
        setNoResult(true);
      } else {
        setNoResult(false);
      }
      setShows(result);
    };
    getData();
  }, [shows]);
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
            onChange={(e) => {
              setShowName(e.currentTarget.value);
            }}
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
        {noResult && <h1 style={{ color: "gold" }}>No Shows Available ! </h1>}
      </div>
    </div>
  );
}
