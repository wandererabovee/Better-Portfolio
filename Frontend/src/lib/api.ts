const BASE_URL = "http://localhost:8010/api";

export async function getBlogPosts() {
	const res = await fetch(`${BASE_URL}/blog`);
	if (!res.ok) throw new Error("Failed to fetch blog posts");
	return await res.json();
}

export async function getPageHeader(page: "home" | "blog" | "projects") {
	const res = await fetch("http://localhost:8010/api/header");
	const allHeadings = await res.json();
	return allHeadings[page];
}
