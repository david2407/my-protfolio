import React, { useState, useEffect } from "react";
import sanityClient from "../client";

export default function Project() {
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "project"]{
      title,
      date,
      place,
      description,
      projectType,
      link,
      tags
    }`
      )
      .then((data) => setProjectData(data))
      .catch(console.error);
  }, []);

  return (
    <main className="bg-green-100 min-h-screen p-12">
      <section className="container mx-auto">
        <h1 className="text-5xl flex"></h1>
        <h2></h2>
        <section>
          <article>
            <h3></h3>
            <div>
              <span></span>
              <span></span>
              <span></span>
              <p></p>
              <span></span>
            </div>
          </article>
        </section>
      </section>
    </main>
  );
}
