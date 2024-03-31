export interface Blogs {
    feed: Feed;
    items: BlogItem[];
}

export interface Feed {
    link: string;
}

export interface BlogItem {
    author: string;
    thumbnail: string;
    title: string;
    content: string;
    description: string;
    pubDate: string;
    link: string;
}