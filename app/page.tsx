"use client";

/** Add your relevant code here for the issue to reproduce */
export default function Home() {
  const divStyles = "width: 100%;";

  return (
    <>
      <style jsx>
        {`
          div {
            ${divStyles}
            display: flex;
            flex-direction: row;
            align-items: center;
          }
        `}
      </style>

      <div>
        <h1>Some heading</h1>
        <p>Some paragraph</p>
      </div>
    </>
  );
}
