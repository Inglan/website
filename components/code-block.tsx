import { toJsxRuntime } from "hast-util-to-jsx-runtime";
import { Fragment, jsxs, jsx } from "react/jsx-runtime";
import { refractor } from "refractor";
import CodeCopyButton from "./code-copy-button";

export default async function CodeBlock({
  code,
  language,
}: {
  code: string;
  language: string;
}) {
  const reactNode = HighlightCode({
    code,
    language,
  });

  return (
    <>
      <div className="not-prose border-y -mx-4 border-dashed">
        <div className="flex flex-row text-foreground/75 justify-center items-center">
          <div className="pl-4">{language}</div>
          <div className="grow"></div>
          <CodeCopyButton code={code} />
        </div>
        <pre className="px-4 p-2 overflow-auto">{reactNode}</pre>
      </div>
    </>
  );
}

async function HighlightCode({
  code,
  language,
}: {
  code: string;
  language: string;
}) {
  try {
    const tree = refractor.highlight(code, language);
    const reactNode = toJsxRuntime(tree, { Fragment, jsxs, jsx });

    return reactNode;
  } catch {
    return <>{code}</>;
  }
}
