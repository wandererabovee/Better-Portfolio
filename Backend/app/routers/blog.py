from fastapi import APIRouter
import frontmatter
import os
import markdown

router = APIRouter()

BLOG_DIR = "app/content/blogs"

@router.get("")
def get_blogs():
    blogs = []
    for filename in os.listdir(BLOG_DIR):
        if filename.endswith(".md"):
            filepath = os.path.join(BLOG_DIR, filename)
            with open(filepath, "r", encoding="utf-8") as f:
                post = frontmatter.load(f)
                blogs.append({
                    "title": post.get("title"),
                    "date": post.get("date"),
                    "slug": post.get("slug"),
                    "topic": post.get("topic")
                })
    return blogs

@router.get("/{slug}")
def get_blog_by_slug(slug: str):
    for filename in os.listdir(BLOG_DIR):
        if filename.endswith(".md"):
            filepath = os.path.join(BLOG_DIR, filename)
            with open(filepath, "r", encoding="utf-8") as f:
                post = frontmatter.load(f)
                if post.get("slug") == slug:
                    html_content = markdown.markdown(post.content)
                    return {
                        "title": post.get("title"),
                        "date": post.get("date"),
                        "slug": post.get("slug"),
                        "topic": post.get("topic"),
                        "content": html_content
                    }
    return {"error": "Blog not found"}
