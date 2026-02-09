import React, { useState } from "react";

function GithubSearch() {
  const [username, setUsername] = useState("");
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState(null);

  const getData = async () => {
    try {
      const userRes = await fetch(
        `https://api.github.com/users/${username}`
      );

      if (userRes.status === 404) {
        throw new Error("User not found");
      }

      const userData = await userRes.json();
      setProfile(userData);

      const repoRes = await fetch(
        `https://api.github.com/users/${username}/repos?sort=created&per_page=5`
      );
      const repoData = await repoRes.json();
      setRepos(repoData);

      setError(null);
    } catch (err) {
      setError(err.message);
      setProfile(null);
      setRepos([]);
    }
  };

  return (
    <div>
      <h3>Github Search</h3>

      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <button onClick={getData}>Get Details</button>

      {error && <p>{error}</p>}

      {profile && (
        <div>
          <img src={profile.avatar_url} alt="avatar" width="100" />
          <p>{profile.bio}</p>
          <p>Followers: {profile.followers}</p>
          <h3>Latest Repositories</h3>
        </div>
      )}

      
      <ul>
        {repos.map((repo) => (
          <li key={repo.id}>{repo.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default GithubSearch;
