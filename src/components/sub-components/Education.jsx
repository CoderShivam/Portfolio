import React from "react";

const Education = () => {
  const educations = [
    {
      _id: "1",
      title: "B.Tech in Electronics and Communication Engineering",
      description:
        "Motilal Nehru National Institute of Technology, Allahabad (2022–2026). CGPA: 7.43 (till 6th sem).",
    },
    {
      _id: "2",
      title: "Higher Secondary (Class XII)",
      description:
        "Babuji Convent Public School, CBSE Board – 94.4% (2021).",
    },
    {
      _id: "3",
      title: "Secondary (Class X)",
      description:
        "Babuji Convent Public School, CBSE Board – 91.4% (2019).",
    },
  ];

  return (
    <div className="education_component" style={{ marginTop: "2rem" }}>
      <h3>EDUCATION</h3>
      {educations.map((element) => {
        return (
          <div className="education" key={element._id}>
            <p>{element.title}</p>
            <p>{element.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Education;
