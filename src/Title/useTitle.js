import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `Toy Story| ${title}`;
  }, [title]);
};

export default useTitle;
