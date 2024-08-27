import React, { useState, useEffect } from 'react';

const FetchSuggestions = ({ searchText, caller }) => {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const fetchSuggestions = async () => {
      try {
        const response = await fetch(`https://api.geoapify.com/v1/geocode/autocomplete?text=${searchText}&filter=countrycode:us&apiKey=893f9d2fbac2447696efa3f7df2f6efa`);
        if (response.ok) {
          const data = await response.json();
          const newSuggestions = data.features.map((feature) => feature.properties.formatted);
          if (caller === 'origin') {
            // Update state for origin suggestions
            setSuggestions(newSuggestions);
          } else {
            // Update state for destination suggestions
            setSuggestions(newSuggestions);
          }
        }
      } catch (error) {
        console.error('Failed to fetch suggestions', error);
      }
    };

    fetchSuggestions();
  }, [searchText, caller]);

  return (
    <ul>
      {suggestions.map((suggestion, index) => (
        <li key={index}>{suggestion}</li>
      ))}
    </ul>
  );
};

export default FetchSuggestions;
