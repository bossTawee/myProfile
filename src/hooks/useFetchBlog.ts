import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { Blogs } from "../types/blog";

const baseUrl =
  "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@oakraw";

const useFetchBlog = (): { blogs: Blogs | null; fetch: () => void } => {
  const [blogs, setBlogs] = useState<Blogs | null>(null);
  const fetch = useCallback(async () => {
    const response = await axios.get<Blogs>(baseUrl);
    setBlogs(response.data);
  }, []); 

  useEffect(() => {
    fetch();
  }, [fetch]);

  return { blogs, fetch };
};

export default useFetchBlog;