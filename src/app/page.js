import Link from "next/link";

const avatars = [
  "https://i.pravatar.cc/100?img=12",
  "https://i.pravatar.cc/100?img=32",
  "https://i.pravatar.cc/100?img=47",
  "https://i.pravatar.cc/100?img=5",
  "https://i.pravatar.cc/100?img=11",
  "https://i.pravatar.cc/100?img=13",
];

function Logo() {
  return (
    <a href="#" className="bytespace-logo">
      <span className="bytespace-logo-mark" />
      <span>ByteSpace</span>
    </a>
  );
}

function SearchIcon() {
  return (
    <svg
      className="bytespace-search-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-4-4" />
    </svg>
  );
}

function BagIcon() {
  return (
    <svg
      className="bytespace-bag"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 8h12l1 13H5L6 8Z" />
      <path d="M9 8V6a3 3 0 0 1 6 0v2" />
    </svg>
  );
}

function DecorativeShapes() {
  return (
    <> <div className="bytespace-left-strokes">
        <span className="bytespace-left-stroke" />
        <span className="bytespace-left-stroke" />
        <span className="bytespace-left-stroke" />
        <span className="bytespace-left-stroke" />
      </div>
      <div className="bytespace-white-squiggle-left">
        <span />
        <span />
        <span />
        <span />
      </div>
       <div className="bytespace-right-lime" />
<div className="bytespace-triangle" />
 <div className="bytespace-ring" />
 <div className="bytespace-white-squiggle-right">
        <span />
        <span />
        <span />
        <span />
      </div>
    </>
  );
}

function CourseCard() {
  return (
    <div className="bytespace-floating-card bytespace-course-card">
      <p className="bytespace-card-title">
        UI/UX Design
      </p>

      <p className="bytespace-card-subtitle">
        200 Courses&nbsp; • &nbsp;1000+ Students
      </p>
    </div>
  );
}

function ProgressCard() {
  return (
    <div className="bytespace-floating-card bytespace-progress-card">
      <p className="bytespace-progress-title">
        Learning Progress
      </p>

      <div className="bytespace-progress-number">
        55%
      </div>

      <div className="bytespace-progress-track">
        <div className="bytespace-progress-value" />
      </div>
    </div>
  );
}
function StudentsCard() {
  return (
    <div className="bytespace-floating-card bytespace-students-card">
      <p className="bytespace-card-title">
        Happy Students
      </p>

      <div className="bytespace-rating">
        <span>4.5</span>
        <span>(240)</span>
        <span className="bytespace-star">★</span>
      </div>

      <div className="bytespace-avatar-row">
        {avatars.map((avatar, index) => (
          <div
            className="bytespace-avatar"
            key={index}
          >
            <img
              src={avatar}
              alt=""
            />
          </div>
        ))}

        <div className="bytespace-student-count">
          2K+
        </div>
      </div>
    </div>
  );
}
function HeroVisual() {
  return (
    <div className="bytespace-visual">
      
      <div className="bytespace-lime-circle" />

     
      <CourseCard />

      <ProgressCard />

      <StudentsCard />

      
      <img
        src="https://i.ibb.co.com/Xx5y9wr4/byte-space-maann.png"
        alt="Student learning online"
        className="bytespace-person"
      />
    </div>
  );
}
function BrandStrip() {
  return (


    <section className="bytespace-brands ">
      <div className="bytespace-brand-list space-x-5 ">

        <div className="bytespace-brand">
          <img
            src="https://i.ibb.co.com/dwWbKbVQ/1-logoipsum-261.png"
            alt="Logoipsum"
          />
        </div>

        <div className="bytespace-brand">
          <img
            src="https://i.ibb.co.com/PGh3y4PP/2-logoipsum-265.png"
            alt="Logoipsum"
          />
        </div>

        <div className="bytespace-brand">
          <img
            src="https://i.ibb.co.com/Y4VJRJzq/3-logoipsum-264.png"
            alt="Logoipsum"
          />
        </div>

        <div className="bytespace-brand">
          <img
            src="https://i.ibb.co.com/Jj4wzwbk/4-logoipsum-262.png"
            alt="Logoipsum"
          />
        </div>

        <div className="bytespace-brand">
          <img
            src="https://i.ibb.co.com/GfGxMb7N/5-logoipsum-263.png"
            alt="Logoipsum"
          />
        </div>

      </div>
    </section>

  );
}
export default function Home() {
  return (
    <main>


      <section className="bytespace-hero">

       

        <header className="bytespace-navbar">
          <div className="bytespace-navbar-inner">

            <Logo />

         
            <nav className="bytespace-nav-center">

              <a
                href="#"
                className="bytespace-nav-link"
              >
                Home
              </a>

              <a
                href="#"
                className="bytespace-nav-link"
              >
                Courses
              </a>

              <a
                href="#"
                className="bytespace-nav-link"
              >
                Creators
              </a>

            </nav>

           
            <div className="bytespace-nav-right">

            <Link
    href="/signin"
    className="bytespace-auth-link"
  >
    Sign In
  </Link>

              <a
                href="#"
                className="bytespace-auth-link"
              >
                Join Us
              </a>

              <BagIcon />

            </div>

          </div>
        </header>

       

        <DecorativeShapes />

       

        <div className="bytespace-content">

          <h1 className="bytespace-title">
            Get Access to Hundreds
            <br />
            Courses Available
          </h1>

          <p className="bytespace-description">
            Unlock your creativity, gain valuable knowledge,
            and grow your business with our wide range of
            courses.
          </p>

         

          <div className="bytespace-search">

            <div className="bytespace-search-wrapper">

              <SearchIcon />

              <input
                type="text"
                placeholder="Course, topic, creator"
                className="bytespace-search-box"
              />

            </div>

            <button
              type="button"
              className="bytespace-search-button"
            >
              Search
            </button>

          </div>

        </div>

       

        <HeroVisual />

      </section>

     

      <BrandStrip />

     

      <CoursesSection />
      <LearningPathsSection />
      <ProfessionalGrowthSection />
      <CreatorCommunitySection />
    </main>
  );
}
const categories = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Digital Illustration",
  "Film & Video",
  "Crafts",
  "Freelance & Entrepreneurship",
  "Graphic Design",
  "Photography",
  "Productivity",
  "Web Development",
  "Data Science",
  "Cooking",
];

const courses = [
  {
    title: "Learn Figma from Basic",
    image: "https://i.ibb.co.com/hJ9dS9W4/1-grid.jpg",
  },
  {
    title: "Build Digital Asset",
    image: "https://i.ibb.co.com/B2CBvqz1/2-grid.jpg",
  },
  {
    title: "the Power of Big Data",
    image: "https://i.ibb.co.com/8D039RFK/3-grid.jpg",
  },
  {
    title: "Balancing Productivity an...",
    image: "https://i.ibb.co.com/wFsjdgw4/4-grid.jpg",
  },
  {
    title: "Mastering Money Manage...",
    image: "https://i.ibb.co.com/yBB1dZst/5-grid.jpg",
  },
  {
    title: "From Idea to Startup Succ...",
    image: "https://i.ibb.co.com/Mxb2h0kc/6-grid.jpg",
  },
];

const courseAvatars = [
  "https://i.pravatar.cc/100?img=12",
  "https://i.pravatar.cc/100?img=32",
  "https://i.pravatar.cc/100?img=47",
  "https://i.pravatar.cc/100?img=5",
];

function CourseAvatars() {
  return (
    <div className="flex items-center">
      {courseAvatars.map((avatar, index) => (
        <div
          key={index}
          className={`relative h-[25px] w-[25px] overflow-hidden rounded-full border-2 border-white ${index !== 0 ? "-ml-[7px]" : ""
            }`}
        >
          <img
            src={avatar}
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
      ))}

      <div className="-ml-[7px] flex h-[25px] w-[25px] items-center justify-center rounded-full border-2 border-white bg-[#c6ff00] text-[8px] font-semibold text-black">
        26+
      </div>
    </div>
  );
}

function CourseGridCard({ course }) {
  return (
    <article className="w-full rounded-[18px] border border-[#dedfe3] bg-white p-[11px]">

     
      <div className="relative h-[158px] w-full overflow-hidden rounded-[12px]">

        <img
          src={course.image}
          alt={course.title}
          className="absolute inset-0 h-full w-full object-cover"
        />

       
        <div className="absolute bottom-[9px] left-[9px] right-[9px] flex items-center justify-between gap-[4px]">

          <span className="whitespace-nowrap rounded-full bg-white/85 px-[9px] py-[5px] text-[8px] font-medium text-[#65666d] backdrop-blur-[2px]">
            17 Lessons
          </span>

          <span className="whitespace-nowrap rounded-full bg-white/85 px-[9px] py-[5px] text-[8px] font-medium text-[#65666d] backdrop-blur-[2px]">
            2 hours 16 mins
          </span>

          <span className="whitespace-nowrap rounded-full bg-white/85 px-[9px] py-[5px] text-[8px] font-medium text-[#65666d] backdrop-blur-[2px]">
            59 Comments
          </span>

        </div>
      </div>

    
      <div className="mt-[9px] flex items-center justify-between gap-2">

        <h3 className="min-w-0 truncate text-[15px] font-semibold leading-[18px] tracking-[-0.4px] text-[#070b18]">
          {course.title}
        </h3>

        <div className="flex shrink-0 items-center gap-[3px] text-[10px] text-[#73757c]">

          <span>4.5</span>

          <svg
            width="11"
            height="11"
            viewBox="0 0 24 24"
            fill="#cfd1d5"
          >
            <path d="M12 2.5l2.96 6 6.62.96-4.79 4.67 1.13 6.6L12 17.62 6.08 20.73l1.13-6.6-4.79-4.67 6.62-.96L12 2.5z" />
          </svg>

        </div>
      </div>

     
      <div className="mt-[2px] text-[8px] leading-[12px] text-[#85868c]">
        by{" "}
        <span className="text-[#0057ff]">
          purepearl studio
        </span>
      </div>

      
      <div className="mt-[11px] flex items-center justify-between">

        <div className="flex items-center gap-[6px] rounded-full bg-[#f5f5f6] px-[10px] py-[6px] text-[8px] font-medium text-[#666870]">

          <svg
            width="11"
            height="11"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path d="M4 20V10" />
            <path d="M10 20V4" />
            <path d="M16 20v-7" />
            <path d="M22 20H2" />
          </svg>

          <span>Beginner</span>

        </div>

        <CourseAvatars />

      </div>

      
      <div className="mt-[11px] flex items-end gap-[2px]">

        <span className="text-[16px] font-semibold leading-none tracking-[-0.5px] text-[#0057ff]">
          $25
        </span>

        <span className="mb-[1px] text-[9px] leading-none text-[#85868c]">
          /lifetime
        </span>

      </div>

    </article>
  );
}

function CoursesSection() {
  return (
    <section className="bytespace-courses-section">

     
      <div className="bytespace-courses-header">

        <h2 className="bytespace-courses-title">
          Discover Your Passion,
          <br />
          Build Your Skills
        </h2>

        <p className="bytespace-courses-description text-[18px]">
          At Bytespace Courses, we bring you closer to life-changing
          knowledge. Explore a variety of courses across different
          <br className="hidden sm:block" />
          fields, from technology to the arts, and make a difference
          in your career and life.
        </p>

      </div>

     
      <div className="bytespace-category-list font-[16px]">

        {categories.map((category, index) => (
          <button
            key={category}
            type="button"
            className={
              index === 0
                ? "bytespace-category bytespace-category-active"
                : "bytespace-category"
            }
          >
            {category}
          </button>
        ))}

        <button
          type="button"
          className="bytespace-more-category"
        >
          <span>+</span>
          More
        </button>

      </div>

     
      <div className="bytespace-course-grid">

        {courses.map((course) => (
          <CourseGridCard
            key={course.title}
            course={course}
          />
        ))}

      </div>

    </section>
  );
}

const learningPaths = [
  {
    title: "Design",
    icon: "design",
  },
  {
    title: "Development",
    icon: "development",
  },
  {
    title: "IT & Software",
    icon: "software",
  },
  {
    title: "Business",
    icon: "business",
  },
  {
    title: "Marketing",
    icon: "marketing",
  },
  {
    title: "Photography",
    icon: "photography",
  },
];

function LearningPathIcon({ type }) {
  if (type === "design") {
    return (
      <svg
        width="34"
        height="34"
        viewBox="0 0 34 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.5 25.5L11.5 21.5"
          stroke="#151a24"
          strokeWidth="4"
          strokeLinecap="round"
        />

        <path
          d="M9.5 9.5L24.5 24.5"
          stroke="#151a24"
          strokeWidth="4"
          strokeLinecap="round"
        />

        <path
          d="M24.5 9.5L9.5 24.5"
          stroke="#151a24"
          strokeWidth="4"
          strokeLinecap="round"
        />

        <path
          d="M10 7L14 11"
          stroke="#151a24"
          strokeWidth="4"
          strokeLinecap="round"
        />

        <path
          d="M20 23L24 27"
          stroke="#151a24"
          strokeWidth="4"
          strokeLinecap="round"
        />

        <path
          d="M23 7L27 11"
          stroke="#151a24"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (type === "development") {
    return (
      <svg
        width="34"
        height="34"
        viewBox="0 0 34 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="7"
          y="5"
          width="20"
          height="24"
          rx="2"
          stroke="#151a24"
          strokeWidth="3"
        />

        <path
          d="M12 15L16 18L12 21"
          stroke="#151a24"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="M22 21H18"
          stroke="#151a24"
          strokeWidth="3"
          strokeLinecap="round"
        />

        <path
          d="M11 9H23"
          stroke="#151a24"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (type === "software") {
    return (
      <svg
        width="37"
        height="34"
        viewBox="0 0 37 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="5"
          y="6"
          width="27"
          height="19"
          rx="2"
          stroke="#151a24"
          strokeWidth="3"
        />

        <path
          d="M2.5 29H34.5"
          stroke="#151a24"
          strokeWidth="3"
          strokeLinecap="round"
        />

        <path
          d="M12 29L13.5 25"
          stroke="#151a24"
          strokeWidth="3"
          strokeLinecap="round"
        />

        <path
          d="M25 29L23.5 25"
          stroke="#151a24"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (type === "business") {
    return (
      <svg
        width="35"
        height="35"
        viewBox="0 0 35 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="5"
          y="8"
          width="10"
          height="21"
          rx="1"
          stroke="#151a24"
          strokeWidth="3"
        />

        <rect
          x="18"
          y="12"
          width="12"
          height="17"
          rx="1"
          stroke="#151a24"
          strokeWidth="3"
        />

        <path
          d="M9 13H11"
          stroke="#151a24"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        <path
          d="M9 18H11"
          stroke="#151a24"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        <path
          d="M9 23H11"
          stroke="#151a24"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        <path
          d="M22 17H25"
          stroke="#151a24"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        <path
          d="M22 22H25"
          stroke="#151a24"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        <path
          d="M8 5H12"
          stroke="#151a24"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (type === "marketing") {
    return (
      <svg
        width="38"
        height="36"
        viewBox="0 0 38 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="11"
          cy="9"
          r="4"
          fill="#151a24"
        />

        <path
          d="M5 17C5 13.7 7.7 11 11 11C14.3 11 17 13.7 17 17V19H5V17Z"
          fill="#151a24"
        />

        <path
          d="M20 14C25 11 30 12 33 15"
          stroke="#151a24"
          strokeWidth="3"
          strokeLinecap="round"
        />

        <path
          d="M20 20C25 17 30 18 33 21"
          stroke="#151a24"
          strokeWidth="3"
          strokeLinecap="round"
        />

        <path
          d="M20 26C25 23 30 24 33 27"
          stroke="#151a24"
          strokeWidth="3"
          strokeLinecap="round"
        />

        <circle
          cx="22"
          cy="14"
          r="2.5"
          fill="#151a24"
        />

        <circle
          cx="27"
          cy="21"
          r="2.5"
          fill="#151a24"
        />

        <circle
          cx="32"
          cy="27"
          r="2.5"
          fill="#151a24"
        />
      </svg>
    );
  }

  return (
    <svg
      width="37"
      height="37"
      viewBox="0 0 37 37"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="6"
        y="8"
        width="25"
        height="22"
        rx="2"
        stroke="#151a24"
        strokeWidth="3"
      />

      <path
        d="M12 8V5"
        stroke="#151a24"
        strokeWidth="3"
        strokeLinecap="round"
      />

      <path
        d="M25 8V5"
        stroke="#151a24"
        strokeWidth="3"
        strokeLinecap="round"
      />

      <circle
        cx="18.5"
        cy="15"
        r="3"
        fill="#151a24"
      />

      <path
        d="M12.5 25C13.5 21.5 16 20 18.5 20C21 20 23.5 21.5 24.5 25"
        fill="#151a24"
      />

      <path
        d="M11 11H26"
        stroke="#151a24"
        strokeWidth="2"
      />
    </svg>
  );
}

function LearningPathCard({ path }) {
  return (
    <div className="bytespace-learning-card">

      <div className="bytespace-learning-icon">
        <LearningPathIcon type={path.icon} />
      </div>

      <p className="bytespace-learning-title">
        {path.title}
      </p>

    </div>
  );
}

function LearningPathsSection() {
  return (
    <section className="bytespace-learning-section">

      <div className="bytespace-learning-container">

       
        <h2 className="bytespace-learning-heading">
          Explore Diverse Learning Paths at Bytespace
        </h2>

       
        <p className="bytespace-learning-description">
          At Bytespace, we believe in empowering individuals through
          knowledge. Our diverse range of courses spans various
          <br className="hidden md:block" />
          fields, ensuring there's something for everyone. Unleash your
          potential and explore our carefully curated categories.
        </p>

        
        <div className="bytespace-learning-grid">

          {learningPaths.map((path) => (
            <LearningPathCard
              key={path.title}
              path={path}
            />
          ))}

        </div>

      </div>

    </section>
  );
}


function LimeSquiggle({ className = "" }) {
  return (
    <div className={`bytespace-squiggle ${className}`}>
      <span />
      <span />
      <span />
      <span />
    </div>
  );
}

function MiniCourseCard() {
  return (
    <div className="bytespace-mini-course-card">

      <div className="bytespace-mini-course-image">
        <img
          src="https://i.ibb.co.com/hJ9dS9W4/1-grid.jpg"
          alt="Learn Figma"
        />

        <div className="bytespace-mini-course-meta">
          <span>17 Lessons</span>
          <span>2 hours 16 mins</span>
        </div>
      </div>

      <h4>
        Learn Figma from Basic
      </h4>

      <p className="bytespace-mini-author">
        by <span>purepearl studio</span>
      </p>

      <div className="bytespace-mini-bottom">

        <div className="bytespace-mini-level">
          <span className="bytespace-mini-bars">
            <i />
            <i />
            <i />
          </span>

          Beginner
        </div>

      </div>

      <div className="bytespace-mini-price">
        <strong>$25</strong>
        <span>/lifetime</span>
      </div>

    </div>
  );
}

function LearningProgressCard() {
  return (
    <div className="bytespace-learning-progress">

      <p>
        Learning Progress
      </p>

      <strong>
        55%
      </strong>

      <div className="bytespace-progress-line">
        <span />
      </div>

    </div>
  );
}

function RevenueCard() {
  return (
    <div className="bytespace-revenue-card">
      <p>Total Revenue</p>
      <small>July 1-28</small>
      <strong>$120.29</strong>

      <div className="bytespace-revenue-progress">
        <span />
      </div>
    </div>
  );
}

function YearCard() {
  return (
    <div className="bytespace-year-card">
      <p>Year to Date</p>
      <small>2023</small>
      <strong>$1,200.38</strong>
      <span>+12$</span>
    </div>
  );
}

function HappyStudentsCard() {
  const studentAvatars = [
    "https://i.pravatar.cc/100?img=12",
    "https://i.pravatar.cc/100?img=32",
    "https://i.pravatar.cc/100?img=47",
    "https://i.pravatar.cc/100?img=5",
    "https://i.pravatar.cc/100?img=11",
    "https://i.pravatar.cc/100?img=13",
  ];

  return (
    <div className="bytespace-happy-students">
      <p>Happy Students</p>

      <div className="bytespace-student-rating">
        4.5 (240)
        <span>★</span>
      </div>

      <div className="bytespace-student-avatars">
        {studentAvatars.map((avatar, index) => (
          <img
            key={index}
            src={avatar}
            alt=""
          />
        ))}

        <span>2K+</span>
      </div>
    </div>
  );
}

function ProfessionalGrowthSection() {
  return (
   

    
    <section className="relative overflow-hidden bg-white">



      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `
        radial-gradient(
          circle at 27% 8%,
          rgba(218,255,0,0.52) 0%,
rgba(218,255,0,0.25) 14%,
          rgba(218,255,0,0) 38%
        ),
        radial-gradient(
          circle at 4% 92%,
           rgba(220,255,0,0.42) 0%,
  rgba(220,255,0,0) 25%
        ),
        radial-gradient(
          circle at 94% 92%,
          rgba(30,80,255,0.50) 0%,
          rgba(30,80,255,0) 30%
        ),
        radial-gradient(
          circle at 3% 55%,
          rgba(50,100,255,0.12) 0%,
          rgba(50,100,255,0) 25%
        )
      `,
        }}
      />

      <div className="relative mx-auto max-w-[1200px]">

       

        <div className="grid min-h-[650px] grid-cols-2 items-start">

         

          <div className="relative z-20 pt-[125px]">

            <h2
              className="
            max-w-[500px]
            text-[38px]
            font-[700]
            leading-[1.12]
            tracking-[-1.7px]
            text-[#202329]
          "
            >
              Your Path to Professional
              <br />
              Growth Starts Here!
            </h2>

            <p
              className="
            mt-[36px]
            max-w-[435px]
            text-[15px]
            font-[400]
            leading-[24px]
            text-[#656a74]
          "
            >
              Explore our curated selection of courses tailored to enhance
              <br />
              your capabilities and accelerate your career journey.
              <br />
              Whether you are looking to sharpen specific skills, gain
              <br />
              industry expertise, or embark on a new career path entirely,
              <br />
              we have the resources you need.
            </p>

          

            <div className="mt-[38px] flex items-start gap-[58px]">

              <div>
                <div
                  className="
                text-[30px]
                font-[500]
                leading-none
                tracking-[-1px]
                text-[#0754e9]
              "
                >
                  12K
                </div>

                <div className="mt-[8px] text-[14px] text-[#656a74]">
                  Students
                </div>
              </div>

              <div>
                <div
                  className="
                text-[30px]
                font-[500]
                leading-none
                tracking-[-1px]
                text-[#0754e9]
              "
                >
                  70+
                </div>

                <div className="mt-[8px] text-[14px] text-[#656a74]">
                  Courses
                </div>
              </div>

              <div>
                <div
                  className="
                text-[30px]
                font-[500]
                leading-none
                tracking-[-1px]
                text-[#0754e9]
              "
                >
                  16
                </div>

                <div className="mt-[8px] text-[14px] text-[#656a74]">
                  Creators
                </div>
              </div>

            </div>
          </div>


         

          <div className="relative h-[650px]">

         

            <div
              className="
            absolute
            left-[18px]
            top-[95px]
            z-10
            h-[323px]
            w-[315px]
            overflow-hidden
            rounded-[18px]
            border
            border-[#d9dce1]
            bg-white
            p-[12px]
            shadow-[0_10px_30px_rgba(0,0,0,0.05)]
          "
            >

             
              <div
                className="
              relative
              h-[164px]
              w-full
              overflow-hidden
              rounded-[11px]
            "
              >
                <img
                  src="https://i.ibb.co.com/hJ9dS9W4/1-grid.jpg"
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover"
                />

                <div
                  className="
                absolute
                bottom-[9px]
                left-[9px]
                right-[9px]
                flex
                gap-[5px]
              "
                >
                  <span className="rounded-full bg-white/85 px-[9px] py-[5px] text-[8px] text-[#666]">
                    17 Lessons
                  </span>

                  <span className="rounded-full bg-white/85 px-[9px] py-[5px] text-[8px] text-[#666]">
                    2 hours 16 mins
                  </span>
                </div>
              </div>

              <div className="mt-[10px]">

                <h3 className="text-[16px] font-semibold tracking-[-.4px] text-[#080b13]">
                  Learn Figma from Basic
                </h3>

                <p className="mt-[2px] text-[9px] text-[#777]">
                  by{" "}
                  <span className="text-[#0057ff]">
                    purepearl studio
                  </span>
                </p>

                <div className="mt-[11px] flex items-center justify-between">

                  <div className="rounded-full bg-[#f4f4f5] px-[10px] py-[6px] text-[8px] text-[#666]">
                    📊 &nbsp;Beginner
                  </div>

                  <span className="text-[10px] text-[#0754e9]">
                    4.5 ★
                  </span>

                </div>

                <div className="mt-[11px]">
                  <span className="text-[17px] font-semibold text-[#0754e9]">
                    $25
                  </span>

                  <span className="ml-[2px] text-[9px] text-[#777]">
                    /lifetime
                  </span>
                </div>

              </div>
            </div>


            

            <img
              src="https://i.ibb.co.com/Xx5y9wr4/byte-space-maann.png"
              alt="Student"
              className="
            absolute
            bottom-[90px]
            left-[30px]
            z-30
            h-[450px]
            w-auto
            max-w-none
            object-contain
          "
            />


           

            <div
              className="
            absolute
            right-[80px]
            top-[275px]
            z-40
            w-[195px]
            rounded-[15px]
            bg-white
            px-[15px]
            py-[17px]
            shadow-[0_15px_35px_rgba(0,0,0,0.12)]
          "
            >

              <p className="text-[11px] font-medium text-[#26282c]">
                Learning Progress
              </p>

              <div
                className="
              mt-[10px]
              text-[40px]
              font-[700]
              leading-none
              tracking-[-1.5px]
              text-[#27292d]
            "
              >
                55%
              </div>

              <div className="mt-[11px] h-[7px] w-full rounded-full bg-[#f0f0f0]">
                <div className="h-full w-[55%] rounded-full bg-[#c8ff00]" />
              </div>

            </div>


          

            <div
              className="
            absolute
            right-[80px]
            top-[200px]
            z-50
            h-[145px]
            w-[78px]
            rotate-[8deg]
          "
            >

              <span className="absolute left-[12px] top-[0px] h-[25px] w-[65px] rotate-[-5deg] rounded-full bg-[#caff00]" />
              <span className="absolute left-[4px] top-[29px] h-[25px] w-[68px] rotate-[-7deg] rounded-full bg-[#caff00]" />
              <span className="absolute left-[12px] top-[58px] h-[25px] w-[70px] rotate-[-9deg] rounded-full bg-[#caff00]" />
              <span className="absolute left-[1px] top-[87px] h-[25px] w-[70px] rotate-[-12deg] rounded-full bg-[#caff00]" />

            </div>

          </div>

        </div>


       

        <div className="grid min-h-[620px] grid-cols-2 items-start gap-x-[200px]">
      

          <div className="relative h-[620px]">

           

            <div
              className="
        absolute
        left-[120px]
        top-[35px]
        z-10
        h-[100px]
        w-[205px]
        rounded-[13px]
        bg-[#0847e8]
        px-[14px]
        py-[15px]
        text-white
      "
            >

              <div className="text-[12px] font-medium">
                Total Revenue
              </div>

              <div className="text-[8px] opacity-80">
                July '23
              </div>

              <div className="mt-[8px] text-[20px] font-semibold">
                $120.29
              </div>

              {/* <div className="mt-[8px] h-[6px] w-[94px] rounded-full bg-[#caff00]" /> */}
              {/* 60% PROGRESS LINE */}
              <div className="mt-[8px] h-[6px] w-[94px] overflow-hidden rounded-full bg-[#315fe5]">
                <div className="h-full w-[60%] rounded-full bg-[#caff00]" />
              </div>
            </div>


          

            <div
              className="
        absolute
        left-[150px]
        top-[160px]
        z-10
        h-[120px]
        w-[113px]
        rounded-[13px]
        bg-[#0847e8]
        px-[13px]
        py-[15px]
        text-white
      "
            >

              <div className="text-[11px]">
                Year to Date
              </div>

              <div className="text-[8px] opacity-80">
                2023
              </div>

              <div className="mt-[8px] text-[19px] font-semibold">
                $1,200.38
              </div>

              <span
                className="
          mt-[7px]
          inline-flex
          rounded-full
          bg-[#caff00]
          px-[7px]
          py-[3px]
          text-[7px]
          font-semibold
          text-[#111]
        "
              >
                +12%
              </span>

            </div>


         

            <img
              src="https://i.ibb.co.com/vnYgQcn/bytespace-woman.png"
              alt="Creator"
              className="
        absolute
        bottom-[0px]
        left-[35px]
        z-30
        h-[635px]
        w-auto
        max-w-none
        object-contain
      "
            />


         

            <div
              className="
        absolute
        right-[-50px]
        top-[150px]
        z-40
        h-[125px]
        w-[85px]
        rotate-[-12deg]
      "
            >

              <span className="absolute left-[5px] top-[0px] h-[23px] w-[70px] rotate-[10deg] rounded-full bg-[#caff00]" />
              <span className="absolute left-[0px] top-[27px] h-[23px] w-[70px] rotate-[8deg] rounded-full bg-[#caff00]" />
              <span className="absolute left-[8px] top-[54px] h-[23px] w-[68px] rotate-[5deg] rounded-full bg-[#caff00]" />
              <span className="absolute left-[17px] top-[81px] h-[23px] w-[64px] rotate-[1deg] rounded-full bg-[#caff00]" />

            </div>


          

            <div
              className="
        absolute
        bottom-[160px]
        left-[390px]
        z-50
        w-[218px]
        rounded-[15px]
        bg-white
        px-[14px]
        py-[13px]
        shadow-[0_12px_35px_rgba(0,0,0,0.12)]
      "
            >

              <div className="text-[11px] font-medium text-[#26282c]">
                Happy Students
              </div>

              <div className="mt-[2px] text-[8px] text-[#666]">
                4.5 (240)
                <span className="ml-[2px] text-[#caff00]">
                  ★
                </span>
              </div>

              <div className="mt-[7px] flex items-center">

                {[
                  12,
                  32,
                  47,
                  5,
                  11,
                  13,
                ].map((img, index) => (
                  <img
                    key={img}
                    src={`https://i.pravatar.cc/100?img=${img}`}
                    alt=""
                    className={`
              h-[31px]
              w-[31px]
              rounded-full
              border-2
              border-white
              object-cover
              ${index !== 0 ? "-ml-[8px]" : ""}
            `}
                  />
                ))}

                <span
                  className="
            -ml-[7px]
            flex
            h-[31px]
            w-[31px]
            items-center
            justify-center
            rounded-full
            border-2
            border-white
            bg-[#caff00]
            text-[8px]
            font-semibold
          "
                >
                  2K+
                </span>

              </div>

            </div>

          </div>


         

          <div className="relative pt-[60px]">

            <h2
              className="
        max-w-[450px]
        text-[38px]
        font-[700]
        leading-[1.12]
        tracking-[-1.5px]
        text-[#202329]
      "
            >
              Create & Manage
              <br />
              Courses Easily.
            </h2>

            <p
              className="
        mt-[35px]
        max-w-[480px]
        text-[14px]
        leading-[22px]
        text-[#656a74]
      "
            >
              <span className="font-semibold text-[#292c31]">
                ByteSpace
              </span>{" "}
              supports individuals or entities in the creation, publication,
              <br />
              and administration of educational courses.
            </p>

            <div className="mt-[32px] space-y-[13px]">

              {[
                "Share Your Expertise",
                "Monetize Your Passion",
                "Flexibility and Autonomy",
                "Build a Community",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-[9px]"
                >

                  <span
                    className="
              flex
              h-[18px]
              w-[18px]
              items-center
              justify-center
              rounded-full
              bg-[#0754e9]
              text-[11px]
              font-bold
              text-white
            "
                  >
                    ✓
                  </span>

                  <span className="text-[14px] text-[#282b31]">
                    {item}
                  </span>

                </div>
              ))}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}





const testimonials = [
  {
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    image: "https://i.ibb.co.com/zVCn6Y6Z/circle-1.png",
    quote:
      "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.",
  },
  {
    name: "James L.",
    role: "Lifelong Learner",
    image: "https://i.ibb.co.com/xSYWXXMG/circle-2.png",
    quote:
      "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
  },
  {
    name: "Alex B.",
    role: "Inspired Creator",
    image: "https://i.ibb.co.com/FLZspJpH/circle-3.png",
    quote:
      "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.",
  },
];

function CreatorCommunitySection() {
  return (
    <div className="bytespace-community-page">
     
     <section className="bytespace-creator-hero">
 
  <div className="bytespace-deco bytespace-deco-left" aria-hidden="true">
    <span />
    <span />
  </div>

  <div className="bytespace-deco bytespace-deco-top" aria-hidden="true">
    <span />
    <span />
    <span />
  </div>

  <div className="bytespace-deco bytespace-deco-ring" aria-hidden="true" />

  <div className="bytespace-deco-triangle" aria-hidden="true">
   
  </div>

  <div className="bytespace-deco-white" aria-hidden="true" />

  <div
    className="bytespace-deco-bottom-right"
    aria-hidden="true"
  >
    <span />
    <span />
    <span />
  </div>

 
  <div className="bytespace-creator-content">
    <h1>
      Unlock Your Potential as a
      <br />
      Creator with ByteSpace
    </h1>

    <p>
      Experience the collaboration of numerous creators and an expanding
      selection of courses. Register now and become a part of a community
      comprising over 10,000 local and international creators. Utilize our
      Course Editor, and showcase your expertise by publishing your first
      course on the ByteSpace Course Library.
    </p>

    <a href="/register" className="btn bytespace-creator-button">
      Join as Creator
    </a>
  </div>
</section>

    
      <section className="bytespace-testimonials">
        <div className="bytespace-testimonials-container">
          <div className="bytespace-testimonials-heading">
            <h2>
              Discover What Our
              <br />
              Community Is Saying
            </h2>

            <p>
              At ByteSpace, our vibrant community of learners and
              creators is at the heart of what we do. Hear directly
              from those who have experienced the transformative
              journey of learning and creating on our platform. Explore
              testimonials that reflect the diverse perspectives of
              enthusiastic learners and accomplished creators.
            </p>
          </div>

          <div className="bytespace-testimonial-grid">
            {testimonials.map((testimonial) => (
              <article
                key={testimonial.name}
                className="bytespace-testimonial-card"
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="bytespace-testimonial-avatar"
                />

                <h3>{testimonial.name}</h3>

                <span className="bytespace-testimonial-role">
                  {testimonial.role}
                </span>

                <p className="bytespace-testimonial-quote">
                  "{testimonial.quote}"
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      
      <footer className="bytespace-community-footer">
        <div className="bytespace-footer-container">
          <div className="bytespace-footer-top">
          
            <div className="bytespace-footer-newsletter">
              <a href="#" className="bytespace-footer-logo">
                <span className="bytespace-footer-logo-mark">
                  b
                </span>
                <span>ByteSpace</span>
              </a>

              <p>
                Stay Up to date with our latest features and releases
                by joining our newsletter.
              </p>

            <div className="bytespace-newsletter-form">
  <input
    type="email"
    placeholder="Enter your email"
    aria-label="Your email address"
  />

  <button
    type="button"
    className="btn bytespace-newsletter-button"
  >
    Search
  </button>
</div>

              <small>
                By subscribing, you agree to our Privacy Policy and
                consent to receive updates from our company.
              </small>
            </div>

           
            <div className="bytespace-footer-links">
              <div>
                <a href="#">Featured Courses</a>
                <a href="#">Featured Categories</a>
                <a href="#">Business</a>
                <a href="#">IT</a>
                <a href="#">Design</a>
              </div>

              <div>
                <a href="#">Development</a>
                <a href="#">Marketing</a>
                <a href="#">Photography</a>
                <a href="#">Finance</a>
                <a href="#">Sport</a>
              </div>

              <div>
                <a href="#">Become a Creator</a>
                <a href="#">Affiliate Program</a>
                <a href="#">Contact</a>
                <a href="#">Help</a>
                <a href="#">About</a>
              </div>
            </div>
          </div>

       
          <div className="bytespace-footer-bottom">
            <p>© 2023 ByteSpace. All rights reserved.</p>

            <nav aria-label="Legal links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Cookies Settings</a>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}
