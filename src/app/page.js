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
    <></>