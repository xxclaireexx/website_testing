import "./App.css"; // oder eine separate CSS-Datei, wenn du magst
import React from "react";


type Props = React.HTMLAttributes<HTMLElement> & {
  children?: React.ReactNode;
};


// standard background for title/subtitle section
export const BackgroundSectionTitle: React.FC<Props> = ({ children }) => {
  return (
    <div className="background-section-title">
      {children}
    </div>
  );
};

// standard background for text body
export const BackgroundSectionBody: React.FC<Props> = ({ children }) => {
  return (
    <div className="background-section-body">
      {children}
    </div>
  )
};

// standard background for empty space
export const BackgroundSectionPlaceholder: React.FC<Props> = ({ children }) => {
  return (
    <div className="background-section-placeholder">
      {children}
    </div>
  )
};

// standard background for description
export const BackgroundSectionDescription: React.FC<Props> = ({ children }) => {
  return (
    <div className="background-section-description">
      {children}
    </div>
  )
};