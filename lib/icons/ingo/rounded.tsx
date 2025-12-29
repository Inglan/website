import * as React from "react";

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={512}
      height={512}
      fill="none"
      {...props}
    >
      <g clipPath="url(#a)">
        <path fill="#11111B" d="M0 0h512v512H0z" />
        <path
          stroke="#45475A"
          strokeDasharray="5 5"
          strokeWidth={2}
          d="M0 167h512M0 343h512M0 212h512M129 0v512M237 0v512M279 0v512M386 0v512"
        />
        <path
          fill="#CBA6F7"
          d="M278 344V211.989h19.072l.743 33.625-2.477-2.241c1.651-7.805 4.623-14.198 8.917-19.179 4.458-5.148 9.742-8.967 15.851-11.458 6.11-2.491 12.55-3.736 19.32-3.736 10.072 0 18.411 2.242 25.016 6.725 6.77 4.483 11.889 10.544 15.357 18.183 3.467 7.472 5.201 15.858 5.201 25.157V344h-20.806v-78.958c0-12.287-2.394-21.586-7.182-27.896-4.789-6.476-12.137-9.714-22.044-9.714-6.77 0-12.88 1.494-18.329 4.483-5.449 2.823-9.825 7.057-13.127 12.703-3.138 5.48-4.706 12.288-4.706 20.424V344H278ZM128 344v-20.941h43.848V187.941H128V167h109v20.941h-43.848v135.118H237V344H128Z"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h512v512H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SvgComponent;
