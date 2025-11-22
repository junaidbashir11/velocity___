import React, { useState, useEffect } from 'react';

function SimpleGeolocationComponent() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for Geolocation support
    if (!('geolocation' in navigator)) {
      setError("Geolocation is not supported by this browser.");
      setLoading(false);
      return;
    }

    // --- Success Callback ---
    const successCallback = (position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
      setLoading(false);
      setError(null); // Clear any previous errors
    };

    // --- Error Callback ---
    const errorCallback = (err) => {
      console.error('Geolocation Error:', err);
      // Determine the error message
      let message = 'An unknown error occurred.';
      switch (err.code) {
        case err.PERMISSION_DENIED:
          message = 'Permission denied to access location.';
          break;
        case err.POSITION_UNAVAILABLE:
          message = 'Location information is unavailable.';
          break;
        case err.TIMEOUT:
          message = 'The request to get user location timed out.';
          break;
      }
      setError(message);
      setLoading(false);
    };

    // --- Options (Optional) ---
    const options = {
      enableHighAccuracy: true,
      timeout: 5000, // 5 seconds
      maximumAge: 0, // No cached result
    };

    // --- The Main API Call ---
    setLoading(true); // Start loading state
    navigator.geolocation.getCurrentPosition(
      successCallback,
      errorCallback,
      options
    );

    // No cleanup function is needed for getCurrentPosition since it's a one-time request.
  }, []); // Empty dependency array ensures this runs only ONCE after the component mounts.

  
  // --- Rendering Logic ---
  if (loading) {
    return <h2>⏳ Fetching location...</h2>;
  }

  if (error) {
    return <h2 style={{ color: 'red' }}>❌ Error: {error}</h2>;
  }

  return (
    <div>
      <h2>📍 Your Location (getCurrentPosition)</h2>
      <p>
        **Latitude:** **{latitude}**
      </p>
      <p>
        **Longitude:** **{longitude}**
      </p>
    </div>
  );
}

export default SimpleGeolocationComponent;