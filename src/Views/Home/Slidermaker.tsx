import axios from "axios";
import { useEffect, useState } from "react";

type UserData = {
  avatar_url: string;
  login: string;
};

const Slidermaker = ({ username, thought = "" }: { username: string; thought?: string }) => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!username) {
      setError("No username provided.");
      return;
    }

    const fetchUserData = async () => {
      try {
        const res = await axios.get(`https://api.github.com/users/${username}`);
        setUserData(res.data);
        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch user data.");
        setLoading(false);
      }
    };

    fetchUserData();
  }, [username]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="w-full h-full bg-coffee-brown text-white p-5 rounded-md flex flex-col items-center">
      {userData && (
        <>
          <img src={userData.avatar_url} alt={`${userData.login}'s profile`} className="w-24 h-24 rounded-full mb-4" />
          <h2 className="text-lg font-bold mb-2">{userData.login}</h2>
          {thought && <p className="text-md  text-center italic mt-2">{thought}</p>}
        </>
      )}
    </div>
  );
};

export default Slidermaker;
