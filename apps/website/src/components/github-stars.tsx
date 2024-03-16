export async function GithubStars() {
  const response = await fetch(
    "https://api.github.com/repos/pontusab/reactnative.se"
  );

  const data = await response.json();

  return (
    <a
      href="https://github.com/pontusab/reactnative.se"
      className="border flex justify-center h-8 leading-[30px] text-[#878787]"
    >
      <div className="bg-[#1D1D1D] pl-2 pr-3 text-[14px] flex items-center space-x-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={18}
          height={15}
          fill="none"
        >
          <path
            fill="#878787"
            d="M6.375 11.683 9 10.186l2.625 1.517-.688-2.837 2.313-1.891-3.042-.257L9 4.038l-1.208 2.66-3.042.257 2.313 1.91-.688 2.818Zm-2.52 3.29 1.353-5.536L.667 5.714l6-.493L9 0l2.333 5.221 6 .493-4.541 3.723 1.354 5.537L9 12.037l-5.146 2.935Z"
          />
        </svg>
        <span className="font-medium">Star</span>
      </div>
      <div className="px-4 text-[14px]">{data.stargazers_count ?? 0}</div>
    </a>
  );
}
