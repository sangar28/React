import React from "react";

export const BlogPost = ({ info }) => {
  const { title, author, image, summary} = info;
  return (
    <div style={styles.card}>
      <h2 style={styles.title}>{title}</h2>
      <img src={image} alt={title} style={styles.image} />
      <p style={styles.meta}>
        <strong>{author}</strong> · {summary}
      </p>
    </div>
  );
};
const styles = {
  card: {
    width: "1100px",
    padding: "16px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    marginBottom: "1.5rem",
    backgroundColor: "#fff",
    textAlign : "center",
    boxShadow : "0 2px 4px rgba(0,0,0,0.7)",
    
  },
  title: {
    margin: "0 0 8px 0",
    fontSize: "20px",
  },
  image: {
    width: "200px",
    height: "200px",
    objectFit: "cover",
    borderRadius: "8px",
    marginBottom: "12px",
    
  },
  meta: {
    margin: 0,
    color: "#555",
  },
};
