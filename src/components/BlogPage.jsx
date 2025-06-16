import { useEffect, useState } from "react";
import Markdown from "react-markdown";
// title, date, coverImg, <-- props
export default function BlogPage({blogPath}) {
  const [mdContent, setMdContent] = useState("");

  useEffect(() => {
    fetch(blogPath)
    .then((res) => res.text())
    .then((text) => setMdContent(text));
  }, [blogPath])
  return (
    <>
      <Markdown>{mdContent}</Markdown>
    </>
  );
}
