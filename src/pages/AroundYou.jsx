import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { Error, Loader, SongCard } from "../components";
import { useGetSongsByCountryQuery } from "../redux/services/shazamCore";

const AroundYou = () => {
  const [country, setCountry] = useState("SA");
  const [loading, setLoading] = useState(true);
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data, isFetching, error } = useGetSongsByCountryQuery(country);

  useEffect(() => {
    const source = axios.CancelToken.source();
    const token = source.token;
    let fetching = true;

    const fetchCountry = async () => {
      try {
        const res = await axios.get(
          `https://api.geoapify.com/v1/ipinfo?apiKey=${
            import.meta.env.VITE_GEO_API_KEY
          }`,
          { cancelToken: token }
        );

        fetching && setCountry(res?.data?.country?.iso_code);
      } catch (fetchError) {
        console.log(fetchError);
      }
      setLoading(false);
    };

    fetchCountry();
    return () => {
      fetching = false;
      source.cancel();
    };
  }, [country]);

  if (isFetching && loading) return <Loader title="Loading songs around you" />;

  if (error && country) return <Error />;

  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">
        Around You
        <span className="font-black">{" " + country}</span>
      </h2>

      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data?.map((song, i) => (
          <SongCard
            key={song.key}
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}
            i={i}
          />
        ))}
      </div>
    </div>
  );
};

export default AroundYou;
