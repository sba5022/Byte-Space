
"use client";

import { useState } from "react";
import "./signin-page.css";

const courseAvatars = [
  "https://randomuser.me/api/portraits/women/44.jpg",
  "https://randomuser.me/api/portraits/men/32.jpg",
  "https://randomuser.me/api/portraits/women/68.jpg",
  "https://randomuser.me/api/portraits/men/46.jpg",
];

const studentAvatars = [
  "https://randomuser.me/api/portraits/men/11.jpg",
  "https://randomuser.me/api/portraits/women/12.jpg",
  "https://randomuser.me/api/portraits/men/14.jpg",
  "https://randomuser.me/api/portraits/women/24.jpg",
  "https://randomuser.me/api/portraits/men/33.jpg",
  "https://randomuser.me/api/portraits/women/36.jpg",
];

const courses = [
  {
    title: "the Power of Big Data",
    image: "https://i.ibb.co.com/C3Q6S6sd/3-grid.jpg",
    rating: "4.5",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    price: "$25",
    className: "course-card-main",
  },
  {
    title: "Build Digital Skills",
    image: "https://i.ibb.co.com/zVhZnY1n/2-grid.jpg",
    rating: "4.8",
    lessons: "17 Lessons",
    duration: "3 hours",
    comments: "42 Comments",
    price: "$25",
    className: "course-card-back",
  },
];

function Decorations() {
  return (
    <div className="signup-decorations" aria-hidden="true">
      <div className="deco-logo">
        <span />
        <span />
      </div>

      <div className="deco-ring" />

      <div className="deco-squiggle">
        <span />
        <span />
        <span />
      </div>

      <div className="deco-triangle">
        <span />
      </div>
    </div>
  );
}

function CourseCard({ course }) {
  return (
    <article className={`course-card ${course.className}`}>
      <div className="course-image">
        <img
          src={course.image}
          alt={`${course.title} course preview`}
        />

        <div className="course-badges">
          <span>{course.lessons}</span>
          <span>{course.duration}</span>
          <span>{course.comments}</span>
        </div>
      </div>

      <div className="course-card-content">
        <div className="course-heading">
          <h3>{course.title}</h3>

          <span className="course-rating">
            {course.rating} <b>★</b>
          </span>
        </div>

        <p className="course-author">
          by <a href="#course-author">purepal studio</a>
        </p>

        <div className="course-community">
          <span className="level-badge">
            <span>▮</span> Beginner
          </span>

          <div className="mini-avatars">
            {courseAvatars.map((avatar, index) => (
              <img
                key={avatar}
                src={avatar}
                alt={`Course student ${index + 1}`}
              />
            ))}

            <span className="avatar-count">26+</span>
          </div>
        </div>

        <div className="course-price">
          <strong>{course.price}</strong>
          <span>/lifetime</span>
        </div>
      </div>
    </article>
  );
}

function CourseShowcase() {
  return (
    <div className="showcase">
      <CourseCard course={courses[1]} />
      <CourseCard course={courses[0]} />

      <div className="student-card">
        <div>
          <h3>Happy Students</h3>
          <p>
            4.5 (240) <span>★</span>
          </p>
        </div>

        <div className="student-avatars">
          {studentAvatars.map((avatar, index) => (
            <img
              key={avatar}
              src={avatar}
              alt={`Student ${index + 1}`}
            />
          ))}

          <span className="avatar-count">2K+</span>
        </div>
      </div>

      <div className="showcase-ring" aria-hidden="true" />
      <div className="showcase-triangle" aria-hidden="true" />

      <div className="showcase-squiggle" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}

export default function SignupPage() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setMessage("");

    if (!form.email.trim()) {
      setMessage("Please enter your email address.");
      return;
    }

    if (form.password.length < 8) {
      setMessage("Your password must be at least 8 characters.");
      return;
    }

   
    setMessage("Form validated successfully!");
  }

  return (
    <main className="signup-page">
      <div className="grid-background" />
      <Decorations />

      <section className="signup-layout">
        <div className="signup-left">
          <a
            href="/"
            className="small-brand"
            aria-label="ByteSpace home"
          >
            <span>b</span>
          </a>

          <div className="intro-copy">
            <h2>Sign in with ease</h2>

            <p>
              Experience a seamless and efficient sign-in
              process that grants you instant access to a
              world of knowledge.
            </p>
          </div>

          <CourseShowcase />
        </div>

        <section className="signup-panel">
          <div className="signup-form-inner">
            <p className="form-eyebrow">Sign In</p>

            <h1>Welcome Back</h1>

            <form onSubmit={handleSubmit}>
              <div className="form-field">
                <label htmlFor="email">Email</label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="designer@example.com"
                  autoComplete="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-field">
                <label htmlFor="password">Password</label>

                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="********"
                  autoComplete="current-password"
                  value={form.password}
                  onChange={handleChange}
                  minLength={8}
                  required
                />
              </div>

              <div className="form-actions">
                <button type="submit">Sign In</button>
              </div>

              {message && (
                <p className="form-message" role="status">
                  {message}
                </p>
              )}
            </form>

           

            <p className="login-prompt">
              New user? <a href="/signup">Create an account</a>
            </p>
          </div>
        </section>
      </section>
    </main>
  );
}