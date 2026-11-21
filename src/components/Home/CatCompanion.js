import React, { useEffect, useRef } from "react";

function CatCompanion() {
  const catRef = useRef(null);

  useEffect(() => {
    const followPointer = (event) => {
      if (!catRef.current) {
        return;
      }

      const bounds = catRef.current.getBoundingClientRect();
      const horizontal = (event.clientX - (bounds.left + bounds.width / 2)) / bounds.width;
      const vertical = (event.clientY - (bounds.top + bounds.height / 2)) / bounds.height;
      const gazeX = Math.max(-1, Math.min(1, horizontal * 3));
      const gazeY = Math.max(-1, Math.min(1, vertical * 3));

      catRef.current.style.setProperty("--cat-gaze-x", `${gazeX}px`);
      catRef.current.style.setProperty("--cat-gaze-y", `${gazeY}px`);
    };

    window.addEventListener("pointermove", followPointer, { passive: true });
    return () => window.removeEventListener("pointermove", followPointer);
  }, []);

  return (
    <div
      ref={catRef}
      className="cat-companion"
      role="img"
      aria-label="A calm cat companion looking toward you"
    >
      <svg viewBox="0 0 240 250" aria-hidden="true">
        <defs>
          <radialGradient id="cat-halo">
            <stop offset="0" stopColor="#b66ed8" stopOpacity="0.22" />
            <stop offset="1" stopColor="#b66ed8" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="120" cy="135" r="115" fill="url(#cat-halo)" />
        <ellipse cx="120" cy="224" rx="63" ry="10" fill="#080611" opacity="0.45" />
        <g className="cat-tail">
          <path
            d="M166 188 C203 200 222 181 217 159 C214 143 202 139 194 148"
            fill="none"
            stroke="#30223f"
            strokeWidth="20"
            strokeLinecap="round"
          />
          <path
            d="M166 188 C203 200 222 181 217 159 C214 143 202 139 194 148"
            fill="none"
            stroke="#74538a"
            strokeWidth="3"
            strokeLinecap="round"
            opacity="0.8"
          />
        </g>
        <path
          d="M65 211 C65 168 84 139 119 136 C156 139 176 168 176 211 Z"
          fill="#342544"
          stroke="#806297"
          strokeWidth="2.5"
        />
        <path
          d="M97 159 C91 181 93 204 104 213 L136 213 C147 204 149 181 143 159 C134 150 106 150 97 159 Z"
          fill="#b9a2c6"
          opacity="0.78"
        />
        <ellipse cx="91" cy="209" rx="27" ry="12" fill="#493457" />
        <ellipse cx="148" cy="209" rx="27" ry="12" fill="#493457" />
        <path
          d="M78 77 L70 36 Q68 27 77 32 L107 57 M157 77 L166 36 Q168 27 159 32 L129 57"
          fill="#342544"
          stroke="#806297"
          strokeWidth="3"
          strokeLinejoin="round"
        />
        <path d="M79 53 L77 41 L96 58 Z M157 53 L159 41 L140 58 Z" fill="#d78da9" />
        <ellipse
          cx="118"
          cy="96"
          rx="49"
          ry="43"
          fill="#3b2a4d"
          stroke="#9675aa"
          strokeWidth="2.5"
        />
        <ellipse cx="98" cy="96" rx="11" ry="14" fill="#d7bb78" />
        <ellipse cx="138" cy="96" rx="11" ry="14" fill="#d7bb78" />
        <g className="cat-pupils">
          <ellipse cx="98" cy="96" rx="4" ry="9" fill="#17121d" />
          <ellipse cx="138" cy="96" rx="4" ry="9" fill="#17121d" />
          <circle cx="96.5" cy="92.5" r="2" fill="#fff" opacity="0.9" />
          <circle cx="136.5" cy="92.5" r="2" fill="#fff" opacity="0.9" />
        </g>
        <ellipse cx="118" cy="111" rx="4" ry="3" fill="#d78da9" />
        <path
          d="M118 114 C114 121 108 121 105 117 M118 114 C122 121 128 121 131 117"
          fill="none"
          stroke="#d4b8da"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M88 111 L61 106 M88 118 L62 121 M148 111 L175 106 M148 118 L174 121"
          fill="none"
          stroke="#c6aecf"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.85"
        />
        <path
          d="M83 143 Q118 157 153 143 L149 153 Q118 167 87 153 Z"
          fill="#b66ed8"
        />
        <circle cx="118" cy="157" r="5" fill="#f0d48a" />
      </svg>
    </div>
  );
}

export default CatCompanion;
