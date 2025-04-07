import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Profile.css";

const InstagramProfile = () => {
  const [profile, setProfile] = useState(null);
  const [media, setMedia] = useState([]);

  const accessToken =
    "IGAAa6sZC53ODpBZAE1EZAGJ3ZAjJUOC0tZAFdESWRPcVFEUk1ERjBrbzFXVmowOW1hcThIeWp4STdrRlIweVR1UmhIYlI3ZADBZANHNTb0MwYkFEWTR5Q1VKTkY0b0xOa1h1dHRLODFzNW9TZAjlRSDhLOGpUdTdFME53OEpkTjczdjB6dwZDZD";

  useEffect(() => {
    const fetchProfileAndMedia = async () => {
      try {
        // Fetch profile data
        const profileRes = await axios.get("https://graph.instagram.com/me", {
          params: {
            fields:
              "id,username,profile_picture_url,name,account_type,media_count,biography",
            access_token: accessToken,
          },
        });

        setProfile(profileRes.data);

        // Fetch media posts
        const mediaRes = await axios.get(
          "https://graph.instagram.com/me/media",
          {
            params: {
              fields:
                "id,caption,media_type,media_url,thumbnail_url,permalink,timestamp",
              access_token: accessToken,
            },
          }
        );
        console.log({ mediaRes });

        setMedia(mediaRes.data.data);
      } catch (err) {
        console.error(
          "Error fetching Instagram data:",
          err.response?.data || err.message
        );
      }
    };

    fetchProfileAndMedia();
  }, []);

  return (
    <div className="container">
      {profile && (
        <div className="profile">
          <div className="profile-image">
            <img src={profile.profile_picture_url} alt="Profile picture"/>
          </div>
          <div>
            <h1>@{profile.username}</h1>
            <p>{profile.account_type}</p>
            <p>Total Posts: {profile.media_count}</p>
            <p>{profile.biography}</p>
          </div>
        </div>
      )}

      <div className="grid-container">
        {media.map((item) => (
          <div key={item.id} className="card">
            {item.media_type === "IMAGE" ||
            item.media_type === "CAROUSEL_ALBUM" ? (
              <img
                src={item.media_url}
                alt={item.caption || "Instagram media"}
              />
            ) : item.media_type === "VIDEO" ? (
              <video controls>
                <source src={item.media_url} />
              </video>
            ) : null}

            <div className="card-content">
              <p>{item.caption?.slice(0, 100)}</p>
              <a
                href={item.permalink}
                target="_blank"
                rel="noopener noreferrer"
              >
                View on Instagram
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstagramProfile;
