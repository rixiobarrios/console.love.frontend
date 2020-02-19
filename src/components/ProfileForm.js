import React from 'react';

const ProfileForm = ({ profile, handleSubmit, handleChange }) => (
  <form onSubmit={handleSubmit}>
    <label htmlFor="image"></label>
    <input
      name="image"
      placeholder="Profile Pic Link"
      value={profile.image}
      onChange={handleChange}
      required
      id="image"
    />

    <label htmlFor="name"></label>
    <input
      name="name"
      placeholder="Name"
      value={profile.name}
      onChange={handleChange}
      required
      id="name"
    />

    <label htmlFor="Age"></label>
    <input
      name="age"
      placeholder="Age"
      value={profile.age}
      onChange={handleChange}
      required
      id="age"
    />

    <label htmlFor="location"></label>
    <input
      name="location"
      placeholder="Location"
      value={profile.location}
      onChange={handleChange}
      required
      id="location"
    />

    <label htmlFor="bio"></label>
    <input
      name="bio"
      placeholder="Bio"
      value={profile.bio}
      onChange={handleChange}
      required
      id="bio"
    />

    <label htmlFor="languages"></label>
    <input
      name="languages"
      placeholder="Programming Languages"
      value={profile.languages}
      onChange={handleChange}
      required
      id="languages"
    />

    <label htmlFor="github"></label>
    <input
      name="github"
      placeholder="github link"
      value={profile.github}
      onChange={handleChange}
      required
      id="github"
    />

    <button type="submit">Submit</button>
  </form>
);

export default ProfileForm;
