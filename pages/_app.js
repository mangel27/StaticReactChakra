import DefaultLayout from '@/layout/DefaultLayout'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from "next/head";
import { ChakraProvider } from '@chakra-ui/react'
import { DefaultSeo } from 'next-seo';
import SEO from '../src/constants/seoData';
import * as ga from '../src/lib/ga'
import '../src/styles/globals.css'
import GeoRestrictionOverlay from '@/components/RestrictedStateLayOver';
import axios from 'axios'
export default function App({ Component, pageProps }) {
  const router = useRouter()
  const [showGeoRestriction, setShowGeoRestriction] = useState(false);
  const [userLocation, setUserLocation] = useState({
    state: '',
    stateCode: ''
  });
  const fetchUserLocation = () => {
    return axios.post(`${process.env.NEXT_PUBLIC_GOOGLE_API_URL}?key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}`)
      .then(response => {
        const { lat, lng } = response.data.location;
        return fetchStateFromCoordinates(lat, lng);
      })
      .catch(error => {
        console.error("Error fetching user location:", error);
        throw error;
      });
  };
  const fetchStateFromCoordinates = (latitude, longitude) => {
    const geocodeUrl = `${process.env.NEXT_PUBLIC_GEOCODE_URL}?latlng=${latitude},${longitude}&key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}`;
    return axios.get(geocodeUrl)
      .then(response => {
        const results = response.data.results;
        // Extract state and state code from address components
        let state = '';
        let stateCode = '';
        if (results && results.length > 0) {
          // Look through address components for the administrative_area_level_1 type (state)
          const addressComponents = results[0].address_components;
          for (const component of addressComponents) {
            if (component.types.includes('administrative_area_level_1')) {
              state = component.long_name;
              stateCode = component.short_name;
              break;
            }
          }
        }
        return {
          state,
          stateCode,
          latitude,
          longitude
        };
      })
      .catch(error => {
        console.error("Error geocoding coordinates:", error);
        throw error;
      });
  };
 
  // Function to check if user is allowed based on API response
  const checkUserAllowed = async (stateName, stateShortName) => {
    try {
      // You'll need to determine or retrieve the user_id
      const response = await axios.post('your url', {
        user_id: "67e1327e13ad40a0ed92ed8c",
        state_name: stateName,
        state_short_name: stateShortName
      });
      // Check response structure: {"success":true,"message":"Check for system's access allowance successfully!","data":{"fantasy":true}}
      // If fantasy is true, allow access; otherwise restrict
      if (response.data.success && response.data.data && response.data.data.fantasy === true) {
        return true; // Allow access
      } else {
        return false; // Restrict access
      }
    } catch (error) {
      console.error("Error checking if user is allowed:", error);
      // Default to restricted if there's an error
      return false;
    }
  };
 
  const getUserLocation = async () => {
    try {
      const locationData = await fetchUserLocation();
      setUserLocation({
        ...locationData,
      });
      // Check if user is allowed based on their location
      if (locationData.state && locationData.stateCode) {
        const isAllowed = await checkUserAllowed(locationData.state, locationData.stateCode);
        // Show restriction overlay if fantasy is false (not allowed)
        setShowGeoRestriction(!isAllowed);
      }
    } catch (error) {
      console.log("Failed to get user location:", error);
      // Default to restricted if there's an error
      // setShowGeoRestriction(true);
    }
  };
  useEffect(() => {
    const checkUserLocation = async () => {
      try {
        await getUserLocation();
      } catch (error) {
        console.error('Error checking location:', error);
      }
    };
    checkUserLocation();
  }, []);
  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
 
  return (
<>
<Head>
<link rel="shortcut icon" href="/favicon.ico" />
</Head>
<ChakraProvider>
<DefaultSeo {...SEO} />
<DefaultLayout>
<Component {...pageProps} />
          {showGeoRestriction && <GeoRestrictionOverlay />}
</DefaultLayout>
</ChakraProvider>
</>
  );
}