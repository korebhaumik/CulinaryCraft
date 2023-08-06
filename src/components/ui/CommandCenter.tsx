import React from "react";

type Props = {};

export default function CommandCenter({}: Props) {
  return (
    <button
      className="bg-zinc-100 p-3 rounded-lg border"
      name="activate-command"
      id="activate-command"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M6.5 21C5.53333 21 4.70833 20.6583 4.025 19.975C3.34167 19.2917 3 18.4667 3 17.5C3 16.5333 3.34167 15.7083 4.025 15.025C4.70833 14.3417 5.53333 14 6.5 14H8V10H6.5C5.53333 10 4.70833 9.65833 4.025 8.975C3.34167 8.29167 3 7.46667 3 6.5C3 5.53333 3.34167 4.70833 4.025 4.025C4.70833 3.34167 5.53333 3 6.5 3C7.46667 3 8.29167 3.34167 8.975 4.025C9.65833 4.70833 10 5.53333 10 6.5V8H14V6.5C14 5.53333 14.3417 4.70833 15.025 4.025C15.7083 3.34167 16.5333 3 17.5 3C18.4667 3 19.2917 3.34167 19.975 4.025C20.6583 4.70833 21 5.53333 21 6.5C21 7.46667 20.6583 8.29167 19.975 8.975C19.2917 9.65833 18.4667 10 17.5 10H16V14H17.5C18.4667 14 19.2917 14.3417 19.975 15.025C20.6583 15.7083 21 16.5333 21 17.5C21 18.4667 20.6583 19.2917 19.975 19.975C19.2917 20.6583 18.4667 21 17.5 21C16.5333 21 15.7083 20.6583 15.025 19.975C14.3417 19.2917 14 18.4667 14 17.5V16H10V17.5C10 18.4667 9.65833 19.2917 8.975 19.975C8.29167 20.6583 7.46667 21 6.5 21ZM6.5 19C6.91667 19 7.27083 18.8542 7.5625 18.5625C7.85417 18.2708 8 17.9167 8 17.5V16H6.5C6.08333 16 5.72917 16.1458 5.4375 16.4375C5.14583 16.7292 5 17.0833 5 17.5C5 17.9167 5.14583 18.2708 5.4375 18.5625C5.72917 18.8542 6.08333 19 6.5 19ZM17.5 19C17.9167 19 18.2708 18.8542 18.5625 18.5625C18.8542 18.2708 19 17.9167 19 17.5C19 17.0833 18.8542 16.7292 18.5625 16.4375C18.2708 16.1458 17.9167 16 17.5 16H16V17.5C16 17.9167 16.1458 18.2708 16.4375 18.5625C16.7292 18.8542 17.0833 19 17.5 19ZM10 14H14V10H10V14ZM6.5 8H8V6.5C8 6.08333 7.85417 5.72917 7.5625 5.4375C7.27083 5.14583 6.91667 5 6.5 5C6.08333 5 5.72917 5.14583 5.4375 5.4375C5.14583 5.72917 5 6.08333 5 6.5C5 6.91667 5.14583 7.27083 5.4375 7.5625C5.72917 7.85417 6.08333 8 6.5 8ZM16 8H17.5C17.9167 8 18.2708 7.85417 18.5625 7.5625C18.8542 7.27083 19 6.91667 19 6.5C19 6.08333 18.8542 5.72917 18.5625 5.4375C18.2708 5.14583 17.9167 5 17.5 5C17.0833 5 16.7292 5.14583 16.4375 5.4375C16.1458 5.72917 16 6.08333 16 6.5V8Z"
          fill="black"
        />
      </svg>
    </button>
  );
}
