import React from 'react';

const ProfileForm = ({ profile, handleSubmit, handleChange }) => (
  <form onSubmit={handleSubmit}>
    <label htmlFor="image">Link to Profile Pic</label>
    <input
      name="image"
      placeholder="Profile Pic"
      value={profile.image}
      onChange={handleChange}
      required
      id="image"
    />

    <label htmlFor="name">Name</label>
    <input
      name="name"
      placeholder="Profile Name"
      value={profile.name}
      onChange={handleChange}
      required
      id="name"
    />

    <label htmlFor="Age">Age</label>
    <input
      name="age"
      placeholder="Profile Age"
      value={profile.age}
      onChange={handleChange}
      required
      id="age"
    />

    <label htmlFor="location">Location</label>
    <input
      name="location"
      placeholder="Profile Name"
      value={profile.location}
      onChange={handleChange}
      required
      id="location"
    />

    <label htmlFor="about">About Me</label>
    <input
      name="about"
      placeholder="Profile About Me"
      value={profile.about}
      onChange={handleChange}
      required
      id="about"
    />

    <label htmlFor="languages">Programming Languages</label>
    <input
      name="languages"
      placeholder="Programming Languages"
      value={profile.languages}
      onChange={handleChange}
      required
      id="languages"
    />

    <button type="submit">Sign Up</button>
  </form>
);

export default ProfileForm;
