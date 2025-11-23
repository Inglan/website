"use client";

export default function CodeBlock({
  code,
  language,
}: {
  code: string;
  language: string;
}) {
  return (
    <>
      {language}
      {code}
    </>
  );
}
